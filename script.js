// Vanilla JavaScript for portfolio interactivity

// ============================================
// 1. NAVBAR SCROLL DETECTION
// ============================================
const navbar = document.getElementById('navbar');
const navbarLinks = navbar.querySelectorAll('a[href^="#"]');

window.addEventListener('scroll', () => {
    const isScrolled = window.scrollY > 50;
    
    if (isScrolled) {
        navbar.classList.add('navbar-scrolled');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.remove('navbar-scrolled');
        navbar.classList.add('bg-transparent');
    }
});

// ============================================
// 2. SMOOTH SCROLL NAVIGATION
// ============================================
navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// 3. SCROLL ANIMATION (FADE IN)
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '-100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// ============================================
// 4. DYNAMIC YEAR IN FOOTER
// ============================================
const yearElement = document.getElementById('year-text');
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = `© ${currentYear} Dwi Vendy. All rights reserved.`;
}

// ============================================
// 5. MOBILE MENU TOGGLE (Optional)
// ============================================
// This can be extended if you add a mobile menu button

// ============================================
// 6. ACTIVE LINK HIGHLIGHTING
// ============================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(current => {
        const sectionId = current.getAttribute('id');
        const sectionTop = current.offsetTop - 150;
        const sectionHeight = current.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            navbarLinks.forEach(link => {
                link.classList.remove('text-[#FF6B4A]', 'font-bold');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('text-[#FF6B4A]', 'font-bold');
                }
            });
        }
    });
});

// ============================================
// 7. EMAIL LINK VALIDATION
// ============================================
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Allow default email client behavior
        // Can add additional logic here if needed
    });
});

// ============================================
// 8. EXTERNAL LINK HANDLING
// ============================================
const externalLinks = document.querySelectorAll('a[href^="http"]');
externalLinks.forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});

// ============================================
// 9. IMAGE LAZY LOADING (Optional)
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// 10. PERFORMANCE: Print page ready callback
// ============================================
window.addEventListener('load', () => {
    console.log('Portfolio page loaded successfully!');
    // Additional initialization can go here
});

// ============================================
// 11. KEYBOARD NAVIGATION
// ============================================
// Allow Tab key to navigate through links properly
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Could close mobile menu or other elements
    }
});

// ============================================
// 12. ACCESSIBILITY: Focus Management
// ============================================
navbarLinks.forEach(link => {
    link.addEventListener('focus', (e) => {
        link.style.outline = '2px solid #FF6B4A';
        link.style.outlineOffset = '2px';
    });
    
    link.addEventListener('blur', (e) => {
        link.style.outline = 'none';
    });
});

// ============================================
// 13. FORM VALIDATION (if you add contact form)
// ============================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ============================================
// 14. LOCAL STORAGE EXAMPLE
// ============================================
// Store theme preference or user data if needed
if (localStorage.getItem('theme') === 'dark') {
    // Apply dark theme logic here
}

// ============================================
// 15. RESIZE OBSERVER FOR RESPONSIVE ADJUSTMENTS
// ============================================
if ('ResizeObserver' in window) {
    const resizeObserver = new ResizeObserver(() => {
        // Handle responsive adjustments
    });
    
    // Can observe specific elements if needed
}

console.log('Portfolio scripts loaded successfully!');
