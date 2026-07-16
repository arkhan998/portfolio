// Sidebar Toggle
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const sidebarClose = document.getElementById('sidebarClose');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
});

sidebarClose.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
        sidebarLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when link is clicked
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(link => {
    link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navLinks?.classList.remove('active');
    });
});

// Smooth Scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const section = document.querySelector(href);
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme') || 'light-mode';

if (currentTheme === 'dark-mode') {
    document.body.classList.add('dark-mode');
    updateThemeIcon();
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', 'light-mode');
    }
    updateThemeIcon();
});

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and elements
document.querySelectorAll('.service-card, .project-card, .contact-item, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Contact Form Handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Basic validation
        const formData = new FormData(contactForm);
        console.log('Form submitted:', Object.fromEntries(formData));
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Update active sidebar link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const link = document.querySelector(`.sidebar-link[href="#${sectionId}"]`);

        if (link) {
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
});

// Scroll to top on page load
window.scrollTo(0, 0);

// Console message
console.log('%c🚀 MALIK SAHIB - Professional Software Developer', 'font-size: 18px; color: #0066cc; font-weight: bold; text-shadow: 0 0 10px rgba(0, 102, 204, 0.5);');
console.log('%cEnterprise Solutions | Web Apps | AI | ERP | WhatsApp Automation', 'font-size: 14px; color: #64748b;');
console.log('%cEmail: akk728492@gmail.com | WhatsApp: +92 332-2964709', 'font-size: 12px; color: #0066cc;');