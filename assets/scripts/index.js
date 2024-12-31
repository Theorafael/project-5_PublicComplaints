// assets/scripts/index.js

// Function to toggle the theme
function toggleTheme() {
    // Toggle the dark-theme class on the body
    document.body.classList.toggle('dark-theme');

    // Change the icon based on the current theme
    const themeSwitcher = document.getElementById('theme-switcher');
    const isDarkTheme = document.body.classList.contains('dark-theme');
    themeSwitcher.innerHTML = isDarkTheme ? '<i class="ai-moon"></i>' : '<i class="ai-sun"></i>';

    // Save the theme preference in localStorage
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

// Function to load the saved theme preference
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeSwitcher = document.getElementById('theme-switcher');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeSwitcher.innerHTML = '<i class="ai-moon"></i>';
    } else {
        document.body.classList.remove('dark-theme');
        themeSwitcher.innerHTML = '<i class="ai-sun"></i>';
    }
}

// Add event listener to the theme toggle button
document.getElementById('theme-switcher').addEventListener('click', toggleTheme);

// Load the saved theme when the page loads
window.addEventListener('load', loadTheme);