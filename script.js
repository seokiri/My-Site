// Меню "три точки"
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Карусель дипломов
const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;

nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) {
        counter = -1; 
    }
    counter++;
    slide.style.transition = "transform 0.5s ease-in-out";
    slide.style.transform = 'translateX(' + (-counter * 100) + '%)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
        counter = images.length;
    }
    counter--;
    slide.style.transition = "transform 0.5s ease-in-out";
    slide.style.transform = 'translateX(' + (-counter * 100) + '%)';
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active'); // Закрыть меню при клике
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; // Через сколько пикселей после появления края блока он "всплывет"

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Запускаем функцию при каждой прокрутке
window.addEventListener("scroll", reveal);

// Запускаем один раз при загрузке, чтобы проверить блоки на первом экране
reveal();