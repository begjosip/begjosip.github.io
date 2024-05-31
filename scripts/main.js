const homeButton = document.getElementById('home-btn');
const projectsButton = document.getElementById('projects-btn');
const contactButton = document.getElementById('contact-btn');
const resumeButton = document.getElementById('resume-btn');
const faqButton = document.getElementById('faq-btn');

const homeSection = document.getElementById('home-section');
const projectsSection = document.getElementById('projects-section');
const contactSection = document.getElementById('contact-section');
const faqSection = document.getElementById('faq-section');

const buttons = {homeButton, projectsButton, contactButton, faqButton};
const sections = {homeSection, projectsSection, contactSection, faqSection};

function handleHomeClick() {
    deactivateOtherNavigators();
    this.classList.add('active');
    homeSection.classList.add('active');
}

function handleProjectsClick() {
    deactivateOtherNavigators();
    this.classList.add('active');
    projectsSection.classList.add('active');
}

function handleContactClick() {
    deactivateOtherNavigators();
    this.classList.add('active');
    contactSection.classList.add('active');
}

function handleResumeClick() {
    window.open('../public/JosipBegicCV-2024.pdf', '_blank');
}

function handleFaqClick() {
    deactivateOtherNavigators();
    this.classList.add('active');
    faqSection.classList.add('active');
}

function deactivateOtherNavigators() {
    for (const buttonKey in buttons) {
        if (buttons.hasOwnProperty(buttonKey))
            buttons[buttonKey].classList.remove('active');
    }

    for (const section in sections) {
        if (sections.hasOwnProperty(section))
            sections[section].classList.remove('active')
    }
}

homeButton.addEventListener('click', handleHomeClick);
projectsButton.addEventListener('click', handleProjectsClick);
contactButton.addEventListener('click', handleContactClick);
resumeButton.addEventListener('click', handleResumeClick);
faqButton.addEventListener('click', handleFaqClick);