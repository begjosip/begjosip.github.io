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

const lightThemeButton = document.getElementById('light-box');
const darkThemeButton = document.getElementById('dark-box');



function handleLightTheme() {
    darkThemeButton.classList.remove('selected');
    this.classList.add('selected');
    document.body.classList.add('dark');
}

function handleDarkTheme() {
    lightThemeButton.classList.remove('selected');
    this.classList.add('selected');
    document.body.classList.remove('dark');
}

lightThemeButton.addEventListener('click', handleLightTheme);
darkThemeButton.addEventListener('click', handleDarkTheme);

const typewriterText = "Josip Begić";
const typewriterElement = document.getElementById('typewriter');

function typeWriter(text, element, delay = 100) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        } else {
            setTimeout(hideLoader, 1000);
        }
    }
    type();
}

function hideLoader() {
    document.querySelector('.loader-container').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
}

window.onload = function() {
    typeWriter(typewriterText, typewriterElement);
}