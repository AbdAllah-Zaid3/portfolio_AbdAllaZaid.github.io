/**
 * Abdullah Zaid - Professional Portfolio Engine
 * Final Version: 2026
 */

// 1. قاعدة بيانات الترجمات (Translation Matrix)
const translations = {
    en: {
        dir: "ltr",
        "nav-about": "About", "nav-skills": "Skills", "nav-journey": "Journey", "nav-projects": "Projects", "nav-contact": "Contact",
        "hero-title": "Initialize <span class='highlight'>Abdullah Zaid</span>",
        "hero-sub": "Hardware-Software Integration Specialist | Linux User",
        "about-title": "Profile_Summary",
        "about-text": "High-achiever with a 3.3 Bagrut and Excellence in Physics, Electronics, and CS. Expert in building logical systems, embedded C++, and Linux environments.",
        "balance-title": "Technical_Equilibrium",
        "skills-title": "Technical_Expertise",
        "journey-title": "Academic_Timeline",
        "edu-1-title": "Bagrut Graduation", "edu-1-desc": "Focus on Physics, Electronics & CS. Grade: 3.3",
        "edu-2-title": "Excellence Award", "edu-2-desc": "Honored for technical excellence and scientific achievements (Hetstainot).",
        "projects-title": "Deployed_Assets",
        "p1-title": "Graduation Project", "p1-desc": "Embedded system logic and circuit design for school finals.",
        "p2-title": "Linux Optimizations", "p2-desc": "Custom system optimizations and automation shell scripts.",
        "contact-title": "Contact_Gateway",
        "contact-hint": "Ready to collaborate? Click below to send an encrypted message via your email app.",
        "footer": "© 2026 Abdullah Zaid | Root Access Granted"
    },
    ar: {
        dir: "rtl",
        "nav-about": "نبذة", "nav-skills": "المهارات", "nav-journey": "المسار", "nav-projects": "المشاريع", "nav-contact": "تواصل",
        "hero-title": "تشغيل النظام: <span class='highlight'>عبد الله زيد</span>",
        "hero-sub": "متخصص في تكامل الأنظمة والبرمجيات | مستخدم لينكس",
        "about-title": "ملخص_البيانات",
        "about-text": "خريج متميز بمعدل بجروت 3.3 مع مرتبة التفوق (هتستاينوت) في الفيزياء والإلكترونيات وعلوم الحاسوب. خبير في بناء الأنظمة المنطقية ولغة C++ وبيئات لينكس.",
        "balance-title": "التوازن_التقني",
        "skills-title": "الخبرات_التقنية",
        "journey-title": "المسار_الأكاديمي",
        "edu-1-title": "خريج بجروت", "edu-1-desc": "تخصص في الفيزياء، الإلكترونيات وعلوم الحاسوب. المعدل: 3.3",
        "edu-2-title": "جائزة التفوق", "edu-2-desc": "تكريم على الإنجازات المتميزة في الدراسات التكنولوجية والعلمية (هتستاينوت).",
        "projects-title": "الأصول_المنجزة",
        "p1-title": "مشروع التخرج", "p1-desc": "منطق الأنظمة المدمجة وتصميم الدوائر الإلكترونية لمشروع التخرج.",
        "p2-title": "إعدادات لينكس", "p2-desc": "تحسينات النظام المخصصة وسكريبتات الأتمتة البرمجية.",
        "contact-title": "بوابة_التواصل",
        "contact-hint": "هل أنت جاهز للتعاون؟ اضغط أدناه لإرسال رسالة مباشرة عبر تطبيق البريد الخاص بك.",
        "footer": "© 2026 عبد الله زيد | تم منح صلاحيات الجذر"
    },
    he: {
        dir: "rtl",
        "nav-about": "אודות", "nav-skills": "כישורים", "nav-journey": "מסלול", "nav-projects": "פרויקטים", "nav-contact": "צור קשר",
        "hero-title": "הפעלת מערכת: <span class='highlight'>עבדאללה זייד</span>",
        "hero-sub": "מומחה אינטגרציה חומרה-תוכנה | משתמש לינוקס",
        "about-title": "סיכום_פרופיל",
        "about-text": "בוגר בהצטיינות עם בגרות 3.3 והצטיינות יתרה בפיזיקה, אלקטרוניקה ומדעי המחשב. מומחה בבניית מערכות לוגיות, C++ וסביבת לינוקס.",
        "balance-title": "שיווי_משקל_טכני",
        "skills-title": "מומחיות_טכנית",
        "journey-title": "ציר_זמן_אקדמי",
        "edu-1-title": "סיום בגרות", "edu-1-desc": "התמחות בפיזיקה, אלקטרוניקה ומדעי המחשב. ממוצע: 3.3",
        "edu-2-title": "תעודת הצטיינות", "edu-2-desc": "אות הצטיינות על הישגים יוצאי דופן בלימודים טכנולוגיים ומדעיים.",
        "projects-title": "פרויקטים",
        "p1-title": "פרויקט גמר", "p1-desc": "לוגיקה של מערכות משובצות ותכנון מעגלים לפרויקט הגמר.",
        "p2-title": "אופטימיזציית לינוקס", "p2-desc": "אופטימיזציה של המערכת וסקריפטים לאוטומציה.",
        "contact-title": "שער_תקשורת",
        "contact-hint": "מוכן לשיתוף פעולה? לחץ למטה כדי לשלוח הודעה ישירות דרך אפליקציית המייל שלך.",
        "footer": "© 2026 עבדאללה זייד | הרשאת שורש ניתנה"
    }
};

// 2. إدارة الرسوم البيانية (Radar Chart Logic)
let skillsRadarChart;
function initRadarChart() {
    const ctx = document.getElementById('skillsRadar').getContext('2d');
    
    // تدمير الرسم القديم عند تغيير اللغة لتجنب التداخل
    if (skillsRadarChart) skillsRadarChart.destroy();

    skillsRadarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['C++', 'Electronics', 'Linux', 'Physics', 'Python', 'C#'],
            datasets: [{
                label: 'Skills Matrix',
                data: [85, 85, 95, 80, 85, 70],
                backgroundColor: 'rgba(0, 242, 255, 0.2)',
                borderColor: '#00f2ff',
                pointBackgroundColor: '#bcff00',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    angleLines: { color: 'rgba(255,255,255,0.1)' },
                    grid: { color: 'rgba(255,255,255,0.1)' },
                    pointLabels: { color: '#fff', font: { size: 12, family: 'Inter' } },
                    ticks: { display: false, max: 100, stepSize: 20 }
                }
            },
            plugins: { legend: { display: false } }
        }
    });
}

// 3. وظيفة تبديل اللغة (Language Switcher)
function changeLanguage(lang) {
    const data = translations[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = data.dir;

    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (data[key]) el.innerHTML = data[key];
    });

    localStorage.setItem('abdullah_pref_lang', lang);
    initRadarChart(); // إعادة رسم المخطط لتحديث الخطوط
}

// 4. تأثير الكتابة (Typing Effect)
let typingTimer;
function typeWriterEffect() {
    const textElement = document.querySelector(".sub-text");
    const lang = document.documentElement.lang || 'en';
    const textToType = translations[lang]["hero-sub"];
    let i = 0;

    clearTimeout(typingTimer);
    textElement.innerHTML = "> ";

    function type() {
        if (i < textToType.length) {
            textElement.innerHTML = "> " + textToType.substring(0, i + 1) + "<span class='cursor'>|</span>";
            i++;
            typingTimer = setTimeout(type, 50);
        }
    }
    type();
}

// 5. نظام الظهور عند التمرير (Scroll Reveal)
function scrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
}

// 6. التشغيل عند التحميل (Initialization)
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('abdullah_pref_lang') || 'en';
    changeLanguage(savedLang);
    typeWriterEffect();
    
    window.addEventListener('scroll', scrollReveal);
    scrollReveal(); // فحص العناصر المرئية فوراً
});

// 7. تأثير الـ Smooth Scroll للروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});