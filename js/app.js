document.addEventListener('DOMContentLoaded', () => {
    initFloatingElements();
    // initConfetti(); // Removed for performance
    initNavigation();
    initTimeTravelToggle();
    initLibrary();
    initCounters();
    renderGames();
    PointsSystem.loadPoints();
    AchievementsSystem.load();
    AchievementsSystem.render();
    if (!localStorage.getItem('firstLogin')) {
        localStorage.setItem('firstLogin', 'true');
        setTimeout(() => {
            unlockAchievement('first_login');
        }, 2000);
    }
});

function initFloatingElements() { }

// Confetti removed for performance


function initNavigation() {
    const nav = document.getElementById('mainNav');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    window.addEventListener('scroll', () => {
        const navLinks = document.querySelector('.nav-links');
        const isMenuOpen = navLinks.classList.contains('mobile-open');

        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
            if (!isMenuOpen) {
                nav.classList.add('hidden-nav');
            }
        } else {
            nav.classList.remove('scrolled');
            nav.classList.remove('hidden-nav');
        }
    });
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('mobile-open');
        });
    }
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));

            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.classList.contains('mobile-open')) {
                navLinks.classList.remove('mobile-open');
            }

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
}

function initTimeTravelToggle() {
    const toggleBtn = document.getElementById('timeTravelToggleBtn');
    const buttonsContainer = document.getElementById('timeTravelButtons');
    let isTimeTravelLoaded = false;

    if (toggleBtn && buttonsContainer) {
        toggleBtn.addEventListener('click', () => {
            if (!isTimeTravelLoaded) {
                showNotification('جاري تحميل آلة الزمن... ⏳', 'info');

                // Load CSS
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'css/time-travel.css?v=3';
                document.head.appendChild(link);

                // Load JS
                const script = document.createElement('script');
                script.src = 'js/time-travel.js?v=3';
                script.onload = () => {
                    isTimeTravelLoaded = true;
                    const isHidden = buttonsContainer.style.display === 'none';
                    buttonsContainer.style.display = isHidden ? 'flex' : 'none';
                    const icon = toggleBtn.querySelector('i');
                    if (icon) {
                        icon.className = isHidden ? 'fas fa-times' : 'fas fa-clock';
                    }
                    showNotification('آلة الزمن جاهزة! 🕒', 'success');
                };
                document.body.appendChild(script);
            } else {
                const isHidden = buttonsContainer.style.display === 'none';
                buttonsContainer.style.display = isHidden ? 'flex' : 'none';
                const icon = toggleBtn.querySelector('i');
                if (icon) {
                    icon.className = isHidden ? 'fas fa-times' : 'fas fa-clock';
                }
            }
        });
    }
}

function showTeacherContact() {
    showNotification('تواصل مع معلمك للحصول على رمز الدخول 📞', 'info', 5000);
}

function initLibrary() {
    renderLibrary();
    initCategoryFilters();
}

function renderLibrary(category = 'all') {
    const grid = document.getElementById('libraryGrid');
    if (!grid) return;
    const lessonUrls = {
        1: 'lessons/lesson-1-solar-system.html',
        2: 'lessons/lesson-2-fractions.html',
        3: 'lessons/lesson-3-spelling.html',
        4: 'lessons/lesson-4-colors.html',
        5: 'lessons/lesson-5-energy.html',
        6: 'lessons/lesson-6-geometry.html',
        7: 'lessons/lesson-7-programming.html',
        8: 'lessons/lesson-8-calligraphy.html',
        9: 'lessons/lesson-9-human-body.html',
        10: 'lessons/lesson-10-multiplication.html',
        11: 'lessons/lesson-11-writing.html',
        12: 'lessons/lesson-12-drawing.html',
        13: 'lessons/lesson-13-grammar.html',
        14: 'lessons/lesson-14-morphology.html',
        15: 'lessons/lesson-15-chemistry.html',
        16: 'lessons/lesson-16-astronomy.html',
        17: 'lessons/lesson-17-measurements.html',
        18: 'lessons/lesson-18-morocco-geography.html',
        19: 'lessons/lesson-19-digital-safety.html',
        20: 'lessons/lesson-20-robots-ai.html',
        21: 'lessons/lesson-21-basic-english.html',
        22: 'lessons/lesson-22-basic-french.html',
        23: 'lessons/lesson-23-geology.html',
        24: 'lessons/lesson-24-ancient-civilizations.html',
        25: 'lessons/lesson-25-future-professions.html',
        26: 'lessons/lesson-26-scratch-games.html',
        27: 'lessons/lesson-27-quran-kids.html',
        28: 'lessons/lesson-28-seerah.html',
        29: 'lessons/lesson-29-ethics.html',
        30: 'lessons/lesson-30-road-safety.html',
        31: 'lessons/lesson-31-world-cultures.html',
        32: 'lessons/lesson-32-brain.html',
        33: 'lessons/lesson-33-airplanes.html',
        34: 'lessons/lesson-34-oceans.html',
        35: 'lessons/lesson-35-study-smart.html',
        36: 'lessons/lesson-36-internet.html',
        37: 'lessons/lesson-37-muslim-scientists.html',
        38: 'lessons/lesson-38-wonders.html',
        39: 'lessons/lesson-39-science-review.html',
        40: 'lessons/lesson-40-computer.html'
    };
    const items = category === 'all' ? SiteData.library : SiteData.library.filter(item => item.category === category);
    grid.innerHTML = items.map(item => ` <a href="${lessonUrls[item.id] || '#'}" class="library-card" style="text-decoration: none; color: inherit;"> <div class="library-card-image" style="background: ${getCategoryColor(item.category)}; height: 400px;"> ${item.image ? `<img src="${item.image}" alt="${item.title}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">` : item.icon} </div> <div class="library-card-content"> <span class="library-card-category">${getCategoryName(item.category)}</span> <h3 class="library-card-title">${item.title}</h3> <p class="library-card-description">${item.description}</p> <div class="library-card-meta"> <span>⏱️ ${item.duration}</span> <span>⭐ +${item.points} نقطة</span> </div> </div> </a> `).join('');
}

function initCategoryFilters() {
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderLibrary(btn.dataset.category);
        });
    });
}

function getCategoryColor(category) {
    const colors = {
        science: 'linear-gradient(135deg, #4facfe, #00f2fe)',
        math: 'linear-gradient(135deg, #ffd700, #ff9a00)',
        arabic: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
        art: 'linear-gradient(135deg, #f093fb, #f5576c)',
        tech: 'linear-gradient(135deg, #667eea, #764ba2)'
    };
    return colors[category] || colors.science;
}

function getCategoryName(category) {
    const names = {
        science: 'العلوم',
        math: 'الرياضيات',
        arabic: 'العربية',
        art: 'الفنون',
        tech: 'التقنية'
    };
    return names[category] || category;
}

function initLeaderboard() {
    const list = document.getElementById('leaderboardList');
    if (!list) return;
    list.innerHTML = SiteData.leaderboard.slice(0, 10).map((player, index) => {
        let rankClass = '';
        if (index === 0) rankClass = 'gold';
        else if (index === 1) rankClass = 'silver';
        else if (index === 2) rankClass = 'bronze';
        return ` <div class="leaderboard-item"> <div class="leaderboard-rank ${rankClass}">${player.rank}</div> <div class="leaderboard-avatar">${player.avatar}</div> <div class="leaderboard-info"> <span class="leaderboard-name">${player.name}</span> <span class="leaderboard-class">${player.class}</span> </div> <span class="leaderboard-points">${player.points} نقطة</span> </div> `;
    }).join('');
}

function initCompetitionTimer() {
    const competition = SiteData.competitions.find(c => c.isActive);
    if (!competition) return;
    const updateTimer = () => {
        const now = new Date();
        const diff = competition.endDate - now;
        if (diff <= 0) {
            document.querySelectorAll('.timer-value').forEach(el => el.textContent = '0');
            return;
        }
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById('timerDays').textContent = days;
        document.getElementById('timerHours').textContent = hours;
        document.getElementById('timerMinutes').textContent = minutes;
        document.getElementById('timerSeconds').textContent = seconds;
    };
    updateTimer();
    setInterval(updateTimer, 1000);
}

function joinCompetition() {
    showNotification('🎉 تم تسجيلك في المسابقة! حظاً موفقاً!', 'success');
    unlockAchievement('first_competition');
}

function navigateToClass(page, event) {
    if (event) createClickEffect(event.clientX, event.clientY);
    setTimeout(() => {
        window.location.href = page;
    }, 300);
}
window.showTeacherContact = showTeacherContact;
window.joinCompetition = joinCompetition;
window.navigateToClass = navigateToClass;