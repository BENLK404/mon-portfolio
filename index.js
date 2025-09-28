// ========================================
// BERNARD KPEDZI PORTFOLIO - MAIN JS FILE
// ========================================

let darkMode = true;
let currentLanguage = 'fr';

// SVG Icons définitions
const sunSVG = `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z" fill="#000000"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM4.39861 4.39861C4.6915 4.10572 5.16638 4.10572 5.45927 4.39861L5.85211 4.79145C6.145 5.08434 6.145 5.55921 5.85211 5.85211C5.55921 6.145 5.08434 6.145 4.79145 5.85211L4.39861 5.45927C4.10572 5.16638 4.10572 4.6915 4.39861 4.39861ZM19.6011 4.39887C19.894 4.69176 19.894 5.16664 19.6011 5.45953L19.2083 5.85237C18.9154 6.14526 18.4405 6.14526 18.1476 5.85237C17.8547 5.55947 17.8547 5.0846 18.1476 4.79171L18.5405 4.39887C18.8334 4.10598 19.3082 4.10598 19.6011 4.39887ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12ZM18.1476 18.1476C18.4405 17.8547 18.9154 17.8547 19.2083 18.1476L19.6011 18.5405C19.894 18.8334 19.894 19.3082 19.6011 19.6011C19.3082 19.894 18.8334 19.894 18.5405 19.6011L18.1476 19.2083C17.8547 18.9154 17.8547 18.4405 18.1476 18.1476ZM5.85211 18.1479C6.145 18.4408 6.145 18.9157 5.85211 19.2086L5.45927 19.6014C5.16638 19.8943 4.6915 19.8943 4.39861 19.6014C4.10572 19.3085 4.10572 18.8336 4.39861 18.5407L4.79145 18.1479C5.08434 17.855 5.55921 17.855 5.85211 18.1479ZM12 20.25C12.4142 20.25 12.75 20.5858 12.75 21V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V21C11.25 20.5858 11.5858 20.25 12 20.25Z" fill="#000000"></path></svg>`;

const moonSVG = `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path></svg>`;

const frSVG = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M1.9 32c0 13.1 8.4 24.2 20 28.3V3.7C10.3 7.8 1.9 18.9 1.9 32z" fill="#428bc1"></path><path d="M61.9 32c0-13.1-8.3-24.2-20-28.3v56.6c11.7-4.1 20-15.2 20-28.3" fill="#ed4c5c"></path><path d="M21.9 60.3c3.1 1.1 6.5 1.7 10 1.7s6.9-.6 10-1.7V3.7C38.8 2.6 35.5 2 31.9 2s-6.9.6-10 1.7v56.6" fill="#ffffff"></path></g></svg>`;

const enSVG = `<svg height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle style="fill:#F0F0F0;" cx="256" cy="256" r="256"></circle> <path style="fill:#D80027;" d="M509.833,222.609h-220.44h-0.001V2.167C278.461,0.744,267.317,0,256,0s-22.461,0.744-33.391,2.167 v220.44v0.001H2.167C0.744,233.539,0,244.681,0,256c0,11.319,0.744,22.461,2.167,33.391h220.44h0.001v220.442 C233.539,511.256,244.683,512,256,512s22.461-0.743,33.391-2.167v-220.44v-0.001h220.442C511.256,278.461,512,267.319,512,256 C512,244.681,511.256,233.539,509.833,222.609z"></path> </g></svg>`;


// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Charger les préférences sauvegardées
    loadSavedPreferences();

    // Initialiser toutes les fonctionnalités
    initScrollAppBar();
    initScrollAnimations();
    addTypingEffect();
    createParticleBackground();
    addSmoothScrolling();
    addInteractiveEffects();
    addRippleEffect();

    // Initialiser les fonctionnalités avancées après un délai
    setTimeout(() => {
        initAdvancedFeatures();
        initFooter();
    }, 1000);

    // Gestion du menu mobile
    initMobileMenuHandling();

    // Message de bienvenue dans la console
    displayConsoleWelcome();
});

// ========================================
// PREFERENCES MANAGEMENT
// ========================================
function loadSavedPreferences() {
    // Charger le thème sauvegardé
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
        darkMode = false;
        document.body.setAttribute('data-theme', 'light');
    }

    // Charger la langue sauvegardée
    const savedLanguage = localStorage.getItem('language') || 'fr';
    currentLanguage = savedLanguage;

    // Appliquer les préférences
    updateThemeIcon();
    updateLanguageIcon();
    updateLanguageContent();
}

// ========================================
// THEME TOGGLE FUNCTIONALITY
// ========================================
function toggleTheme() {
    const body = document.body;

    if (darkMode) {
        body.setAttribute('data-theme', 'light');
        darkMode = false;
        localStorage.setItem('theme', 'light');
    } else {
        body.removeAttribute('data-theme');
        darkMode = true;
        localStorage.setItem('theme', 'dark');
    }

    updateThemeIcon();
}

function updateThemeIcon() {
    const themeButtons = document.querySelectorAll('button[onclick="toggleTheme()"]');
    themeButtons.forEach(button => {
        const svg = button.querySelector('svg');
        if (svg) {
            svg.outerHTML = darkMode ? moonSVG : sunSVG;
        }
    });
}

// ========================================
// LANGUAGE TOGGLE FUNCTIONALITY
// ========================================
function toggleLanguage() {
    if (currentLanguage === 'fr') {
        currentLanguage = 'en';
        document.documentElement.lang = 'en';
    } else {
        currentLanguage = 'fr';
        document.documentElement.lang = 'fr';
    }

    localStorage.setItem('language', currentLanguage);
    updateLanguageIcon();
    updateLanguageContent();
}

function updateLanguageIcon() {
    const languageButtons = document.querySelectorAll('button[onclick="toggleLanguage()"]');
    languageButtons.forEach(button => {
        const svg = button.querySelector('svg');
        if (svg) {
            svg.outerHTML = currentLanguage === 'fr' ? frSVG : enSVG;
        }
    });
}

function updateLanguageContent() {
    const elementsWithLang = document.querySelectorAll('[data-fr][data-en]');
    elementsWithLang.forEach(element => {
        if (currentLanguage === 'fr') {
            element.textContent = element.getAttribute('data-fr');
        } else {
            element.textContent = element.getAttribute('data-en');
        }
    });
}

// ========================================
// SCROLL APPBAR FUNCTIONALITY
// ========================================
function initScrollAppBar() {
    const appBar = document.getElementById('scrollAppBar');
    const progressBar = document.getElementById('scrollProgress');
    const navItems = document.querySelectorAll('.nav-item');
    let isAppBarVisible = false;

    function updateScrollProgress() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
    }

    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Afficher/masquer l'AppBar
        if (scrollTop > 100 && !isAppBarVisible && appBar) {
            appBar.classList.add('visible');
            isAppBarVisible = true;
        } else if (scrollTop <= 100 && isAppBarVisible && appBar) {
            appBar.classList.remove('visible');
            isAppBarVisible = false;
        }

        // Mettre à jour la barre de progression
        updateScrollProgress();

        // Mettre à jour la navigation active
        updateActiveNavItem();
    }

    function updateActiveNavItem() {
        // Chercher toutes les sections avec ID ET les éléments avec classe card
        const sections = document.querySelectorAll('section[id], .hero-section, .card');
        let currentSection = '';
        const scrollPos = window.pageYOffset + 150; // Offset pour une meilleure détection

        // Créer un tableau des sections avec leurs informations
        const sectionData = [];

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const top = rect.top + window.pageYOffset;
            const bottom = top + rect.height;

            // Déterminer l'ID de la section
            let sectionId = '';
            if (section.id) {
                sectionId = section.id;
            } else if (section.classList.contains('hero-section')) {
                sectionId = 'hero';
            } else if (section.querySelector('.section-title')) {
                // Essayer de déduire l'ID à partir du titre de la section
                const titleText = section.querySelector('.section-title span')?.textContent?.toLowerCase() || '';
                if (titleText.includes('technolog') || titleText.includes('stack')) {
                    sectionId = 'technologies';
                } else if (titleText.includes('expéri') || titleText.includes('experience')) {
                    sectionId = 'experience';
                } else if (titleText.includes('projet') || titleText.includes('project')) {
                    sectionId = 'projects';
                } else if (titleText.includes('contact')) {
                    sectionId = 'contact';
                }
            }

            if (sectionId) {
                sectionData.push({
                    id: sectionId,
                    top: top,
                    bottom: bottom,
                    element: section
                });
            }
        });

        // Trier les sections par position
        sectionData.sort((a, b) => a.top - b.top);

        // Trouver la section actuellement visible
        for (let i = 0; i < sectionData.length; i++) {
            const section = sectionData[i];
            const nextSection = sectionData[i + 1];

            if (scrollPos >= section.top) {
                if (!nextSection || scrollPos < nextSection.top) {
                    currentSection = section.id;
                    break;
                }
            }
        }

        // Si aucune section n'est détectée et qu'on est en haut de page
        if (!currentSection && window.pageYOffset < 100) {
            currentSection = 'hero';
        }

        // Console log pour débuggage
        console.log('Current scroll position:', scrollPos);
        console.log('Detected section:', currentSection);
        console.log('Available sections:', sectionData.map(s => ({ id: s.id, top: s.top })));

        // Mettre à jour les classes actives
        navItems.forEach(item => {
            item.classList.remove('active');
            const href = item.getAttribute('href');

            // Correspondances pour différents noms de sections
            const sectionMap = {
                '#hero': ['hero'],
                '#profil': ['hero'],
                '#technologies': ['technologies', 'tech-stack'],
                '#experience': ['experience', 'exp'],
                '#projects': ['projects', 'projet'],
                '#contact': ['contact']
            };

            // Vérifier si cette navigation correspond à la section courante
            const possibleSections = sectionMap[href] || [href.substring(1)];

            if (possibleSections.includes(currentSection)) {
                item.classList.add('active');
                console.log('Activated nav item:', href, 'for section:', currentSection);
            }
        });
    }

    // Navigation smooth scroll
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Event listener pour le scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Appel initial
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
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

    // Observer toutes les cartes
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });

    // Animation décalée pour les cartes de projets
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
}

// ========================================
// TYPING EFFECT
// ========================================
function addTypingEffect() {
    const nameElement = document.querySelector('.hero-title, .name');
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

// ========================================
// PARTICLE BACKGROUND
// ========================================
function createParticleBackground() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Configuration du canvas
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0.1;
    `;
    document.body.appendChild(canvas);

    let particles = [];
    const particleCount = 50;
    const colors = ['#6366f1', '#f89820', '#0175c2'];

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
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            // Mouvement des particules
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Rebond sur les bords
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

            // Dessiner la particule
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
        });

        // Dessiner les connexions
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

    // Initialiser
    resizeCanvas();
    createParticles();
    animateParticles();

    // Redimensionnement
    window.addEventListener('resize', () => {
        resizeCanvas();
        createParticles();
    });
}

// ========================================
// SMOOTH SCROLLING
// ========================================
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

// ========================================
// INTERACTIVE EFFECTS
// ========================================
function addInteractiveEffects() {
    // CSS pour les animations de ripple
    if (!document.getElementById('ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes rippleAnimation {
                0% { transform: scale(0); opacity: 1; }
                100% { transform: scale(1); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    // Effets de survol
    const hoverElements = document.querySelectorAll('.contact-item, .project-card, .tech-tag, .tech-category, .skill-tag');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });

        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Effet ripple sur les boutons
    const rippleElements = document.querySelectorAll('.appbar-btn, .contact-item, .fab');
    rippleElements.forEach(button => {
        button.addEventListener('click', function(e) {
            createRippleEffect(e, this);
        });
    });
}

function createRippleEffect(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

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

    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);

    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.remove();
        }
    }, 600);
}

// ========================================
// RIPPLE EFFECT FOR BUTTONS
// ========================================
function addRippleEffect() {
    // CSS pour l'animation ripple
    if (!document.getElementById('ripple-animation-css')) {
        const style = document.createElement('style');
        style.id = 'ripple-animation-css';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Ajouter l'effet aux boutons
    const buttons = document.querySelectorAll('.appbar-btn, .nav-item');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            createRippleEffect(e, this);
        });
    });
}

// ========================================
// TOAST NOTIFICATION SYSTEM
// ========================================
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    const bgColor = type === 'success' ? 'var(--success)' : 'var(--primary)';

    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, ${bgColor}, var(--secondary));
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

    // Animation d'entrée
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);

    // Animation de sortie
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// ========================================
// ADVANCED FEATURES
// ========================================
function initAdvancedFeatures() {
    initAdvancedSearch();
    initContactForm();
    animateSkillsProgress();
    animateCounters();
}

// Animation des compétences
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

// Animation des compteurs
function animateCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target.querySelector('.achievement-number');
                if (!counter || counter.dataset.animated) return;

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
                            counter.dataset.animated = 'true';
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

// Système de recherche avancée
function initAdvancedSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = currentLanguage === 'fr' ? 'Rechercher... (Ctrl+K)' : 'Search... (Ctrl+K)';
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

    // Raccourcis clavier
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
            searchInput.value = '';
            resetSearchHighlight();
        }
    });

    // Fonctionnalité de recherche
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        performSearch(query);
    });
}

function performSearch(query) {
    const searchableElements = document.querySelectorAll('.tech-tag, .project-card, .experience-item');

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
    const searchableElements = document.querySelectorAll('.tech-tag, .project-card, .experience-item');

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

// Formulaire de contact
function initContactForm() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showContactModal();
        });
    });
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
        opacity: 0;
        transition: opacity 0.3s ease;
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
        transform: scale(0.9);
        transition: transform 0.3s ease;
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
                <button type="submit" style="flex: 1; padding: 12px; background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white; border: none; border-radius: 8px; font-weight: 500; cursor: pointer; transition: all 0.3s ease;">
                    ${currentLanguage === 'fr' ? 'Envoyer' : 'Send'}
                </button>
                <button type="button" onclick="closeContactModal()" style="flex: 1; padding: 12px; background: var(--bg-secondary); color: var(--text-primary); border: 1px solid var(--border); border-radius: 8px; font-weight: 500; cursor: pointer; transition: all 0.3s ease;">
                    ${currentLanguage === 'fr' ? 'Annuler' : 'Cancel'}
                </button>
            </div>
        </form>
    `;

    modal.appendChild(form);
    document.body.appendChild(modal);

    // Animation d'entrée
    setTimeout(() => {
        modal.style.opacity = '1';
        form.style.transform = 'scale(1)';
    }, 100);

    // Fermeture par clic sur le fond
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeContactModal();
        }
    });

    // Gestion du formulaire
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);

        // Simulation d'envoi
        showToast(
            currentLanguage === 'fr' ? 'Message envoyé avec succès!' : 'Message sent successfully!',
            'success'
        );

        closeContactModal();
    });

    // Fonction globale pour fermer le modal
    window.closeContactModal = function() {
        modal.style.opacity = '0';
        form.style.transform = 'scale(0.9)';
        setTimeout(() => {
            if (document.body.contains(modal)) {
                document.body.removeChild(modal);
            }
            delete window.closeContactModal;
        }, 300);
    };
}

// ========================================
// MOBILE MENU HANDLING
// ========================================
function initMobileMenuHandling() {
    const mobileMenuButton = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        // Fermer le menu en cliquant sur un lien
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });

        // Fermer le menu en cliquant en dehors
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
                mobileMenu.classList.remove('active');
            }
        });
    }
}

// ========================================
// FOOTER INITIALIZATION
// ========================================
function initFooter() {
    // Animation du footer au scroll
    const footer = document.querySelector('footer');
    if (footer) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    footer.style.opacity = '1';
                    footer.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.3 });

        footer.style.opacity = '0';
        footer.style.transform = 'translateY(30px)';
        footer.style.transition = 'all 0.8s ease';
        observer.observe(footer);
    }
}

// ========================================
// CONSOLE WELCOME MESSAGE
// ========================================
function displayConsoleWelcome() {
    const styles = {
        title: 'color: #6366f1; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(99, 102, 241, 0.3);',
        subtitle: 'color: #f89820; font-size: 16px; font-weight: 600;',
        text: 'color: #0175c2; font-size: 14px;',
        accent: 'color: #10b981; font-size: 12px; font-style: italic;'
    };

    console.log('%c🚀 BERNARD KPEDZI PORTFOLIO', styles.title);
    console.log('%c✨ Développeur Full Stack | UI/UX Designer', styles.subtitle);
    console.log('%c🔧 Technologies: React, Node.js, Python, Flutter...', styles.text);
    console.log('%c💡 Toujours curieux d\'apprendre et de créer!', styles.accent);
    console.log('%c📧 Contact: bernardkpedzi@gmail.com', styles.text);
    console.log('%c🌐 Merci de visiter mon portfolio!', styles.accent);
}

// ========================================
// KEYBOARD SHORTCUTS
// ========================================
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + / pour afficher les raccourcis
        if ((e.ctrlKey || e.metaKey) && e.key === '/') {
            e.preventDefault();
            showShortcutsModal();
        }

        // Échap pour fermer les modals
        if (e.key === 'Escape') {
            const modals = document.querySelectorAll('.modal, .search-modal');
            modals.forEach(modal => {
                if (modal.style.display !== 'none') {
                    modal.style.opacity = '0';
                    setTimeout(() => modal.remove(), 300);
                }
            });
        }

        // Navigation avec les flèches
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            const sections = document.querySelectorAll('section[id]');
            const currentSection = getCurrentSection();
            const currentIndex = Array.from(sections).findIndex(section => section.id === currentSection);

            if (currentIndex !== -1) {
                let nextIndex;
                if (e.key === 'ArrowUp') {
                    nextIndex = currentIndex > 0 ? currentIndex - 1 : sections.length - 1;
                } else {
                    nextIndex = currentIndex < sections.length - 1 ? currentIndex + 1 : 0;
                }

                sections[nextIndex].scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}

function getCurrentSection() {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPos = window.pageYOffset;

        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            currentSection = section.id;
        }
    });

    return currentSection;
}

function showShortcutsModal() {
    const shortcuts = [
        { key: 'Ctrl/Cmd + K', action: currentLanguage === 'fr' ? 'Rechercher' : 'Search' },
        { key: 'Ctrl/Cmd + /', action: currentLanguage === 'fr' ? 'Afficher les raccourcis' : 'Show shortcuts' },
        { key: '↑/↓', action: currentLanguage === 'fr' ? 'Navigation sections' : 'Navigate sections' },
        { key: 'Échap', action: currentLanguage === 'fr' ? 'Fermer les modals' : 'Close modals' }
    ];

    const modal = document.createElement('div');
    modal.className = 'modal shortcuts-modal';
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
        opacity: 0;
        transition: opacity 0.3s ease;
    `;

    const content = document.createElement('div');
    content.style.cssText = `
        background: var(--bg-card);
        padding: 2rem;
        border-radius: 20px;
        max-width: 400px;
        width: 90%;
        border: 1px solid var(--border);
        transform: scale(0.9);
        transition: transform 0.3s ease;
    `;

    content.innerHTML = `
        <h3 style="color: var(--text-primary); margin-bottom: 1.5rem; text-align: center; font-size: 1.5rem;">
            ${currentLanguage === 'fr' ? 'Raccourcis Clavier' : 'Keyboard Shortcuts'}
        </h3>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${shortcuts.map(shortcut => `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0; border-bottom: 1px solid var(--border-light);">
                    <kbd style="background: var(--bg-secondary); padding: 0.25rem 0.5rem; border-radius: 4px; font-family: monospace; color: var(--text-secondary);">${shortcut.key}</kbd>
                    <span style="color: var(--text-primary);">${shortcut.action}</span>
                </div>
            `).join('')}
        </div>
        <button onclick="this.closest('.modal').remove()" style="margin-top: 1.5rem; width: 100%; padding: 12px; background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white; border: none; border-radius: 8px; font-weight: 500; cursor: pointer;">
            ${currentLanguage === 'fr' ? 'Fermer' : 'Close'}
        </button>
    `;

    modal.appendChild(content);
    document.body.appendChild(modal);

    setTimeout(() => {
        modal.style.opacity = '1';
        content.style.transform = 'scale(1)';
    }, 100);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// ========================================
// PERFORMANCE MONITORING
// ========================================
function initPerformanceMonitoring() {
    // Monitor scroll performance
    let ticking = false;

    function updateOnScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                // Performance-optimized scroll handling
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', updateOnScroll, { passive: true });

    // Monitor page load performance
    window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        if (perfData && process.env.NODE_ENV === 'development') {
            console.log('🚀 Performance Metrics:');
            console.log(`📊 DOM Content Loaded: ${perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart}ms`);
            console.log(`⚡ Load Complete: ${perfData.loadEventEnd - perfData.loadEventStart}ms`);
        }
    });
}

// ========================================
// ACCESSIBILITY FEATURES
// ========================================
function initAccessibilityFeatures() {
    // Skip to main content
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = currentLanguage === 'fr' ? 'Aller au contenu principal' : 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        transition: top 0.3s;
    `;

    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });

    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);

    // Enhanced focus indicators
    const style = document.createElement('style');
    style.textContent = `
        *:focus {
            outline: 2px solid var(--primary);
            outline-offset: 2px;
        }
        
        .focus-visible {
            outline: 2px solid var(--primary);
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(style);

    // Reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const style = document.createElement('style');
        style.textContent = `
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// ========================================
// ERROR HANDLING
// ========================================
function initErrorHandling() {
    window.addEventListener('error', (e) => {
        console.error('❌ JavaScript Error:', e.error);

        // Show user-friendly error message in development
        if (process.env.NODE_ENV === 'development') {
            showToast(
                currentLanguage === 'fr' ?
                    'Une erreur s\'est produite. Vérifiez la console.' :
                    'An error occurred. Check the console.',
                'error'
            );
        }
    });

    window.addEventListener('unhandledrejection', (e) => {
        console.error('❌ Unhandled Promise Rejection:', e.reason);

        if (process.env.NODE_ENV === 'development') {
            showToast(
                currentLanguage === 'fr' ?
                    'Erreur de promesse non gérée.' :
                    'Unhandled promise error.',
                'error'
            );
        }
    });
}

// ========================================
// FINAL INITIALIZATION
// ========================================
// Initialize additional features after DOM load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all additional features
    setTimeout(() => {
        initKeyboardShortcuts();
        initPerformanceMonitoring();
        initAccessibilityFeatures();
        initErrorHandling();
    }, 1500);
});

// ========================================
// GLOBAL FUNCTIONS (for HTML onclick attributes)
// ========================================
// Make functions globally available for HTML onclick attributes
window.toggleTheme = toggleTheme;
window.toggleLanguage = toggleLanguage;
window.showToast = showToast;