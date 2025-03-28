// Preloader
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").classList.add("hide");
        document.getElementById("home").style.display = "block";
    }, 700);
});



// Bottom Navigation Menu
const bottomMenu = document.querySelector('.nav__menu');
const menuHideBtn = document.querySelector('.menu-hide-btn');
const menuShowBtn = document.querySelector('.menu-show-btn');
let menuTimeout;
let isHoveringMenu = false;
checkScrollPosition();
window.addEventListener("scroll", handleScroll);
menuHideBtn.addEventListener('click', hideMenuManual);
menuShowBtn.addEventListener('click', showMenuManual);
bottomMenu.addEventListener('mouseenter', () => {
    isHoveringMenu = true;
    clearTimeout(menuTimeout);
    if (window.scrollY > 10) {
        menuHideBtn.classList.add('show');
    }
});
bottomMenu.addEventListener('mouseleave', () => {
    isHoveringMenu = false;
    if (window.scrollY > 10 && !menuHideBtn.matches(':hover')) {
        menuTimeout = setTimeout(hideMenuAuto, 2500);
    }
});
menuHideBtn.addEventListener('mouseenter', () => {
    isHoveringMenu = true;
    clearTimeout(menuTimeout);
});
menuHideBtn.addEventListener('mouseleave', () => {
    isHoveringMenu = false;
    if (window.scrollY > 10) {
        menuTimeout = setTimeout(hideMenuAuto, 2500);
    }
});
function checkScrollPosition() {
    if (window.scrollY < 10) {
        menuHideBtn.classList.remove('show');
    } else {
        menuHideBtn.classList.add('show');
    }
}
function handleScroll() {
    showMenu();
    if (!isHoveringMenu) {
        clearTimeout(menuTimeout);
        menuTimeout = setTimeout(hideMenuAuto, 2500);
    }
}
function showMenu() {
    bottomMenu.classList.remove('hide');
    if (window.scrollY > 10) {
        menuHideBtn.classList.add('show');
    }
    menuShowBtn.classList.remove('active');
    checkScrollPosition();
}
function hideMenuAuto() {
    if (window.scrollY > 10 && !isHoveringMenu) {
        bottomMenu.classList.add('hide');
        menuHideBtn.classList.remove('show');
        menuShowBtn.classList.add('active');
    }
}
function hideMenuManual() {
    bottomMenu.classList.add('hide');
    menuHideBtn.classList.remove('show');
    menuShowBtn.classList.add('active');
    isHoveringMenu = false;
}
function showMenuManual() {
    bottomMenu.classList.remove('hide');
    menuShowBtn.classList.remove('active');
    if (window.scrollY > 10) {
        menuHideBtn.classList.add('show');
    }
    if (!isHoveringMenu) {
        clearTimeout(menuTimeout);
        menuTimeout = setTimeout(hideMenuAuto, 2500);
    }
}

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



// Show header when scrolling up
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
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



// Background particle effect
document.addEventListener("DOMContentLoaded", function () {
    const numStars = 120;
    const starsContainer = document.querySelector(".stars");
    const body = document.querySelector("body");
    const bodyHeight = body.scrollHeight;
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.top = `${Math.random() * bodyHeight}px`;
        star.style.left = `${Math.random() * 98}vw`;
        let size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        starsContainer.appendChild(star);
    }
});



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



// Scroll animation for shape-small-1
gsap.registerPlugin(ScrollTrigger);
const shapeSmall1 = document.querySelector('.home__shape-small-1');
const moveDistance = 80; // Khoảng cách di chuyển (px)
const moveDuration = 1.5; // Thời gian di chuyển (s)
let direction = 1; // 1 = trái -> phải, -1 = phải -> trái
sections.forEach((section, index) => {
    ScrollTrigger.create({
        trigger: section,
        start: "top center",
        onEnter: () => {
            direction = index % 2 === 0 ? 1 : -1; // Chẵn (0, 2, 4) -> phải, Lẻ (1, 3, 5) -> trái
            animateShapeSmall1(direction);
        },
        onEnterBack: () => {
            direction = index % 2 === 0 ? 1 : -1;
            animateShapeSmall1(direction);
        }
    });
});
function animateShapeSmall1(dir) {
    if (window.innerWidth > 768) {
        gsap.to(shapeSmall1, {
            x: dir * moveDistance,
            duration: moveDuration,
            ease: "power2.inOut"
        });
    }
}



// Language switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const languageBtn = document.getElementById('languageBtn');
    const elementsToTranslate = document.querySelectorAll('[data-en], [data-vi]');
    let currentLanguage = localStorage.getItem('language') || 'en';
    function applyLanguage(lang) {
        document.body.classList.remove('language-en', 'language-vi');
        document.body.classList.add(`language-${lang}`);
        elementsToTranslate.forEach(element => {
            if (element.hasAttribute(`data-${lang}`)) {
                if ((element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') && 
                    element.hasAttribute('placeholder')) {
                    element.placeholder = element.getAttribute(`data-${lang}`);
                }
                else if (element.tagName === 'BUTTON' || element.classList.contains('button')) {
                    const translation = element.getAttribute(`data-${lang}`);
                    const icon = element.querySelector('i')?.outerHTML || '';
                    element.innerHTML = `${translation}${icon}`.trim();
                }
                else {
                    const translation = element.getAttribute(`data-${lang}`);
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = translation;
                    ['b', 'i', 'a', 'span', 'strong', 'em'].forEach(tag => {
                        const original = element.querySelector(tag);
                        const temp = tempDiv.querySelector(tag);
                        if (original && temp) {
                            temp.outerHTML = original.outerHTML;
                        }
                    });
                    element.innerHTML = tempDiv.innerHTML;
                }
            }
        });
        languageBtn.classList.toggle('vi', lang === 'vi');
        localStorage.setItem('language', lang);
        currentLanguage = lang;
    }
    languageBtn.addEventListener('click', function() {
        const newLanguage = currentLanguage === 'en' ? 'vi' : 'en';
        applyLanguage(newLanguage);
    });
    applyLanguage(currentLanguage);
});
