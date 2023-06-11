document.addEventListener('DOMContentLoaded', function () {
    const filters = document.querySelectorAll('.filters_button');
    const contentSections = document.querySelectorAll('[data-content]');
  
    filters.forEach((filter) => {
      filter.addEventListener('click', function () {
        const target = this.getAttribute('data-target');
  
        // Hide all content sections
        contentSections.forEach((section) => {
          section.style.display = 'none';
        });
  
        // Show the target content section
        const targetSection = document.querySelector(target);
        if (targetSection) {
          targetSection.style.display = 'grid';
        }
      });
    });
  });
  