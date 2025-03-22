// Highlight navigation link on scroll
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");
        const link = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);
        link?.classList.toggle("active-link", scrollY > sectionTop && scrollY <= sectionTop + sectionHeight);
    });
});


// Toggle dark/light mode
const body = document.querySelector("body");
const modeToggle = document.querySelector(".dark-light");
const savedMode = localStorage.getItem("mode");
if (savedMode === "dark-mode") {
    body.classList.add("dark");
    modeToggle.classList.add("active");
} else {
    body.classList.remove("dark");
    modeToggle.classList.remove("active");
}
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
    localStorage.setItem("mode", body.classList.contains("dark") ? "dark-mode" : "light-mode");
});


// Preloader
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").classList.add("hide");
        document.getElementById("home").style.display = "block";
    }, 700);
});


// ScrollReveal animations
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 200,
    reset: true,
});
sr.reveal(`.profile__border, .profile__name`);
sr.reveal(`.profile__social, .profile_profession, .profile__info-group, .profile__buttons, .projects__card, 
.skills__area, .journey__area, .note`, { delay: 200, origin: 'bottom' });


// Animation counter achiverment
const counterElement = document.querySelector('.counter');
const animateCounter = (element, target, duration) => {
    let start = 0;
    const increment = target / (duration / 16);
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.ceil(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    updateCounter();
};
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateCounter(counterElement, 999, 2000);
            counterObserver.unobserve(counterElement);
        }
    });
}, { threshold: 0.5 });
counterElement && counterObserver.observe(counterElement);


// Progress bar animation
const skillsSection = document.getElementById('skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach((progressBar) => {
                progressBar.style.animation = 'progressAnimation 3s ease-in-out forwards';
            });
        }
    });
}, { threshold: 0.5 });
skillsSection && observer.observe(skillsSection);