const modeToggle = document.getElementById('modeToggle');
const lightMode = document.querySelector('.mode-name:first-child');
const darkMode = document.querySelector('.mode-name:last-child');

modeToggle.addEventListener('change', () => {
  if (modeToggle.checked) {
    lightMode.classList.remove('active');
    darkMode.classList.add('active');
    // Add dark mode logic here
  } else {
    darkMode.classList.remove('active');
    lightMode.classList.add('active');
    // Add light mode logic here
  }
});

// Set initial state
lightMode.classList.add('active');

document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
