const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Если элемент видим
        if (entry.isIntersecting) {
            // Добавляем класс 'visible'
            entry.target.classList.add('visible');
            // Опционально: Отслеживаем только первый вход, чтобы избежать повторной анимации
            observer.unobserve(entry.target);
        }
    });
}, {
    // Порог видимости — элемент должен быть на 50% виден, чтобы анимация сработала
    threshold: 0.5
});

// Находим все карточки
const cards = document.querySelectorAll('.main__content-cards-item');

// Наблюдаем за каждой карточкой
cards.forEach(card => {
    observer.observe(card);
});