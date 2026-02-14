/*
 * Abdullah Zaid - Professional Portfolio Engine
 * Final Version: 2026
 

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
});*/








/**
 * Abdullah_OS v8.0 - Core Intelligence
 */

const apps = {
    about: {
        title: "About Abdullah",
        icon: "fa-id-card",
        color: "bg-blue-600",
        content: `
            <div class="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h1 class="text-4xl font-bold mb-2">Abdullah Zaid</h1>
                <p class="text-blue-400 font-semibold text-lg mb-6 text-emerald-400">Zenith System Architect</p>
                <div class="grid grid-cols-2 gap-4">
                    <div class="glass-card p-5 rounded-2xl">
                        <h3 class="text-white font-bold mb-2 uppercase text-xs opacity-50">Education</h3>
                        <p class="text-sm">Excellence Honors (3.3 Bagrut) specializing in Electronics & CS.</p>
                    </div>
                    <div class="glass-card p-5 rounded-2xl">
                        <h3 class="text-white font-bold mb-2 uppercase text-xs opacity-50">Mission</h3>
                        <p class="text-sm">Mastering the intersection of hardware logic and high-performance software.</p>
                    </div>
                </div>
            </div>`
    },
    terminal: {
        title: "abdullah@zenith: ~",
        icon: "fa-terminal",
        color: "bg-zinc-800",
        content: `
            <div class="fira text-emerald-400 text-sm h-full flex flex-col">
                <p><span class="text-white">abdullah@zenith</span>:~$ neofetch</p>
                <div class="flex gap-8 mt-4">
                    <span class="text-blue-500 text-6xl opacity-80"><i class="fab fa-linux"></i></span>
                    <div class="text-white leading-relaxed">
                        <p><span class="text-blue-400 font-bold">OS:</span> Abdullah_OS 8.0</p>
                        <p><span class="text-blue-400 font-bold">Host:</span> Quantum-Zenith Laptop</p>
                        <p><span class="text-blue-400 font-bold">Kernel:</span> 6.8.0-Zenith-PRO</p>
                        <p><span class="text-blue-400 font-bold">Shell:</span> zsh 5.9</p>
                        <p><span class="text-blue-400 font-bold">Features:</span> Tailwind, Chart.js, GNOME 46</p>
                    </div>
                </div>
                <p class="mt-6">abdullah@zenith:~$ <span class="border-r-8 border-emerald-500 blink">&nbsp;</span></p>
            </div>`
    },
    skills: {
        title: "Technical Radar",
        icon: "fa-microchip",
        color: "bg-emerald-600",
        content: `
            <div class="h-full flex flex-col">
                <h2 class="text-xl font-bold mb-4">Competency Map</h2>
                <div class="flex-1 min-h-0"><canvas id="skillsChart"></canvas></div>
            </div>`
    },
    projects: {
        title: "Software & Hardware Labs",
        icon: "fa-folder-open",
        color: "bg-purple-600",
        content: `
            <div class="grid grid-cols-2 gap-6">
                <div class="glass-card p-6 rounded-2xl">
                    <h3 class="font-bold text-purple-400">Embedded Logic</h3>
                    <p class="text-xs mt-2 opacity-60 text-white">Advanced C++ development for microcontrollers and FPGA systems.</p>
                </div>
                <div class="glass-card p-6 rounded-2xl">
                    <h3 class="font-bold text-purple-400">Digital Systems</h3>
                    <p class="text-xs mt-2 opacity-60 text-white">Full-stack circuit design and hardware/software integration.</p>
                </div>
            </div>`
    }
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    renderDesktopIcons();
    renderDock();
    updateClock();
    setInterval(updateClock, 1000);
    
    // Welcome Notification
    setTimeout(() => {
        const toast = document.getElementById('toast');
        toast.classList.replace('opacity-0', 'opacity-100');
        toast.classList.replace('translate-y-10', 'translate-y-0');
        setTimeout(() => toast.classList.add('opacity-0'), 3000);
    }, 1500);
});

// --- Desktop Rendering ---
function renderDesktopIcons() {
    const grid = document.getElementById('desktop-grid');
    grid.innerHTML = Object.entries(apps).map(([key, app]) => `
        <div class="flex flex-col items-center gap-2 group cursor-pointer" onclick="openApp('${key}')">
            <div class="w-16 h-16 ${app.color} rounded-2xl flex items-center justify-center text-3xl shadow-2xl group-hover:scale-110 transition-all duration-300">
                <i class="fas ${app.icon}"></i>
            </div>
            <span class="text-xs font-semibold drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">${app.title.split(' ')[0]}</span>
        </div>
    `).join('');
}

function renderDock() {
    const dock = document.getElementById('dock-container');
    dock.innerHTML = Object.entries(apps).map(([key, app]) => `
        <div class="relative w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-white/10 cursor-pointer transition text-white/50 hover:text-white" onclick="openApp('${key}')">
            <i class="fas ${app.icon} text-xl"></i>
            <div class="dash-indicator"></div>
        </div>
    `).join('');
}

// --- Window Management ---
function openApp(key) {
    const win = document.getElementById('app-window');
    const app = apps[key];
    
    document.getElementById('win-title').innerText = app.title;
    document.getElementById('app-content').innerHTML = app.content;
    document.getElementById('current-app').innerText = app.title;
    
    win.classList.remove('hidden');
    setTimeout(() => win.classList.add('window-active'), 50);

    if (key === 'skills') setTimeout(initSkillsChart, 200);
    closeActivities();
}

function closeApp() {
    const win = document.getElementById('app-window');
    win.classList.remove('window-active');
    setTimeout(() => {
        win.classList.add('hidden');
        document.getElementById('current-app').innerText = "Desktop";
    }, 300);
}

// --- Overlays ---
function toggleActivities() {
    const overlay = document.getElementById('activities-overlay');
    overlay.classList.toggle('hidden');
    if(!overlay.classList.contains('hidden')) document.getElementById('app-search').focus();
}

function closeActivities() { document.getElementById('activities-overlay').classList.add('hidden'); }

function toggleQuickSettings() {
    document.getElementById('quick-settings').classList.toggle('hidden');
}

// --- Systems ---
function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleString('en-US', { 
        month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false 
    });
}

function searchApps() {
    const query = document.getElementById('app-search').value.toLowerCase();
    const results = document.getElementById('search-results');
    results.innerHTML = Object.entries(apps)
        .filter(([key]) => key.includes(query))
        .map(([key, app]) => `
            <div class="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-3xl hover:bg-white/10 cursor-pointer transition" onclick="openApp('${key}')">
                <div class="w-20 h-20 ${app.color} rounded-2xl flex items-center justify-center text-4xl"><i class="fas ${app.icon}"></i></div>
                <span class="text-sm font-bold">${app.title.split(' ')[0]}</span>
            </div>
        `).join('');
}

function initSkillsChart() {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Linux', 'Hardware', 'Embedded', 'Physics', 'C++', 'Tailwind'],
            datasets: [{
                data: [95, 92, 90, 85, 88, 90],
                backgroundColor: 'rgba(53, 132, 228, 0.2)',
                borderColor: '#3584e4',
                borderWidth: 2,
                pointBackgroundColor: '#fff'
            }]
        },
        options: {
            scales: { r: { grid: { color: 'rgba(255,255,255,0.1)' }, angleLines: { color: 'rgba(255,255,255,0.1)' }, ticks: { display: false } } },
            plugins: { legend: { display: false } }
        }
    });
}
