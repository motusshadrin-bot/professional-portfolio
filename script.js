// Плавная прокрутка при клике на навигацию
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

// Кнопка "Узнать больше" - прокрутка к секции "О себе"
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Анимация при появлении элементов на экране
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Применяем наблюдение к картам навыков и достижений
document.querySelectorAll('.skill-card, .achievement-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Подсветка активного пункта меню при прокрутке
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = 'white';
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = '#3498db';
        }
    });
});

// Динамическое добавление класса при загрузке страницы
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

console.log('Портфолио загружено успешно!')