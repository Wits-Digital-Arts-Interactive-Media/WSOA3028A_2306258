const contentData = {
    home: "<h2>Welcome to the Home Page</h2><p>This is the home page content.</p>",
    about: "<h2>About Us</h2><p>Learn more about our company.</p>",
    services: "<h2>Our Services</h2><p>Explore the services we offer.</p>",
    contact: "<h2>Contact Us</h2><p>Get in touch with us.</p>"
};

// Function to handle navigation
function navigate(event) {
    event.preventDefault();
    const page = event.target.dataset.page;
    if (contentData.hasOwnProperty(page)) {
        loadContent(contentData[page]);
        updateActiveLink(event.target);
    } else {
        loadContent("<h2>Page Not Found</h2><p>The requested page does not exist.</p>");
    }
}

// Function to load content into the content div
function loadContent(content) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = content;
}

// Function to update the active link in the navigation
function updateActiveLink(clickedLink) {
    const navLinks = document.querySelectorAll('#main-nav a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    clickedLink.classList.add('active');
}

// Add event listeners to navigation links
const navLinks = document.querySelectorAll('#main-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', navigate);
});

// Load default content on page load
window.addEventListener('load', () => {
    loadContent(contentData.home);
    document.querySelector('[data-page="home"]').classList.add('active');
});