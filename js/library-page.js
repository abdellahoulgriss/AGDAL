const libraryBooks = [
    { id: 1, title: "الغراب بلاكي 🐦", image: "1.jpg", pdf: "blacky-crow.pdf", category: "animals" },
    { id: 2, title: "تعلم اللغة الإنجليزية للأطفال 🇬🇧", image: "2.webp", pdf: "english-kids.pdf", category: "education" },
    { id: 3, title: "موسوعة سؤال وجواب – عالم الديناصورات 🦖", image: "3.webp", pdf: "dinosaurs-qa.pdf", category: "science" },
    { id: 4, title: "قصة سليمان عليه السلام 🕌", image: "4.webp", pdf: "soliman-story.pdf", category: "prophets" },
    { id: 5, title: "قصة نوح عليه السلام", image: "5.jpg", pdf: "nouh-story.pdf", category: "prophets" },
    { id: 6, title: "قصة إبراهيم عليه السلام", image: "6.webp", pdf: "ibrahim.pdf", category: "prophets" },
    { id: 7, title: "قصة داوود عليه السلام", image: "7.webp", pdf: "dawood.pdf", category: "prophets" },
    { id: 8, title: "قصة موسى عليه السلام", image: "8.webp", pdf: "moussa.pdf", category: "prophets" },
    { id: 9, title: "قصة عيسى عليه السلام", image: "9.webp", pdf: "issa.pdf", category: "prophets" },
    { id: 10, title: "قصة يوسف عليه السلام", image: "10.webp", pdf: "youssef.pdf", category: "prophets" },
    { id: 11, title: "حمزة بن عبد المطلب", image: "11.png", pdf: "hamza.pdf", category: "prophets" },
    { id: 12, title: "قصة الرسول صلى الله عليه وسلم", image: "12.webp", pdf: "sira-nabawiya.pdf", category: "prophets" },
    { id: 13, title: "مغامرات الأرنب الذكي 🐰", image: "13.jpg", pdf: "rabbit.pdf", category: "stories" },
    { id: 14, title: "أمير العفاريت", image: "14.jpg", pdf: "amir.pdf", category: "adventures" },
    { id: 15, title: "أصدقاء الربيع", image: "15.jpg", pdf: "friends.pdf", category: "stories" },
    { id: 16, title: "أسرة السناجب", image: "16.jpg", pdf: "squires.pdf", category: "animals" },
    { id: 17, title: "أبو خربوش", image: "17.jpg", pdf: "monkey.pdf", category: "animals" },
    { id: 18, title: "أرنب في القمر", image: "18.jpg", pdf: "rabbit-in-moon.pdf", category: "stories" },
    { id: 19, title: "كتاب أبي صير وأبي قير", image: "19.jpg", pdf: "abo-sayr.pdf", category: "stories" },
    { id: 20, title: "أم سند وأم هند", image: "20.jpg", pdf: "sind-and-hind.pdf", category: "stories" },
    { id: 21, title: "الأسد والثيران الثلاثة", image: "21.webp", pdf: "lion.pdf", category: "animals" },
    { id: 22, title: "عَلَاءُ الدِّينِ", image: "22.png", pdf: "alaa_ediine.pdf", category: "adventures" },
    { id: 23, title: "الحمار القارئ", image: "23.png", pdf: "donkey.pdf", category: "animals" },
    { id: 24, title: "الدب آكل العسل", image: "24.jpg", pdf: "bear.pdf", category: "animals" },
    { id: 25, title: "لينا في بلاد العجائب", image: "25.jpg", pdf: "lina.pdf", category: "adventures" },
    { id: 26, title: "نوادر عم مبروك", image: "26.jpg", pdf: "mabrook.pdf", category: "stories" },
    { id: 27, title: "السندباد البحري", image: "27.jpg", pdf: "sindibad.pdf", category: "adventures" },
    { id: 28, title: "الببغاء الوفي", image: "28.jpg", pdf: "parrot.pdf", category: "animals" },
    { id: 29, title: "ملكة الجليد", image: "29.jpg", pdf: "ice-queen.pdf", category: "stories" },
    { id: 30, title: "الديك الهندي", image: "30.jpg", pdf: "cheeken.pdf", category: "animals" },
    { id: 31, title: "تعلم أساسيات الحاسوب 💻", image: "31.webp", pdf: "اساسيات_الحاسوب.pdf", category: "science" },
    { id: 32, title: "الأنهار والبحيرات 🌊", image: "32.jpg", pdf: "الأنهار_و_البحيرات.pdf", category: "science" },
    { id: 33, title: "الأرض والفضاء 🌍🚀", image: "33.jpg", pdf: "الأرض-و-الفضاء.pdf", category: "science" },
    { id: 34, title: "أسرار الأهرامات 🔺", image: "34.jpg", pdf: "أسرار_الأهرامات.pdf", category: "science" },
    { id: 35, title: "أسرار الكون 🌌", image: "35.jpg", pdf: "أسرار_الكون.pdf", category: "science" },
    { id: 36, title: "أسرار ما قبل التاريخ 🦖", image: "36.jpg", pdf: "أسرار_ما_قبل_التاريخ.pdf", category: "science" },
    { id: 37, title: "أسرار الحضارات القديمة 🏺", image: "37.jpg", pdf: "أسرار_الحضارات_القديمة.pdf", category: "science" },
    { id: 38, title: "أسرار المحيطات 🌊", image: "38.jpg", pdf: "أسرار_المحيطات.pdf", category: "science" },
    { id: 39, title: "التنفس والدم ❤️🫁", image: "39.jpg", pdf: "التنفس_و_الدم.pdf", category: "body" },
    { id: 40, title: "الإنسان الآلي 🤖", image: "40.jpg", pdf: "Robot.pdf", category: "science" },
    { id: 41, title: "جسم الإنسان 🫀", image: "41.jpg", pdf: "جسم_الإنسان.pdf", category: "body" },
    { id: 42, title: "🐻 دبوس", image: "42.jpg", pdf: "دبوس.pdf", category: "values" },
    { id: 43, title: "🐶 تامر", image: "43.jpg", pdf: "تامر.pdf", category: "values" },
    { id: 44, title: "🐰 نافل", image: "44.jpg", pdf: "نافل.pdf", category: "values" },
    { id: 45, title: "كابوس في الضباب", image: "45.jpg", pdf: "miki.pdf", category: "miki" },
    { id: 46, title: "أولاد في خطر", image: "46.jpg", pdf: "miki-1.pdf", category: "miki" },
    { id: 47, title: "المركب الشراعي الشبح", image: "47.jpg", pdf: "miki-2.pdf", category: "miki" },
    { id: 48, title: "السيرك المنحوس", image: "48.jpg", pdf: "miki-3.pdf", category: "miki" },
    { id: 49, title: "الرحلة 815 إلى مدينة الفئران", image: "49.jpg", pdf: "miki-4.pdf", category: "miki" },
    { id: 50, title: "مكيدة في المتحف", image: "50.jpg", pdf: "miki-5.pdf", category: "miki" }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function renderBooks(books) {
    const grid = document.getElementById('libraryGrid');
    grid.innerHTML = '';

    books.forEach((book, index) => {
        const card = document.createElement('div');
        card.className = 'book-card-full fade-in';

        const badgeHTML = book.category === 'miki'
            ? `<div class="miki-badge">⭐ سلسلة مغامرات ميكي</div>`
            : '';

        const loadingAttr = index < 4 ? '' : 'loading="lazy"';
        const altText = `${book.title} - مدرسة أكدال ايت ملول`;

        card.innerHTML = `
            <div class="book-cover">
                ${badgeHTML}
                <img src="${book.image}" alt="${altText}" ${loadingAttr}>
                <div class="book-overlay">
                    <a href="reader.html?file=${encodeURIComponent(book.pdf)}&title=${encodeURIComponent(book.title)}" class="read-btn">
                        <i class="fas fa-book-open"></i> اقرأ
                    </a>
                </div>
            </div>
            <div class="book-details">
                <h3 class="book-title-full">${book.title}</h3>
                <div class="book-actions">
                    <a href="reader.html?file=${encodeURIComponent(book.pdf)}&title=${encodeURIComponent(book.title)}" class="action-btn read">
                        <i class="fas fa-book-reader"></i> اقرأ
                    </a>
                    <a href="${book.pdf}" download class="action-btn download">
                        <i class="fas fa-download"></i> تحميل
                    </a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterBooks(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    const activeBtn = Array.from(buttons).find(btn => btn.dataset.category === category);
    if (activeBtn) activeBtn.classList.add('active');
    if (category === 'all') {
        renderBooks(libraryBooks);
    } else {
        const filtered = libraryBooks.filter(book => book.category === category);
        renderBooks(filtered);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const shuffledBooks = shuffle([...libraryBooks]);
    renderBooks(shuffledBooks);
    const filterContainer = document.querySelector('.category-filters');
    filterContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            filterBooks(e.target.dataset.category);
        }
    });
    const scrollToTopBtn = document.getElementById('scrollToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});