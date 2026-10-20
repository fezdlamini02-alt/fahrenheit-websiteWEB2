document.addEventListener('DOMContentLoaded', () => {

  // Menu Search Filter
  const menuSearch = document.querySelector('[data-menu-search]');
  const menuItems = document.querySelectorAll('[data-menu-item]');
  const emptyMenuMessage = document.querySelector('[data-menu-empty]');

  if (menuSearch) {
    menuSearch.addEventListener('input', () => {
      const query = menuSearch.value.toLowerCase();
      let visible = 0;

      menuItems.forEach(item => {
        const match = item.textContent.toLowerCase().includes(query);
        item.hidden = !match;
        if (match) visible++;
      });

      if (emptyMenuMessage) emptyMenuMessage.hidden = visible > 0;
    });
  }
  // Form Validation
  document.querySelectorAll('form[data-validated-form]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const status = form.querySelector('[data-form-status]');
      if (status) status.textContent = form.dataset.successMessage || 'Form is valid!';
    });
  });

  // Date Restriction (no past dates)
  const dateInput = document.querySelector('[data-no-past-date]');
  if (dateInput) {
    const today = new Date();
    dateInput.min = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
      .toISOString().slice(0, 10);
  }

  // Accordion (FAQs)
  document.querySelectorAll('.accordion').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      const panel = btn.nextElementSibling;
      panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Lightbox Gallery
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (galleryItems.length) {
    const lightbox = document.createElement('div');
    const img = document.createElement('img');
    Object.assign(lightbox.style, {
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      background: 'rgba(0,0,0,0.8)', display: 'none',
      justifyContent: 'center', alignItems: 'center', zIndex: 1000
    });
    Object.assign(img.style, { maxWidth: '90%', maxHeight: '90%' });
    lightbox.appendChild(img);
    document.body.appendChild(lightbox);

    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        img.src = item.src;
        lightbox.style.display = 'flex';
      });
    });
    lightbox.addEventListener('click', () => lightbox.style.display = 'none');
  }
});

// Google Maps API
function initMap() {
  const location = { lat: -26.236, lng: 28.369 }; // Brakpan coords
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15, center: location
  });
  new google.maps.Marker({ position: location, map, title: "Fahrenheit Seafood and Grill" });
}
