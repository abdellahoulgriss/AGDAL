function createFloatingElements() {
    const container = document.getElementById('floatingElements');
    if (!container) return;
    const elements = SiteData.floatingElements;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 25; i++) {
        const element = document.createElement('div');
        element.classList.add('floating-element');
        element.textContent = elements[Math.floor(Math.random() * elements.length)];
        element.style.left = `${Math.random() * 100}%`;
        const size = Math.random() * 2 + 1;
        element.style.fontSize = `${size}rem`;
        const duration = Math.random() * 20 + 10;
        element.style.animationDuration = `${duration}s`;
        element.style.animationDelay = `${Math.random() * 15}s`;
        fragment.appendChild(element);
    }
    container.appendChild(fragment);
}

function createConfetti(count = 100) {
    const container = document.getElementById('confettiContainer') || document.body;
    const colors = [
        '#f44336', '#e91e63', '#9c27b0', '#673ab7',
        '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4',
        '#009688', '#4caf50', '#8bc34a', '#cddc39',
        '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'
    ];
    const shapes = ['circle', 'square', 'triangle'];
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti', shapes[Math.floor(Math.random() * shapes.length)]);
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = `${2 + Math.random() * 2}s`;
            container.appendChild(confetti);
            setTimeout(() => confetti.remove(), 4000);
        }, i * 25);
    }
}

function createNuclearExplosion() {
    const explosion = document.getElementById('nuclearExplosion');
    if (!explosion) return;
    explosion.classList.add('active');
    document.body.classList.add('screen-shake');
    createExplosionParticles();
    playExplosionSound();
    setTimeout(() => {
        document.body.classList.remove('screen-shake');
    }, 2500);
    setTimeout(() => {
        explosion.classList.remove('active');
        resetExplosionElements();
    }, 3000);
}

function createExplosionParticles() {
    const container = document.getElementById('explosionParticles');
    if (!container) return;
    const colors = [
        'radial-gradient(circle, #ffff00, #ff6b00, #ff0000)',
        'radial-gradient(circle, #ffd700, #ff4500, #8b0000)',
        'radial-gradient(circle, #ffffff, #ffa500, #ff0000)',
        'radial-gradient(circle, #ffff00, #ff0000, #8b0000)',
        'radial-gradient(circle, #ff6b00, #ff0000, #8b0000)'
    ];
    for (let i = 0; i < 200; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.classList.add('explosion-particle');
            const size = Math.random() * 50 + 15;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = '50%';
            particle.style.top = '50%';
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * window.innerWidth * 2;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            particle.style.setProperty('--tx', `${tx}px`);
            particle.style.setProperty('--ty', `${ty}px`);
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            container.appendChild(particle);
            setTimeout(() => particle.remove(), 2000);
        }, i * 5);
    }
}

function resetExplosionElements() {
    const container = document.getElementById('explosionParticles');
    if (container) container.innerHTML = '';
}

function playExplosionSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const createExplosionNoise = (startFreq, endFreq, duration, delay) => {
            setTimeout(() => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                oscillator.type = 'sawtooth';
                oscillator.frequency.setValueAtTime(startFreq, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(endFreq, audioContext.currentTime + duration);
                gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + duration);
            }, delay);
        };
        createExplosionNoise(100, 30, 1, 0);
        createExplosionNoise(200, 40, 0.8, 100);
        createExplosionNoise(150, 25, 1.2, 200);
    } catch (e) {
        console.log('Audio not supported');
    }
}

function createClickEffect(x, y) {
    const effect = document.createElement('div');
    effect.classList.add('click-effect');
    effect.style.left = `${x}px`;
    effect.style.top = `${y}px`;
    document.body.appendChild(effect);
    setTimeout(() => effect.remove(), 600);
}

function showFlyingPoints(x, y, points) {
    const element = document.createElement('div');
    element.classList.add('flying-points');
    element.textContent = `+${points}`;
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
    document.body.appendChild(element);
    setTimeout(() => element.remove(), 1000);
}

function createHearts(x, y, count = 5) {
    const hearts = ['❤️', '💕', '💖', '💗', '💓'];
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = `${x + (Math.random() - 0.5) * 50}px`;
            heart.style.top = `${y}px`;
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 4000);
        }, i * 100);
    }
}

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });
    revealElements.forEach(el => observer.observe(el));
}

function animateCountUp(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const target = parseInt(entry.target.dataset.count);
                animateCountUp(entry.target, target);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(counter => observer.observe(counter));
}

function showNotification(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    notification.classList.add('notification-popup', type);
    const icons = {
        info: 'ℹ️',
        success: '✅',
        error: '❌',
        warning: '⚠️'
    };
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${icons[type]}</span>
            <span>${message}</span>
        </div>
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 500);
    }, duration);
}

function createStars(count = 100) {
    let container = document.querySelector('.stars-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'stars-container';
        document.body.prepend(container);
    }
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        fragment.appendChild(star);
    }
    container.appendChild(fragment);
}

window.createFloatingElements = createFloatingElements;
window.createConfetti = createConfetti;
window.createNuclearExplosion = createNuclearExplosion;
window.createClickEffect = createClickEffect;
window.showFlyingPoints = showFlyingPoints;
window.createHearts = createHearts;
window.initScrollReveal = initScrollReveal;
window.initCounters = initCounters;
window.showNotification = showNotification;
window.createStars = createStars;