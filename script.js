// Smooth Scrolling Navbar
window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Resume Download Button
document.getElementById('confirm-download').addEventListener('click', function() {
    window.open('resume.pdf', '_blank'); // Replace with actual path if needed
    $('#resumeModal').modal('hide'); // Close modal after download
});

// Sample projects array
const projects = [
    {
        title: 'E-commerce Automation Framework',
        description: 'A robust end-to-end automation framework for an e-commerce application using Selenium WebDriver and TestNG.',
        tools: 'Java, Selenium WebDriver, TestNG, Maven',
        link: 'https://github.com/Sankr20/Ecommerce-Site-Automation-Frame-Work-Design.git'
    },
    // Add more project objects here
    {
        title: 'End-to-End API Testing for Simple Books API',
        description: 'A complete API automation testing suite for the Simple Books API, developed with Postman and Newman, designed to validate functionality, security, and performance through comprehensive automated tests.',
        tools: 'Postman, Newman, JavaScript',
        link: 'https://github.com/Sankr20/API-Automation-Testing-for-Simple-Books-API'
    }
];

// Function to dynamically add projects to the DOM
const projectContainer = document.getElementById('project-container');
projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('col-md-4', 'mb-4', 'animate__animated', 'animate__fadeInUp');
    card.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <p><strong>Tools & Techniques:</strong> ${project.tools}</p>
                <a href="${project.link}" class="btn btn-primary" target="_blank">View on GitHub</a>
            </div>
        </div>
    `;
    projectContainer.appendChild(card);
});

// Delay effect for project cards
const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
    card.classList.add('animate__animated', 'animate__fadeInUp');
});

// Delay effect for contact icons
const contactIcons = document.querySelectorAll('.contact-icon');
contactIcons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.1}s`;
    icon.classList.add('animate__animated', 'animate__zoomIn');
});
