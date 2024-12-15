const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Если элемент видим (на 50% или больше)
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');  // Убираем класс скрытия
        } else {
            // Если элемент не виден (менее 50% на экране), скрываем его
            entry.target.classList.add('hidden');
            entry.target.classList.remove('visible');  // Убираем класс видимости
        }
    });
}, {
    // Порог видимости — элемент должен быть на 50% виден
    threshold: 0.5
});

// Находим все карточки
const cards = document.querySelectorAll('.main__content-cards-web-item');

// Наблюдаем за каждой карточкой
cards.forEach(card => {
    observer.observe(card);
});