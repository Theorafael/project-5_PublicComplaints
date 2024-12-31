// Handle form submission
document.getElementById('complaint-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    const complaint = { name, title, description };

    // Save complaint to localStorage
    const complaints = JSON.parse(localStorage.getItem('complaints')) || [];
    complaints.push(complaint);
    localStorage.setItem('complaints', JSON.stringify(complaints));

    alert('Complaint submitted successfully!');
    window.location.href = 'index.html'; // Redirect to the complaints list
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