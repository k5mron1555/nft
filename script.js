const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.links__inner');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});