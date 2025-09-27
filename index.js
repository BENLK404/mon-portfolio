let darkMode = true;
let currentLanguage = 'fr';

// SVG icônes pour le toggle de thème
const sunSVG = `
<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-sun-fill">
    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>
`;

const moonSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
</svg>
`;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme based on system preference or saved preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
        toggleTheme();
    }

    // Initialize language
    const savedLanguage = localStorage.getItem('language') || 'fr';
    if (savedLanguage !== currentLanguage) {
        toggleLanguage();
    }

    // Add scroll animations
    initScrollAnimations();

    // Add typing effect to name
    addTypingEffect();

    // Add particle background
    createParticleBackground();

    // Add smooth scrolling
    addSmoothScrolling();

    // Add interactive hover effects
    addInteractiveEffects();
});

// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const themeButton = document.querySelector('.fab[onclick="toggleTheme()"]');

    if (darkMode) {
        body.setAttribute('data-theme', 'light');
        if (themeButton) themeButton.innerHTML = sunSVG;
        darkMode = false;
        localStorage.setItem('theme', 'light');
    } else {
        body.removeAttribute('data-theme');
        if (themeButton) themeButton.innerHTML = moonSVG;
        darkMode = true;
        localStorage.setItem('theme', 'dark');
    }
}

// Language toggle functionality
function toggleLanguage() {
    const langButton = document.querySelector('.fab.lang');
    const elementsWithLang = document.querySelectorAll('[data-fr][data-en]');

    if (currentLanguage === 'fr') {
        currentLanguage = 'en';
        if (langButton) langButton.textContent = 'EN';
        document.documentElement.lang = 'en';

        elementsWithLang.forEach(element => {
            element.textContent = element.getAttribute('data-en');
        });
    } else {
        currentLanguage = 'fr';
        if (langButton) langButton.textContent = 'FR';
        document.documentElement.lang = 'fr';

        elementsWithLang.forEach(element => {
            element.textContent = element.getAttribute('data-fr');
        });
    }

    localStorage.setItem('language', currentLanguage);
}

// Scroll animations
function initScrollAnimations() {
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

    // Observe all cards
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });

    // Observe project cards for staggered animation
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
}

// Typing effect for name
function addTypingEffect() {
    const nameElement = document.querySelector('.name');
    if (!nameElement) return;

    const originalText = nameElement.textContent;
    let isAnimating = false;

    nameElement.addEventListener('mouseenter', () => {
        if (isAnimating) return;
        isAnimating = true;

        nameElement.textContent = '';

        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < originalText.length) {
                nameElement.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                    isAnimating = false;
                }, 1000);
            }
        }, 100);
    });
}

// Particle background
function createParticleBackground() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';
    document.body.appendChild(canvas);

    let particles = [];
    const particleCount = 50;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 3 + 1,
                color: ['#6366f1', '#f89820', '#0175c2'][Math.floor(Math.random() * 3)]
            });
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
        });

        // Draw connections
        particles.forEach((particle, i) => {
            particles.slice(i + 1).forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(otherParticle.x, otherParticle.y);
                    ctx.strokeStyle = `rgba(99, 102, 241, ${(100 - distance) / 100 * 0.2})`;
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(animateParticles);
    }

    resizeCanvas();
    createParticles();
    animateParticles();

    window.addEventListener('resize', () => {
        resizeCanvas();
        createParticles();
    });
}

// Smooth scrolling for internal links
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Toast notification system
function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, var(--primary), var(--secondary));
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        font-weight: 500;
        max-width: 300px;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    // Slide in
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);

    // Slide out and remove
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// Add interactive hover effects
function addInteractiveEffects() {
    // Add ripple animation CSS if not already present
    if (!document.getElementById('ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes rippleAnimation {
                0% {
                    transform: scale(0);
                    opacity: 1;
                }
                100% {
                    transform: scale(1);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.querySelectorAll('.contact-item, .project-card, .skill-tag, .tech-category').forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });

        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add ripple effect to buttons
    document.querySelectorAll('.fab, .contact-item').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.6);
                border-radius: 50%;
                transform: scale(0);
                animation: rippleAnimation 0.6s ease-out;
                pointer-events: none;
            `;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.remove();
                }
            }, 600);
        });
    });
}

// Skills progress animation
function animateSkillsProgress() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillTags = entry.target.querySelectorAll('.skill-tag');
                skillTags.forEach((tag, index) => {
                    setTimeout(() => {
                        tag.style.transform = 'scale(1)';
                        tag.style.opacity = '1';
                    }, index * 100);
                });
            }
        });
    });

    document.querySelectorAll('.skill-category').forEach(category => {
        const skillTags = category.querySelectorAll('.skill-tag');
        skillTags.forEach(tag => {
            tag.style.transform = 'scale(0.8)';
            tag.style.opacity = '0.6';
            tag.style.transition = 'all 0.3s ease';
        });
        observer.observe(category);
    });
}

// Counter animation for achievements
function animateCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target.querySelector('.achievement-number');
                if (!counter) return;

                const target = counter.textContent;
                const isNumber = target.match(/\d+/);

                if (isNumber) {
                    const targetValue = parseInt(isNumber[0]);
                    const suffix = target.replace(/\d+/, '');
                    let current = 0;
                    const increment = targetValue / 50;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= targetValue) {
                            counter.textContent = targetValue + suffix;
                            clearInterval(timer);
                        } else {
                            counter.textContent = Math.floor(current) + suffix;
                        }
                    }, 50);
                }
            }
        });
    }, { threshold: 0.7 });

    document.querySelectorAll('.achievement-card').forEach(card => {
        observer.observe(card);
    });
}

// Contact form functionality
function initContactForm() {
    const emailLink = document.querySelector('a[href^="mailto:"]');
    if (emailLink) {
        emailLink.addEventListener('click', (e) => {
            e.preventDefault();
            showContactModal();
        });
    }
}

function showContactModal() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        backdrop-filter: blur(10px);
    `;

    const form = document.createElement('div');
    form.style.cssText = `
        background: var(--bg-card);
        padding: 2rem;
        border-radius: 20px;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        border: 1px solid var(--border);
    `;

    form.innerHTML = `
        <h3 style="color: var(--text-primary); margin-bottom: 1.5rem; text-align: center; font-size: 1.5rem;">
            ${currentLanguage === 'fr' ? 'Me Contacter' : 'Contact Me'}
        </h3>
        <form id="contact-form" style="display: flex; flex-direction: column; gap: 1rem;">
            <input type="text" name="name" placeholder="${currentLanguage === 'fr' ? 'Votre nom' : 'Your name'}" required
                   style="padding: 12px; border: 1px solid var(--border); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary);">
            <input type="email" name="email" placeholder="${currentLanguage === 'fr' ? 'Votre email' : 'Your email'}" required
                   style="padding: 12px; border: 1px solid var(--border); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary);">
            <input type="text" name="subject" placeholder="${currentLanguage === 'fr' ? 'Sujet' : 'Subject'}" required
                   style="padding: 12px; border: 1px solid var(--border); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary);">
            <textarea name="message" placeholder="${currentLanguage === 'fr' ? 'Votre message' : 'Your message'}" rows="5" required
                      style="padding: 12px; border: 1px solid var(--border); border-radius: 8px; background: var(--bg-secondary); color: var(--text-primary); resize: vertical;"></textarea>
            <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                <button type="submit" style="flex: 1; padding: 12px; background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">
                    ${currentLanguage === 'fr' ? 'Envoyer' : 'Send'}
                </button>
                <button type="button" class="cancel-btn" style="flex: 1; padding: 12px; background: var(--bg-secondary); color: var(--text-secondary); border: 1px solid var(--border); border-radius: 8px; cursor: pointer;">
                    ${currentLanguage === 'fr' ? 'Annuler' : 'Cancel'}
                </button>
            </div>
        </form>
    `;

    modal.className = 'modal';
    modal.appendChild(form);
    document.body.appendChild(modal);

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });

    // Cancel button
    form.querySelector('.cancel-btn').addEventListener('click', () => {
        modal.remove();
    });

    // Form submission
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast(currentLanguage === 'fr' ? 'Message envoyé avec succès!' : 'Message sent successfully!');
        modal.remove();
    });
}

// Search functionality
function initAdvancedSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = currentLanguage === 'fr' ? 'Rechercher...' : 'Search...';
    searchInput.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        padding: 12px 20px;
        border: 1px solid var(--border);
        border-radius: 25px;
        background: var(--bg-card);
        color: var(--text-primary);
        font-size: 14px;
        width: 300px;
        z-index: 1001;
        transition: all 0.3s ease;
        transform: translateY(-100px);
        opacity: 0;
    `;

    document.body.appendChild(searchInput);

    // Show search on Ctrl+K or Cmd+K
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.style.transform = 'translateY(0)';
            searchInput.style.opacity = '1';
            searchInput.focus();
        }

        if (e.key === 'Escape') {
            searchInput.style.transform = 'translateY(-100px)';
            searchInput.style.opacity = '0';
            searchInput.blur();
            // Reset search
            searchInput.value = '';
            resetSearchHighlight();
        }
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        performSearch(query);
    });
}

function performSearch(query) {
    const searchableElements = document.querySelectorAll('.skill-tag, .tech-tag, .project-card, .job-title, .project-description');

    searchableElements.forEach(element => {
        const text = element.textContent.toLowerCase();
        const parent = element.closest('.card, .project-card, .experience-item');

        if (text.includes(query) || query === '') {
            if (parent) {
                parent.style.opacity = '1';
                parent.style.transform = 'scale(1)';
            }

            if (query && text.includes(query)) {
                element.style.background = 'linear-gradient(135deg, #fbbf24, #f59e0b)';
                element.style.color = '#000';
            } else {
                resetElementHighlight(element);
            }
        } else {
            if (parent) {
                parent.style.opacity = '0.3';
                parent.style.transform = 'scale(0.95)';
            }
        }
    });
}

function resetSearchHighlight() {
    const searchableElements = document.querySelectorAll('.skill-tag, .tech-tag, .project-card, .job-title, .project-description');

    searchableElements.forEach(element => {
        const parent = element.closest('.card, .project-card, .experience-item');
        if (parent) {
            parent.style.opacity = '1';
            parent.style.transform = 'scale(1)';
        }
        resetElementHighlight(element);
    });
}

function resetElementHighlight(element) {
    element.style.background = '';
    element.style.color = '';
}

// Initialize all advanced features
function initAdvancedFeatures() {
    animateSkillsProgress();
    animateCounters();
    initAdvancedSearch();
    initContactForm();
}

// Call advanced features after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initAdvancedFeatures, 1000);
});

// Footer JavaScript - À ajouter dans index.js

// Footer animations and interactions
function initFooterAnimations() {
    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate footer sections
                const footerSections = entry.target.querySelectorAll('.footer-section');
                footerSections.forEach((section, index) => {
                    setTimeout(() => {
                        section.style.opacity = '1';
                        section.style.transform = 'translateY(0)';
                    }, index * 150);
                });

                // Animate tech stack tags
                const techTags = entry.target.querySelectorAll('.footer-tech');
                techTags.forEach((tag, index) => {
                    setTimeout(() => {
                        tag.style.opacity = '1';
                        tag.style.transform = 'scale(1)';
                    }, (index * 100) + 500);
                });
            }
        });
    }, { threshold: 0.2 });

    const footer = document.querySelector('.footer');
    if (footer) {
        // Set initial states
        const footerSections = footer.querySelectorAll('.footer-section');
        footerSections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'all 0.6s ease';
        });

        const techTags = footer.querySelectorAll('.footer-tech');
        techTags.forEach(tag => {
            tag.style.opacity = '0';
            tag.style.transform = 'scale(0.8)';
            tag.style.transition = 'all 0.4s ease';
        });

        footerObserver.observe(footer);
    }
}

// Footer interactive effects
function addFooterInteractivity() {
    // Hover effects for footer links
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(8px) scale(1.02)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });

    // Tech stack tag interactions
    const techTags = document.querySelectorAll('.footer-tech');
    techTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                background: rgba(255, 255, 255, 0.6);
                border-radius: 50%;
                transform: scale(0);
                animation: rippleAnimation 0.6s ease-out;
                left: 50%;
                top: 50%;
                width: 20px;
                height: 20px;
                margin-left: -10px;
                margin-top: -10px;
                pointer-events: none;
            `;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.remove();
                }
            }, 600);

            // Show tech info toast
            const techName = this.textContent;
            showTechToast(techName);
        });
    });

    // Quote animation on hover
    const quoteContent = document.querySelector('.quote-content');
    if (quoteContent) {
        quoteContent.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.background = 'rgba(99, 102, 241, 0.05)';
        });

        quoteContent.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.background = 'rgba(255, 255, 255, 0.03)';
            if (document.body.hasAttribute('data-theme')) {
                this.style.background = 'rgba(0, 0, 0, 0.02)';
            }
        });
    }
}

// Show tech information toast
function showTechToast(techName) {
    const techInfo = {
        'React': currentLanguage === 'fr' ? 'Bibliothèque JavaScript pour interfaces utilisateur' : 'JavaScript library for user interfaces',
        'Java': currentLanguage === 'fr' ? 'Langage de programmation orienté objet' : 'Object-oriented programming language',
        'Flutter': currentLanguage === 'fr' ? 'Framework mobile cross-platform de Google' : 'Google\'s cross-platform mobile framework',
        'Spring Boot': currentLanguage === 'fr' ? 'Framework Java pour applications web' : 'Java framework for web applications',
        'Node.js': currentLanguage === 'fr' ? 'Runtime JavaScript côté serveur' : 'Server-side JavaScript runtime',
        'Vue.js': currentLanguage === 'fr' ? 'Framework JavaScript progressif' : 'Progressive JavaScript framework'
    };

    const message = techInfo[techName] || techName;
    showToast(`${techName}: ${message}`);
}

// Footer contact form enhancement
function enhanceFooterContacts() {
    const emailLink = document.querySelector('.footer-link[href^="mailto:"]');
    if (emailLink) {
        emailLink.addEventListener('click', function(e) {
            e.preventDefault();
            showAdvancedContactModal();
        });
    }

    const phoneLink = document.querySelector('.footer-link[href^="tel:"]');
    if (phoneLink) {
        phoneLink.addEventListener('click', function() {
            showToast(currentLanguage === 'fr' ? 'Numéro copié dans le presse-papier' : 'Phone number copied to clipboard');

            // Copy to clipboard
            const phoneNumber = this.textContent.trim();
            if (navigator.clipboard) {
                navigator.clipboard.writeText(phoneNumber);
            }
        });
    }
}

// Advanced contact modal with footer integration
function showAdvancedContactModal() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        backdrop-filter: blur(15px);
        opacity: 0;
        transition: opacity 0.3s ease;
    `;

    const form = document.createElement('div');
    form.style.cssText = `
        background: var(--bg-card);
        padding: 2.5rem;
        border-radius: 24px;
        max-width: 600px;
        width: 90%;
        max-height: 85vh;
        overflow-y: auto;
        border: 1px solid var(--border);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        transform: scale(0.9);
        transition: transform 0.3s ease;
    `;

    form.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <div style="width: 60px; height: 60px; background: linear-gradient(135deg, var(--primary), var(--accent)); border-radius: 50%; margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center;">
                <svg style="width: 32px; height: 32px; color: white;" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
            </div>
            <h3 style="color: var(--text-primary); margin-bottom: 0.5rem; font-size: 1.8rem; font-weight: 700;">
                ${currentLanguage === 'fr' ? 'Contactez-moi' : 'Contact Me'}
            </h3>
            <p style="color: var(--text-secondary); font-size: 1rem;">
                ${currentLanguage === 'fr' ? 'Discutons de votre prochain projet' : 'Let\'s discuss your next project'}
            </p>
        </div>
        
        <form id="advanced-contact-form" style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <input type="text" name="firstName" placeholder="${currentLanguage === 'fr' ? 'Prénom' : 'First Name'}" required
                       style="padding: 15px; border: 2px solid var(--border); border-radius: 12px; background: var(--bg-secondary); color: var(--text-primary); font-size: 1rem; transition: border-color 0.3s ease;">
                <input type="text" name="lastName" placeholder="${currentLanguage === 'fr' ? 'Nom' : 'Last Name'}" required
                       style="padding: 15px; border: 2px solid var(--border); border-radius: 12px; background: var(--bg-secondary); color: var(--text-primary); font-size: 1rem; transition: border-color 0.3s ease;">
            </div>
            
            <input type="email" name="email" placeholder="${currentLanguage === 'fr' ? 'Adresse email' : 'Email Address'}" required
                   style="padding: 15px; border: 2px solid var(--border); border-radius: 12px; background: var(--bg-secondary); color: var(--text-primary); font-size: 1rem; transition: border-color 0.3s ease;">
            
            <select name="projectType" required
                    style="padding: 15px; border: 2px solid var(--border); border-radius: 12px; background: var(--bg-secondary); color: var(--text-primary); font-size: 1rem;">
                <option value="">${currentLanguage === 'fr' ? 'Type de projet' : 'Project Type'}</option>
                <option value="web">${currentLanguage === 'fr' ? 'Application Web' : 'Web Application'}</option>
                <option value="mobile">${currentLanguage === 'fr' ? 'Application Mobile' : 'Mobile Application'}</option>
                <option value="fullstack">${currentLanguage === 'fr' ? 'Full Stack' : 'Full Stack'}</option>
                <option value="consulting">${currentLanguage === 'fr' ? 'Consultation' : 'Consulting'}</option>
            </select>
            
            <textarea name="message" placeholder="${currentLanguage === 'fr' ? 'Décrivez votre projet...' : 'Describe your project...'}" rows="5" required
                      style="padding: 15px; border: 2px solid var(--border); border-radius: 12px; background: var(--bg-secondary); color: var(--text-primary); resize: vertical; font-size: 1rem; line-height: 1.5; transition: border-color 0.3s ease;"></textarea>
            
            <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                <button type="submit" style="flex: 1; padding: 15px; background: linear-gradient(135deg, var(--primary), var(--accent)); color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: 600; font-size: 1rem; transition: transform 0.2s ease;">
                    <span style="display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                        <svg style="width: 20px; height: 20px;" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                        </svg>
                        ${currentLanguage === 'fr' ? 'Envoyer le message' : 'Send Message'}
                    </span>
                </button>
                <button type="button" class="cancel-btn" style="padding: 15px; background: var(--bg-secondary); color: var(--text-secondary); border: 2px solid var(--border); border-radius: 12px; cursor: pointer; font-weight: 600; font-size: 1rem; min-width: 120px;">
                    ${currentLanguage === 'fr' ? 'Annuler' : 'Cancel'}
                </button>
            </div>
        </form>
    `;

    modal.appendChild(form);
    document.body.appendChild(modal);

    // Animate in
    setTimeout(() => {
        modal.style.opacity = '1';
        form.style.transform = 'scale(1)';
    }, 10);

    // Enhanced form interactions
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = 'var(--primary)';
            this.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)';
        });

        input.addEventListener('blur', function() {
            this.style.borderColor = 'var(--border)';
            this.style.boxShadow = 'none';
        });
    });

    // Close modal events
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    form.querySelector('.cancel-btn').addEventListener('click', closeModal);

    function closeModal() {
        modal.style.opacity = '0';
        form.style.transform = 'scale(0.9)';
        setTimeout(() => {
            if (document.body.contains(modal)) {
                modal.remove();
            }
        }, 300);
    }

    // Form submission
    document.getElementById('advanced-contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalContent = submitBtn.innerHTML;

        // Loading state
        submitBtn.innerHTML = `
            <span style="display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                <svg style="width: 20px; height: 20px; animation: spin 1s linear infinite;" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"/>
                </svg>
                ${currentLanguage === 'fr' ? 'Envoi en cours...' : 'Sending...'}
            </span>
        `;
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            showToast(currentLanguage === 'fr' ? 'Message envoyé avec succès! Je vous répondrai bientôt.' : 'Message sent successfully! I\'ll get back to you soon.');
            closeModal();
        }, 2000);
    });

    // Add spin animation for loading
    if (!document.getElementById('spin-animation')) {
        const style = document.createElement('style');
        style.id = 'spin-animation';
        style.textContent = `
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Status indicator animation
function animateStatusIndicator() {
    const statusDot = document.querySelector('.status-dot');
    if (statusDot) {
        setInterval(() => {
            statusDot.style.boxShadow = '0 0 10px var(--success)';
            setTimeout(() => {
                statusDot.style.boxShadow = '';
            }, 500);
        }, 3000);
    }
}

// Footer scroll to top functionality
function addScrollToTop() {
    const footer = document.querySelector('.footer');
    if (!footer) return;

    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = `
        <svg fill="currentColor" viewBox="0 0 24 24" style="width: 24px; height: 24px;">
            <path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"/>
        </svg>
    `;
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 150px;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: linear-gradient(135deg, var(--accent), var(--success));
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 20px rgba(6, 214, 160, 0.4);
        transition: all 0.3s ease;
        z-index: 999;
        opacity: 0;
        transform: scale(0.8);
    `;

    document.body.appendChild(scrollTopBtn);

    // Show/hide button based on scroll position
    const toggleScrollBtn = () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.transform = 'scale(1)';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.transform = 'scale(0.8)';
        }
    };

    window.addEventListener('scroll', toggleScrollBtn);

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 6px 30px rgba(6, 214, 160, 0.6)';
    });

    scrollTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 20px rgba(6, 214, 160, 0.4)';
    });
}

// Initialize all footer features
function initFooter() {
    initFooterAnimations();
    addFooterInteractivity();
    enhanceFooterContacts();
    animateStatusIndicator();
    addScrollToTop();
}

// Add to main initialization
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    setTimeout(() => {
        initFooter();
    }, 1500);
});

// Console welcome message
console.log('%c🚀 Bernard Kpedzi Full Stack Portfolio', 'font-size: 16px; color: #6366f1; font-weight: bold;');
console.log('%c💡 Technologies: JavaScript • Java • Flutter', 'font-size: 12px; color: #f89820;');
console.log('%c🎯 Full Stack Developer - Frontend to Mobile', 'font-size: 12px; color: #0175c2;');
console.log('%c⚡ Features: Search (Ctrl+K), Animations, Contact Modal', 'font-size: 12px; color: #06d6a0;');