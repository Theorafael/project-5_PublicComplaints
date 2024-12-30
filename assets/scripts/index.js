// Theme Switcher Functionality
const themeSwitcher = document.getElementById('theme-switcher');
const body = document.body;
const sidebar = document.querySelector('.sidebar');
const rightSidebar = document.querySelector('.right');

themeSwitcher.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    sidebar.classList.toggle('dark-theme');
    rightSidebar.classList.toggle('dark-theme');
});