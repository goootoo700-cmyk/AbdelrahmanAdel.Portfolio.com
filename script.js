/* ============================================
   Professional Portfolio - Abdul Rahman Adel
   Main JavaScript File - Final Version
   ============================================ */

// ============================================
// CONFIGURATION
// ============================================

const portfolioConfig = {
    // Personal Information
    name: "Abdul Rahman Adel Al-Muqaddam",
    nameAr: "عبد الرحمن عادل المقدم",
    title: "Full-Stack Developer & Software Developer",
    
    // Contact Information
    whatsapp: "201227650254",
    facebook: "https://www.facebook.com/abdo.adel.elmokdem",
    email: "YOUR_EMAIL_HERE",
    phone: "+20 12 2765 0254",
    
    // Social Media
    socialLinks: [
        {
            name: "whatsapp",
            icon: "fab fa-whatsapp",
            url: "https://wa.me/201227650254",
            label: "WhatsApp"
        },
        {
            name: "facebook",
            icon: "fab fa-facebook",
            url: "https://www.facebook.com/abdo.adel.elmokdem",
            label: "Facebook"
        },
        {
            name: "instagram",
            icon: "fab fa-instagram",
            url: "#",
            label: "Instagram"
        },
        {
            name: "github",
            icon: "fab fa-github",
            url: "#",
            label: "GitHub"
        },
        {
            name: "linkedin",
            icon: "fab fa-linkedin",
            url: "#",
            label: "LinkedIn"
        },
        {
            name: "tiktok",
            icon: "fab fa-tiktok",
            url: "#",
            label: "TikTok"
        }
    ]
};

// ============================================
// SKILLS DATA
// ============================================

const skillsData = [
    { name: "Python", icon: "fab fa-python", level: 85, color: "#06b6d4" },
    { name: "C++", icon: "fas fa-code", level: 80, color: "#8b5cf6" },
    { name: "C#", icon: "fas fa-code", level: 75, color: "#10b981" },
    { name: "HTML5", icon: "fab fa-html5", level: 90, color: "#ef4444" },
    { name: "CSS3", icon: "fab fa-css3-alt", level: 85, color: "#3b82f6" },
    { name: "JavaScript", icon: "fab fa-js", level: 82, color: "#f59e0b" }
];

// ============================================
// SERVICES DATA
// ============================================

const servicesData = [
    {
        icon: "fas fa-globe",
        titleAr: "تطوير المواقع",
        titleEn: "Web Development",
        descriptionAr: "مواقع حديثة، سريعة، متجاوبة، واحترافية تلبي احتياجات عملك.",
        descriptionEn: "Modern, fast, responsive, and professional websites that meet your business needs."
    },
    {
        icon: "fas fa-window-maximize",
        titleAr: "تطبيقات الويب",
        titleEn: "Web Applications",
        descriptionAr: "تطبيقات ويب تفاعلية مبنية حول احتياجات المستخدم الحقيقية.",
        descriptionEn: "Interactive web applications built around real user needs."
    },
    {
        icon: "fas fa-database",
        titleAr: "أنظمة الإدارة",
        titleEn: "Management Systems",
        descriptionAr: "أنظمة مخصصة للشركات، المدارس، المراكز، والمستودعات.",
        descriptionEn: "Custom systems for businesses, schools, centers, and warehouses."
    },
    {
        icon: "fas fa-laptop-code",
        titleAr: "تطوير البرمجيات",
        titleEn: "Software Development",
        descriptionAr: "حلول برمجية مخصصة ومشاريع برمجة احترافية.",
        descriptionEn: "Custom software solutions and professional programming projects."
    },
    {
        icon: "fas fa-paint-brush",
        titleAr: "تطوير UI/UX",
        titleEn: "UI/UX Development",
        descriptionAr: "واجهات نظيفة، حديثة، متجاوبة مع تجربة مستخدم ممتازة.",
        descriptionEn: "Clean, modern, responsive interfaces with excellent user experience."
    },
    {
        icon: "fas fa-cogs",
        titleAr: "حلول رقمية مخصصة",
        titleEn: "Custom Digital Solutions",
        descriptionAr: "منتجات رقمية مخصصة مصممة وفقاً لمتطلبات العميل.",
        descriptionEn: "Customized digital products designed according to client requirements."
    }
];

// ============================================
// PROJECTS DATA
// ============================================

const projectsData = [
    {
        id: 1,
        title: "Smart Warehouse Management System",
        titleAr: "نظام إدارة المستودعات الذكي",
        description: "Integrated warehouse management system with inventory tracking, order management, and comprehensive reports.",
        descriptionAr: "نظام متكامل لإدارة المستودعات مع تتبع المخزون، إدارة الطلبات، وتقارير شاملة.",
        category: "systems",
        technologies: ["Python", "JavaScript", "HTML", "CSS"],
        features: [
            "Real-time inventory tracking",
            "Order and supplier management",
            "Comprehensive reports and analytics",
            "User-friendly interface"
        ],
        featuresAr: [
            "تتبع المخزون في الوقت الحقيقي",
            "إدارة الطلبات والموردين",
            "تقارير وتحليلات شاملة",
            "واجهة سهلة الاستخدام"
        ]
    },
    {
        id: 2,
        title: "Student Results System",
        titleAr: "نظام نتائج الطلاب",
        description: "Integrated system for managing and displaying student results with input and reporting capabilities.",
        descriptionAr: "نظام متكامل لإدارة وعرض نتائج الطلاب مع إمكانية الإدخال والتقارير.",
        category: "systems",
        technologies: ["C#", "HTML", "CSS", "JavaScript"],
        features: [
            "Easy grade entry",
            "Results display for students",
            "Statistical reports",
            "Data export"
        ],
        featuresAr: [
            "إدخال الدرجات بسهولة",
            "عرض النتائج للطلاب",
            "تقارير إحصائية",
            "تصدير البيانات"
        ]
    },
    {
        id: 3,
        title: "Educational Platform",
        titleAr: "منصة تعليمية",
        description: "Interactive educational platform for courses and educational content.",
        descriptionAr: "منصة تعليمية تفاعلية للدورات والمحتوى التعليمي.",
        category: "websites",
        technologies: ["HTML", "CSS", "JavaScript"],
        features: [
            "Course management",
            "Student interaction",
            "Assessment system",
            "Multimedia content"
        ],
        featuresAr: [
            "إدارة الدورات",
            "تفاعل الطلاب",
            "نظام تقييم",
            "محتوى متعدد الوسائط"
        ]
    },
    {
        id: 4,
        title: "Business Management System",
        titleAr: "نظام إدارة الأعمال",
        description: "Comprehensive business management system with customer and invoice management.",
        descriptionAr: "نظام شامل لإدارة الأعمال التجارية مع إدارة العملاء والفواتير.",
        category: "systems",
        technologies: ["Python", "C++", "JavaScript"],
        features: [
            "Customer management",
            "Invoices and expenses",
            "Financial reports",
            "Employee management"
        ],
        featuresAr: [
            "إدارة العملاء",
            "الفواتير والمصروفات",
            "تقارير مالية",
            "إدارة الموظفين"
        ]
    },
    {
        id: 5,
        title: "Interactive Web Application",
        titleAr: "تطبيق ويب تفاعلي",
        description: "Interactive web application with modern features and excellent user experience.",
        descriptionAr: "تطبيق ويب تفاعلي مع ميزات حديثة وتجربة مستخدم ممتازة.",
        category: "applications",
        technologies: ["HTML", "CSS", "JavaScript"],
        features: [
            "Interactive interface",
            "Real-time updates",
            "Responsive design",
            "Optimized performance"
        ],
        featuresAr: [
            "واجهة تفاعلية",
            "تحديثات في الوقت الحقيقي",
            "تصميم متجاوب",
            "أداء محسن"
        ]
    },
    {
        id: 6,
        title: "Software Project",
        titleAr: "مشروع برمجي",
        description: "Complete software project with innovative solutions.",
        descriptionAr: "مشروع برمجي متكامل مع حلول مبتكرة.",
        category: "programming",
        technologies: ["Python", "C++", "C#"],
        features: [
            "Advanced algorithms",
            "Data processing",
            "Task automation",
            "Command-line interface"
        ],
        featuresAr: [
            "خوارزميات متقدمة",
            "معالجة البيانات",
            "أتمتة المهام",
            "واجهة سطر أوامر"
        ]
    }
];

// ============================================
// TIMELINE DATA
// ============================================

const timelineData = [
    {
        date: "Start",
        dateAr: "البداية",
        title: "Started Programming Journey",
        titleAr: "بداية رحلة البرمجة",
        description: "Started learning programming and discovered my passion for building things through code.",
        descriptionAr: "بدأت تعلم البرمجة واكتشفت شغفي ببناء الأشياء من خلال الكود."
    },
    {
        date: "Learning",
        dateAr: "التعلم",
        title: "Learned Web Development",
        titleAr: "تعلم تطوير الويب",
        description: "Learned HTML, CSS, JavaScript and started building websites.",
        descriptionAr: "تعلمت HTML, CSS, JavaScript وبدأت في بناء مواقع ويب."
    },
    {
        date: "Development",
        dateAr: "التطوير",
        title: "Built Programming Projects",
        titleAr: "بناء مشاريع برمجية",
        description: "Started building real programming projects and applying what I learned.",
        descriptionAr: "بدأت في بناء مشاريع برمجية حقيقية وتطبيق ما تعلمته."
    },
    {
        date: "Professional",
        dateAr: "الاحتراف",
        title: "Developed Management Systems",
        titleAr: "تطوير أنظمة الإدارة",
        description: "Started developing custom management systems for businesses and organizations.",
        descriptionAr: "بدأت في تطوير أنظمة إدارة مخصصة للشركات والمؤسسات."
    },
    {
        date: "Expansion",
        dateAr: "التوسع",
        title: "Expanded in Software Development",
        titleAr: "التوسع في تطوير البرمجيات",
        description: "Expanded into software development and building integrated solutions.",
        descriptionAr: "توسعت في مجالات تطوير البرمجيات وبناء الحلول المتكاملة."
    },
    {
        date: "Present",
        dateAr: "الحاضر",
        title: "Building Professional Projects",
        titleAr: "بناء مشاريع احترافية",
        description: "Currently working on building professional projects and providing innovative solutions.",
        descriptionAr: "أعمل حالياً على بناء مشاريع احترافية وتقديم حلول مبتكرة."
    }
];

// ============================================
// WHY WORK WITH ME DATA
// ============================================

const whyWorkWithMeData = [
    {
        icon: "fas fa-code",
        titleAr: "كود نظيف",
        titleEn: "Clean Code",
        descriptionAr: "أكتب كوداً منظماً وقابلاً للصيانة والتطوير.",
        descriptionEn: "I write organized, maintainable, and scalable code."
    },
    {
        icon: "fas fa-paint-brush",
        titleAr: "تصميم حديث",
        titleEn: "Modern Design",
        descriptionAr: "أهتم بالتفاصيل وأقدم تصاميم عصرية وجذابة.",
        descriptionEn: "I focus on details and deliver modern, attractive designs."
    },
    {
        icon: "fas fa-mobile-alt",
        titleAr: "مواقع متجاوبة",
        titleEn: "Responsive Websites",
        descriptionAr: "أضمن عمل الموقع على جميع الأجهزة والشاشات.",
        descriptionEn: "I ensure websites work on all devices and screens."
    },
    {
        icon: "fas fa-lightbulb",
        titleAr: "حلول إبداعية",
        titleEn: "Creative Solutions",
        descriptionAr: "أفكر خارج الصندوق وأقدم حلولاً مبتكرة.",
        descriptionEn: "I think outside the box and provide innovative solutions."
    },
    {
        icon: "fas fa-users",
        titleAr: "تركيز على العميل",
        titleEn: "Client-Focused",
        descriptionAr: "أستمع لاحتياجاتك وأبني حلولاً تناسبك.",
        descriptionEn: "I listen to your needs and build solutions that fit you."
    },
    {
        icon: "fas fa-graduation-cap",
        titleAr: "تعلم مستمر",
        titleEn: "Continuous Learning",
        descriptionAr: "أواكب أحدث التقنيات وأطور مهاراتي باستمرار.",
        descriptionEn: "I stay updated with latest technologies and continuously improve."
    },
    {
        icon: "fas fa-search",
        titleAr: "اهتمام بالتفاصيل",
        titleEn: "Attention to Detail",
        descriptionAr: "أراجع عملي بدقة وأهتم بأدق التفاصيل.",
        descriptionEn: "I review my work carefully and focus on the smallest details."
    },
    {
        icon: "fas fa-cogs",
        titleAr: "حلول مخصصة",
        titleEn: "Custom Solutions",
        descriptionAr: "أقدم حلولاً مخصصة تناسب احتياجاتك الفريدة.",
        descriptionEn: "I provide custom solutions that fit your unique needs."
    }
];

// ============================================
// TYPING EFFECT WORDS
// ============================================

const typingWordsAr = [
    'مواقع ويب حديثة',
    'أنظمة إدارة',
    'تطبيقات ويب',
    'حلول برمجية',
    'منتجات رقمية'
];

const typingWordsEn = [
    'Modern Websites',
    'Management Systems',
    'Web Applications',
    'Software Solutions',
    'Digital Products'
];

// ============================================
// DOM CONTENT LOADED
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

let currentLanguage = 'ar'; // Default language
let typingInterval;

function initializeApp() {
    initLanguageSystem();
    initCustomCursor();
    initNavigation();
    initThemeToggle();
    initTypingEffect();
    initSkills();
    initServices();
    initProjects();
    initProjectFilters();
    initProjectModal();
    initTimeline();
    initWhyWorkWithMe();
    initSocialLinks();
    initContactForm();
    initScrollAnimations();
    initParticles();
    initYearDisplay();
}

// ============================================
// LANGUAGE SYSTEM
// ============================================

function initLanguageSystem() {
    const langToggle = document.getElementById('langToggle');
    
    // Check saved language
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        currentLanguage = savedLang;
    }
    
    updateLanguage(currentLanguage);
    
    langToggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
        localStorage.setItem('language', currentLanguage);
        updateLanguage(currentLanguage);
        initTypingEffect(); // Restart typing effect with new language
    });
}

function updateLanguage(lang) {
    const html = document.documentElement;
    
    if (lang === 'en') {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
    } else {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
    }
    
    // Update all dynamic content
    updateDynamicContent();
}

function updateDynamicContent() {
    // Update skills
    const skillsGrid = document.getElementById('skillsGrid');
    if (skillsGrid) {
        skillsGrid.innerHTML = '';
        renderSkills();
    }
    
    // Update services
    const servicesGrid = document.getElementById('servicesGrid');
    if (servicesGrid) {
        servicesGrid.innerHTML = '';
        renderServices();
    }
    
    // Update projects
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        projectsGrid.innerHTML = '';
        renderProjects();
    }
    
    // Update timeline
    const timeline = document.getElementById('timeline');
    if (timeline) {
        timeline.innerHTML = '';
        renderTimeline();
    }
    
    // Update why work with me
    const whyGrid = document.getElementById('whyGrid');
    if (whyGrid) {
        whyGrid.innerHTML = '';
        renderWhyWorkWithMe();
    }
    
    // Update social links
    const socialLinks = document.getElementById('socialLinks');
    const footerSocial = document.getElementById('footerSocial');
    if (socialLinks && footerSocial) {
        socialLinks.innerHTML = '';
        footerSocial.innerHTML = '';
        renderSocialLinks();
    }
}

// ============================================
// CUSTOM CURSOR
// ============================================

function initCustomCursor() {
    const cursorDot = document.getElementById('cursorDot');
    const cursorOutline = document.getElementById('cursorOutline');
    
    if (!cursorDot || !cursorOutline) return;
    
    // Check if device has touch support
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        cursorDot.style.display = 'none';
        cursorOutline.style.display = 'none';
        return;
    }
    
    document.addEventListener('mousemove', (e) => {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorOutline.style.left = e.clientX + 'px';
            cursorOutline.style.top = e.clientY + 'px';
        }, 50);
    });
    
    const interactiveElements = document.querySelectorAll('a, button, .btn, .filter-btn, input, select, textarea, .project-card');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('hover');
        });
    });
}

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        updateActiveNav();
    });
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    hamburger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            hamburger.click();
        }
    });
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
}

// ============================================
// THEME TOGGLE
// ============================================

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// ============================================
// TYPING EFFECT
// ============================================

function initTypingEffect() {
    const typingText = document.getElementById('typingText');
    if (!typingText) return;
    
    const words = currentLanguage === 'ar' ? typingWordsAr : typingWordsEn;
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    if (typingInterval) {
        clearInterval(typingInterval);
    }
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 1500;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }
        
        typingInterval = setTimeout(type, typeSpeed);
    }
    
    type();
}

// ============================================
// SKILLS
// ============================================

function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;
    
    skillsData.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card reveal active';
        
        skillCard.innerHTML = `
            <div class="skill-icon" style="background: linear-gradient(135deg, ${skill.color}, ${skill.color}cc);">
                <i class="${skill.icon}"></i>
            </div>
            <h3 class="skill-name">${skill.name}</h3>
            <div class="skill-level">
                <div class="skill-level-fill" data-level="${skill.level}" style="width: ${skill.level}%; background: linear-gradient(90deg, ${skill.color}, ${skill.color}cc);"></div>
            </div>
        `;
        
        skillsGrid.appendChild(skillCard);
    });
}

function initSkills() {
    renderSkills();
}

// ============================================
// SERVICES
// ============================================

function renderServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid) return;
    
    servicesData.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card reveal active';
        
        const title = currentLanguage === 'ar' ? service.titleAr : service.titleEn;
        const description = currentLanguage === 'ar' ? service.descriptionAr : service.descriptionEn;
        
        serviceCard.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3 class="service-title">${title}</h3>
            <p class="service-description">${description}</p>
        `;
        
        servicesGrid.appendChild(serviceCard);
    });
}

function initServices() {
    renderServices();
}

// ============================================
// PROJECTS
// ============================================

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card reveal active';
        projectCard.setAttribute('data-category', project.category);
        projectCard.setAttribute('data-project-id', project.id);
        projectCard.setAttribute('tabindex', '0');
        projectCard.setAttribute('role', 'button');
        projectCard.setAttribute('aria-label', 'Open project details');
        
        const title = currentLanguage === 'ar' ? project.titleAr : project.title;
        const description = currentLanguage === 'ar' ? project.descriptionAr : project.description;
        
        projectCard.innerHTML = `
            <div class="project-image">
                <div class="project-image-placeholder">
                    <i class="fas fa-code"></i>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${title}</h3>
                <p class="project-description">${description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-actions">
                    <button class="btn-project btn-project-primary" onclick="openProjectModal(${project.id})">
                        ${currentLanguage === 'ar' ? 'عرض المشروع' : 'View Project'}
                    </button>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
        
        projectCard.addEventListener('click', (e) => {
            if (!e.target.closest('.btn-project')) {
                openProjectModal(project.id);
            }
        });
        
        projectCard.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openProjectModal(project.id);
            }
        });
    });
}

function initProjects() {
    renderProjects();
}

// ============================================
// PROJECT FILTERS
// ============================================

function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            const projectCards = document.querySelectorAll('.project-card');
            
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ============================================
// PROJECT MODAL
// ============================================

function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        modal.setAttribute('aria-hidden', 'true');
    }
    
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    window.closeProjectModal = closeModal;
}

function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    const title = currentLanguage === 'ar' ? project.titleAr : project.title;
    const description = currentLanguage === 'ar' ? project.descriptionAr : project.description;
    const features = currentLanguage === 'ar' ? project.featuresAr : project.features;
    
    modalBody.innerHTML = `
        <div class="project-image-placeholder" style="width: 100%; height: 300px; background: var(--bg-card); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
            <i class="fas fa-code" style="font-size: 4rem; color: var(--text-muted);"></i>
        </div>
        <h3>${title}</h3>
        <p class="modal-description">${description}</p>
        <ul class="modal-features">
            ${features.map(feature => `
                <li>
                    <i class="fas fa-check"></i>
                    ${feature}
                </li>
            `).join('')}
        </ul>
        <div class="project-tech" style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-actions" style="display: flex; gap: 1rem;">
            <button class="btn-project btn-project-primary" style="flex: 1;" onclick="window.closeProjectModal()">
                ${currentLanguage === 'ar' ? 'إغلاق' : 'Close'}
            </button>
        </div>
    `;
    
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

// ============================================
// TIMELINE
// ============================================

function renderTimeline() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;
    
    timelineData.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item reveal active';
        
        const date = currentLanguage === 'ar' ? item.dateAr : item.date;
        const title = currentLanguage === 'ar' ? item.titleAr : item.title;
        const description = currentLanguage === 'ar' ? item.descriptionAr : item.description;
        
        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-date">${date}</div>
                <h3 class="timeline-title">${title}</h3>
                <p class="timeline-description">${description}</p>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

function initTimeline() {
    renderTimeline();
}

// ============================================
// WHY WORK WITH ME
// ============================================

function renderWhyWorkWithMe() {
    const whyGrid = document.getElementById('whyGrid');
    if (!whyGrid) return;
    
    whyWorkWithMeData.forEach(item => {
        const whyCard = document.createElement('div');
        whyCard.className = 'why-card reveal active';
        
        const title = currentLanguage === 'ar' ? item.titleAr : item.titleEn;
        const description = currentLanguage === 'ar' ? item.descriptionAr : item.descriptionEn;
        
        whyCard.innerHTML = `
            <div class="why-icon">
                <i class="${item.icon}"></i>
            </div>
            <h3 class="why-title">${title}</h3>
            <p class="service-description">${description}</p>
        `;
        
        whyGrid.appendChild(whyCard);
    });
}

function initWhyWorkWithMe() {
    renderWhyWorkWithMe();
}

// ============================================
// SOCIAL LINKS
// ============================================

function renderSocialLinks() {
    const socialLinksContainer = document.getElementById('socialLinks');
    const footerSocial = document.getElementById('footerSocial');
    
    if (!socialLinksContainer || !footerSocial) return;
    
    // Clear containers
    socialLinksContainer.innerHTML = '';
    footerSocial.innerHTML = '';
    
    // Filter out placeholder links
    const validLinks = portfolioConfig.socialLinks.filter(link => link.url !== '#');
    
    validLinks.forEach(link => {
        const socialLink = document.createElement('a');
        socialLink.href = link.url;
        socialLink.className = 'social-link';
        socialLink.target = '_blank';
        socialLink.rel = 'noopener noreferrer';
        socialLink.setAttribute('aria-label', link.label);
        socialLink.innerHTML = `<i class="${link.icon}"></i>`;
        
        socialLinksContainer.appendChild(socialLink);
        
        // Clone for footer
        const footerLink = socialLink.cloneNode(true);
        footerSocial.appendChild(footerLink);
    });
}

function initSocialLinks() {
    renderSocialLinks();
}

// ============================================
// CONTACT FORM
// ============================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('formName').value.trim();
        const email = document.getElementById('formEmail').value.trim();
        const phone = document.getElementById('formPhone').value.trim();
        const projectType = document.getElementById('formProjectType').value;
        const message = document.getElementById('formMessage').value.trim();
        
        // Validate form
        if (!name || !email || !message) {
            showFormMessage('error', currentLanguage === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill in all required fields');
            return;
        }
        
        if (!isValidEmail(email)) {
            showFormMessage('error', currentLanguage === 'ar' ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email address');
            return;
        }
        
        // Create WhatsApp message
        const whatsappMessage = `New Project Inquiry!\n\nName: ${name}\nEmail: ${email}\n${phone ? `Phone: ${phone}\n` : ''}${projectType ? `Project Type: ${projectType}\n` : ''}\nMessage: ${message}`;
        
        // Encode message for WhatsApp
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // Open WhatsApp with the message
        const whatsappUrl = `https://wa.me/${portfolioConfig.whatsapp}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
        
        showFormMessage('success', currentLanguage === 'ar' ? 'تم فتح واتساب لإرسال رسالتك!' : 'WhatsApp opened to send your message!');
        
        // Reset form
        contactForm.reset();
    });
}

function showFormMessage(type, message) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.form-message');
    existingMessages.forEach(msg => msg.remove());
    
    const messageElement = document.createElement('div');
    messageElement.className = `form-message form-message-${type}`;
    messageElement.textContent = message;
    
    document.body.appendChild(messageElement);
    
    setTimeout(() => {
        messageElement.style.opacity = '0';
        messageElement.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            messageElement.remove();
        }, 300);
    }, 3000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal:not(.active)');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        observer.observe(element);
    });
    
    // Animate stat numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseInt(target.getAttribute('data-count'));
                animateNumber(target, countTo);
                statObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        statObserver.observe(stat);
    });
}

function animateNumber(element, target) {
    let current = 0;
    const increment = Math.ceil(target / 30);
    
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        element.textContent = current;
    }, 50);
}

// ============================================
// PARTICLES
// ============================================

function initParticles() {
    const particlesContainer = document.getElementById('particles-container');
    
    if (!particlesContainer) return;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        particlesContainer.appendChild(particle);
    }
}

// ============================================
// YEAR DISPLAY
// ============================================

function initYearDisplay() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ============================================
// SMOOTH SCROLLING
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href === '#') return;
        
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
            e.preventDefault();
            const offsetTop = targetElement.offsetTop - 70;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        updateActiveNav();
    }, 100);
});

console.log('%cAbdul Rahman Adel - Developer Portfolio', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cBuilt by Abdul Rahman Adel Al-Muqaddam', 'color: #8b5cf6; font-size: 14px;');
console.log('%cSkills: Python, C++, C#, HTML, CSS, JavaScript', 'color: #06b6d4; font-size: 12px;');