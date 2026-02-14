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