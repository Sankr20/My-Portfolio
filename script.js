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
    window.open('SANKARANARAYANAN - Resume.pdf', '_blank'); // Replace with actual path if needed
    $('#resumeModal').modal('hide'); // Close modal after download
});

const projects = [
    {
        title: 'E-commerce Automation Framework',
        description: 'A robust end-to-end automation framework for an e-commerce application using Selenium WebDriver and TestNG.',
        tools: 'Java, Selenium WebDriver, TestNG, Maven',
        link: 'https://github.com/Sankr20/Ecommerce-Site-Automation-Frame-Work-Design.git'
    },

    {
        title: 'End-to-End API Testing for Simple Books API',
        description: 'A complete API automation testing suite for the Simple Books API, developed with Postman and Newman, designed to validate functionality, security, and performance through comprehensive automated tests.',
        tools: 'Postman, Newman, JavaScript',
        link: 'https://github.com/Sankr20/API-Automation-Testing-for-Simple-Books-API'
    },
    {
        title: "End-to-End Automation Framework with Playwright",
        description: "An advanced automation framework built using Playwright and JavaScript, designed to automate end-to-end testing for web applications. The framework includes features like retry mechanisms, video and screenshot capturing on failure, Jenkins CI/CD integration, and Allure reporting.",
        tools: "Playwright, JavaScript, Jenkins, Allure",
        link: "https://github.com/Sankr20/Playwright-End-to-End-Automation-Framework"
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
