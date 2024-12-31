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


// Load complaints when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const complaintsList = document.getElementById('complaints-list');
    const complaints = JSON.parse(localStorage.getItem('complaints')) || [];

    complaints.forEach(complaint => {
        const complaintCard = document.createElement('div');
        complaintCard.className = 'complaint-card';
        complaintCard.innerHTML = `
            <h3>${complaint.title}</h3>
            <p>${complaint.description}</p>
            <small>Submitted by: ${complaint.name}</small>
        `;
        complaintsList.appendChild(complaintCard);
    });
});

// index.js

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Load theme on page load
window.onload = () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    }
};