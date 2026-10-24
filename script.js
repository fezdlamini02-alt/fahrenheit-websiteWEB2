document.addEventListener('DOMContentLoaded', () => {
  const menuSearch = document.querySelector('[data-menu-search]');
  const menuList = document.querySelector('[data-menu-list]');
  const menuItems = [];
  const emptyMenuMessage = document.querySelector('[data-menu-empty]');
  const menuStatus = document.querySelector('[data-menu-status]');

  const filterMenu = () => {
    const query = menuSearch.value.trim().toLowerCase();
    let visible = 0;

    menuItems.forEach(item => {
      const matches = item.textContent.toLowerCase().includes(query);
      item.hidden = !matches;
      if (matches) visible++;
    });

    if (emptyMenuMessage) emptyMenuMessage.hidden = visible > 0;
  };

  if (menuSearch && menuList && menuStatus) {
    menuSearch.addEventListener('input', filterMenu);

    fetch('menu.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Menu request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then(items => {
        if (!Array.isArray(items)) {
          throw new TypeError('Menu data must be a JSON array');
        }

        items.forEach(item => {
          if (
            typeof item.name !== 'string' ||
            typeof item.category !== 'string' ||
            typeof item.description !== 'string' ||
            typeof item.image !== 'string' ||
            typeof item.alt !== 'string' ||
            typeof item.price !== 'number' ||
            !Number.isFinite(item.price)
          ) {
            throw new TypeError('Menu item is missing valid required fields');
          }
        });

        items.forEach(item => {
          const card = document.createElement('article');
          card.className = 'menu-item';

          const image = document.createElement('img');
          image.src = item.image;
          image.alt = item.alt;
          image.loading = 'lazy';
          image.decoding = 'async';

          const name = document.createElement('h3');
          name.textContent = item.name;

          const category = document.createElement('p');
          category.className = 'menu-category';
          category.textContent = item.category;

          const description = document.createElement('p');
          description.textContent = `R${item.price} — ${item.description}`;

          const orderLink = document.createElement('a');
          orderLink.href = '#reservation';
          orderLink.className = 'btn';
          orderLink.textContent = 'Order Now';

          card.append(image, name, category, description, orderLink);
          menuList.append(card);
          menuItems.push(card);
        });

        menuStatus.hidden = true;
        filterMenu();
      })
      .catch(error => {
        console.error('Unable to load the menu:', error);
        menuStatus.textContent = 'The menu could not be loaded. Please refresh the page to try again.';
      });
  }

  document.querySelectorAll('form[data-validated-form]').forEach(form => {
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const status = form.querySelector('[data-form-status]');
      const submitButton = form.querySelector('[type="submit"]');
      const formName = form.querySelector('[name="form-name"]')?.value;

      if (!formName || !form.hasAttribute('data-netlify')) {
        if (status) status.textContent = 'This form is not configured for online submission.';
        console.error('Form submission is missing its Netlify form configuration.');
        return;
      }

      const formData = new FormData(form);
      formData.set('form-name', formName);
      if (submitButton) submitButton.disabled = true;
      if (status) status.textContent = 'Sending...';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        });

        if (!response.ok) {
          throw new Error(`Form submission failed with status ${response.status}`);
        }

        form.reset();
        if (status) status.textContent = form.dataset.successMessage || 'Your form has been sent.';
      } catch (error) {
        console.error('Unable to submit the form:', error);
        if (status) status.textContent = 'Your form could not be sent. Please try again or contact us by phone or email.';
      } finally {
        if (submitButton) submitButton.disabled = false;
      }
    });
  });

  const dateInput = document.querySelector('[data-no-past-date]');
  if (dateInput) {
    const today = new Date();
    dateInput.min = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
      .toISOString().slice(0, 10);
  }

  document.querySelectorAll('.accordion[aria-controls]').forEach(button => {
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    if (!panel) return;

    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      panel.hidden = expanded;
    });
  });

  const galleryItems = document.querySelectorAll('.gallery-item');
  if (galleryItems.length && typeof HTMLDialogElement !== 'undefined') {
    const lightbox = document.createElement('dialog');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('aria-label', 'Image preview');

    const closeButton = document.createElement('button');
    closeButton.className = 'lightbox-close';
    closeButton.type = 'button';
    closeButton.setAttribute('aria-label', 'Close image preview');
    closeButton.textContent = '×';

    const image = document.createElement('img');
    lightbox.append(closeButton, image);
    document.body.append(lightbox);

    galleryItems.forEach(button => {
      button.addEventListener('click', () => {
        const sourceImage = button.querySelector('img');
        if (!sourceImage) return;
        image.src = sourceImage.currentSrc || sourceImage.src;
        image.alt = sourceImage.alt;
        lightbox.showModal();
      });
    });

    closeButton.addEventListener('click', () => lightbox.close());
    lightbox.addEventListener('click', event => {
      if (event.target === lightbox) lightbox.close();
    });
    lightbox.addEventListener('cancel', event => {
      event.preventDefault();
      lightbox.close();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && lightbox.open) lightbox.close();
    });
  }

  const revealItems = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15 });

    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }
});
