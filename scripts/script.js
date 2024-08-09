const URL = 'https://api.unsplash.com/photos/?client_id=SZUcInkHkFOC7JTtUbOVmciXeYfGu7NgBz_7vvul1kI';
const client_id = 'SZUcInkHkFOC7JTtUbOVmciXeYfGu7NgBz_7vvul1kI';

async function show () {
    let image = await getNewImage();
    imageToDisplay.src = image;
}
async function getNewImage() {
    return fetch(URL)
    .then ((response) => response.json())
    .then ((data) => {
        let img = data.results;
        return img.urls.regular;
    })
}

getNewImage();

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
