document.addEventListener('DOMContentLoaded', () => {
  const menuSearch = document.querySelector('[data-menu-search]');
  const menuItems = Array.from(document.querySelectorAll('[data-menu-item]'));
  const emptyMenuMessage = document.querySelector('[data-menu-empty]');

  if (menuSearch && menuItems.length > 0) {
    const filterMenu = () => {
      const query = menuSearch.value.trim().toLowerCase();
      let visibleItems = 0;

      menuItems.forEach((item) => {
        const matches = item.textContent.toLowerCase().includes(query);
        item.hidden = !matches;
        if (matches) visibleItems += 1;
      });

      if (emptyMenuMessage) {
        emptyMenuMessage.hidden = visibleItems > 0;
      }
    };

    menuSearch.addEventListener('input', filterMenu);
  }

  document.querySelectorAll('form[data-validated-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const status = form.querySelector('[data-form-status]');
      if (status) {
        status.textContent = form.dataset.successMessage
          || 'Your form is valid. Submission is not connected to a server yet.';
      }

    });
  });

  const dateInput = document.querySelector('[data-no-past-date]');
  if (dateInput) {
    const today = new Date();
    const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000);
    dateInput.min = localDate.toISOString().slice(0, 10);
  }
});
