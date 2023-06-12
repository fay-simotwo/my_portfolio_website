document.addEventListener('DOMContentLoaded', function() {
    const filters = document.querySelectorAll('.filters_button');
    const contentSections = document.querySelectorAll('[data-content]');
  
    filters.forEach((filter) => {
      filter.addEventListener('click', function() {
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
   document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Fetch form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Perform form validation or additional processing as needed
    
    // Display a success message
    alert(`Thank you, ${name}! Your message has been submitted.`);
    
    // Clear the form inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  });
  // Get the projects container and projects cards
const projectsContainer = document.querySelector(".projects_content_grid");
const projectsCards = document.querySelectorAll(".projects_card");

// Function to toggle the projects display
function toggleProjects() {
  // Toggle the "open" class on the projects container
  projectsContainer.classList.toggle("open");

  // Toggle the "open" class on each projects card
  projectsCards.forEach(card => card.classList.toggle("open"));
}

// Add a click event listener to the projects button
const projectsButton = document.querySelector(".projects_button");
projectsButton.addEventListener("click", toggleProjects);


