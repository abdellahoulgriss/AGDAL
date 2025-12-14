let currentTimeMode = 'present';
const dialUpAudioContext = new (window.AudioContext || window.webkitAudioContext)();

function travelToPast() {
    if (currentTimeMode === 'past') return;
    showTimeTransition('past');
    setTimeout(() => {
        currentTimeMode = 'past';
        const body = document.body;
        body.classList.remove('future-mode');
        removeFutureElements();
        body.classList.add('nineties-mode');
        addCRTEffect();
        addWindowsTaskbar();
        transformCardsToNineties();
        updateTimeButtons('past');
        playDialUpSound();
    }, 500);
}

function travelToFuture() {
    if (currentTimeMode === 'future') return;
    showTimeTransition('future');
    setTimeout(() => {
        currentTimeMode = 'future';
        const body = document.body;
        body.classList.remove('nineties-mode');
        removeNinetiesElements();
        body.classList.add('future-mode');
        addFutureGrid();
        addDataStream();
        addFutureParticles();
        transformCardsToFuture();
        updateTimeButtons('future');
        playFutureSound();
    }, 500);
}

function returnToPresent() {
    if (currentTimeMode === 'present') return;
    showTimeTransition('present');
    setTimeout(() => {
        currentTimeMode = 'present';
        const body = document.body;
        body.classList.remove('nineties-mode', 'future-mode');
        removeNinetiesElements();
        removeFutureElements();
        resetCards();
        updateTimeButtons('present');
    }, 500);
}

function showTimeTransition(mode) {
    let transition = document.querySelector('.time-transition');
    if (!transition) {
        transition = document.createElement('div');
        transition.className = 'time-transition';
        document.body.appendChild(transition);
    }
    transition.className = 'time-transition';
    if (mode === 'past') transition.classList.add('to-past');
    else if (mode === 'future') transition.classList.add('to-future');
    setTimeout(() => transition.classList.add('active'), 10);
    setTimeout(() => {
        transition.classList.remove('active');
    }, 1000);
    createTimeWarpEffect();
}

function createTimeWarpEffect() {
    const warp = document.createElement('div');
    warp.className = 'time-warp-effect active';
    document.body.appendChild(warp);
    setTimeout(() => warp.remove(), 1500);
}

function addCRTEffect() {
    if (document.querySelector('.nineties-crt')) return;
    const crt = document.createElement('div');
    crt.className = 'nineties-crt';
    document.body.appendChild(crt);
}

function addWindowsTaskbar() {
    if (document.querySelector('.nineties-taskbar')) return;
    const taskbar = document.createElement('div');
    taskbar.className = 'nineties-taskbar';
    taskbar.innerHTML = ` <button class="nineties-start-btn"> <span style="font-size: 20px;">🪟</span> ابدأ </button> <div class="nineties-clock" id="ninetiesClock">12:00 PM</div> `;
    document.body.appendChild(taskbar);
    updateNinetiesClock();
    setInterval(updateNinetiesClock, 1000);
}

function updateNinetiesClock() {
    const clock = document.getElementById('ninetiesClock');
    if (clock) {
        const now = new Date();
        clock.textContent = now.toLocaleTimeString('ar-MA', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}

function transformCardsToNineties() {
    document.querySelectorAll('.class-card').forEach((card, index) => {
        const classData = SiteData.classes[index];
        card.classList.remove('future-card-purple', 'future-card-red', 'future-card-yellow', 'future-card-blue');
        card.classList.add('nineties-window');
        card.innerHTML = ` <div class="nineties-title-bar"> <span>${classData.name}.exe</span> <div class="nineties-title-bar-buttons"> <button class="nineties-btn">_</button> <button class="nineties-btn">□</button> <button class="nineties-btn">×</button> </div> </div> <div style="padding: 20px; background: #c0c0c0; color: black; height: calc(100% - 30px); display: flex; flex-direction: column; justify-content: center; align-items: center;"> <div style="font-size: 4rem; margin-bottom: 15px;">💾</div> <h3 style="margin: 10px 0; font-family: 'MS Sans Serif', sans-serif; font-size: 1.2rem;">${classData.name}</h3> <p style="margin: 10px 0; font-family: 'MS Sans Serif', sans-serif; font-size: 0.9rem; color: #333;">${classData.description}</p> <p style="font-family: 'MS Sans Serif', sans-serif; font-size: 0.8rem; color: #666;">عدد الطلاب: ${classData.studentCount}</p> <button class="nineties-button" style="margin-top: 20px; padding: 8px 20px;"> افتح المجلد </button> </div> `;
    });
}

function removeNinetiesElements() {
    document.querySelectorAll('.nineties-crt, .nineties-taskbar').forEach(el => el.remove());
}

function addFutureGrid() {
    if (document.querySelector('.future-grid')) return;
    const grid = document.createElement('div');
    grid.className = 'future-grid';
    document.body.appendChild(grid);
}

function addDataStream() {
    if (document.querySelector('.future-data-stream')) return;
    const stream = document.createElement('div');
    stream.className = 'future-data-stream';
    document.body.appendChild(stream);
}

function addFutureParticles() {
    if (document.querySelector('.future-particles')) return;
    const container = document.createElement('div');
    container.className = 'future-particles';
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'future-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${3 + Math.random() * 4}s`;
        container.appendChild(particle);
    }
    document.body.appendChild(container);
}

function transformCardsToFuture() {
    const glowClasses = ['future-card-purple', 'future-card-red', 'future-card-yellow', 'future-card-blue'];

    document.querySelectorAll('.class-card').forEach((card, index) => {
        const classData = SiteData.classes[index];
        // Remove hologram effect if present
        card.classList.remove('hologram-effect');

        // Add specific glow class
        if (glowClasses[index]) {
            card.classList.add(glowClasses[index]);
        }

        // Lightweight card structure
        card.innerHTML = `
            <div class="grade-badge star-6"> <i class="fas fa-rocket"></i> <span>2050</span> </div>
            <div class="card-decoration">
                <div class="stars-sparkle"> <span>🤖</span><span>✨</span><span>🚀</span> </div>
            </div>
            <div class="card-glow"></div>
            <div class="card-content">
                <div class="class-icon"> <i class="fas fa-robot"></i> </div>
                <h3 class="class-title">${classData.name}</h3>
                <p class="class-motto">"${classData.motto}"</p>
                <div class="class-stats">
                    <div class="stat"> <i class="fas fa-user-graduate"></i> <span>${classData.studentCount} طالب</span> </div>
                    <div class="stat"> <i class="fas fa-star"></i> <span>${classData.totalPoints} نقطة</span> </div>
                </div>
                <div class="class-badges"> <span class="badge">🤖 AI</span> <span class="badge">🚀 Future</span> </div>
                <button class="explore-btn"> <span>استكشف المستقبل</span> <i class="fas fa-arrow-left"></i> </button>
            </div>
        `;
    });
}

function removeFutureElements() {
    document.querySelectorAll('.future-grid, .future-data-stream, .future-particles').forEach(el => el.remove());
}

function resetCards() {
    const glowClasses = ['future-card-purple', 'future-card-red', 'future-card-yellow', 'future-card-blue'];

    document.querySelectorAll('.class-card').forEach((card, index) => {
        const classData = SiteData.classes[index];
        card.classList.remove('nineties-window', 'hologram-effect', 'future-card-purple', 'future-card-red', 'future-card-yellow', 'future-card-blue');

        // Add specific glow class for present mode too
        if (glowClasses[index]) {
            card.classList.add(glowClasses[index]);
        }

        card.innerHTML = ` <div class="card-glow"></div> <div class="card-content"> <div class="class-icon"> <i class="${classData.icon}"></i> </div> <h3 class="class-title">${classData.name}</h3> <p class="class-motto">"${classData.motto}"</p> <div class="class-stats"> <div class="stat"> <i class="fas fa-user-graduate"></i> <span>${classData.studentCount} طالب</span> </div> <div class="stat"> <i class="fas fa-star"></i> <span>${classData.totalPoints} نقطة</span> </div> </div> <div class="class-badges"> ${classData.badges.map(b => `<span class="badge">${b}</span>`).join('')} </div> <button class="explore-btn"> <span>استكشف الفصل</span> <i class="fas fa-arrow-left"></i> </button> </div> `;
    });
}

function updateTimeButtons(mode) {
    document.querySelectorAll('.time-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`.time-btn.${mode}-btn`);
    if (activeBtn) activeBtn.classList.add('active');
}

function playDialUpSound() {
    try {
        const playTone = (frequency, duration, delay) => {
            setTimeout(() => {
                const oscillator = dialUpAudioContext.createOscillator();
                const gainNode = dialUpAudioContext.createGain();
                oscillator.connect(gainNode);
                gainNode.connect(dialUpAudioContext.destination);
                oscillator.frequency.value = frequency;
                oscillator.type = 'sine';
                gainNode.gain.setValueAtTime(0.2, dialUpAudioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, dialUpAudioContext.currentTime + duration);
                oscillator.start(dialUpAudioContext.currentTime);
                oscillator.stop(dialUpAudioContext.currentTime + duration);
            }, delay);
        };
        playTone(350, 0.1, 0);
        playTone(440, 0.1, 150);
        playTone(350, 0.1, 300);
        playTone(440, 0.15, 450);
        playTone(480, 0.2, 600);
        playTone(350, 0.1, 800);
        playTone(440, 0.3, 950);
    } catch (e) {
        console.log('Audio not supported');
    }
}

function playFutureSound() {
    try {
        const oscillator = dialUpAudioContext.createOscillator();
        const gainNode = dialUpAudioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(dialUpAudioContext.destination);
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(200, dialUpAudioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1000, dialUpAudioContext.currentTime + 0.5);
        oscillator.frequency.exponentialRampToValueAtTime(400, dialUpAudioContext.currentTime + 1);
        gainNode.gain.setValueAtTime(0.2, dialUpAudioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, dialUpAudioContext.currentTime + 1.2);
        oscillator.start(dialUpAudioContext.currentTime);
        oscillator.stop(dialUpAudioContext.currentTime + 1.2);
    } catch (e) {
        console.log('Audio not supported');
    }
}
window.travelToPast = travelToPast;
window.travelToFuture = travelToFuture;
window.returnToPresent = returnToPresent;