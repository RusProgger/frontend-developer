// Открытие и закрытие меню при клике на бургер
document.querySelector('.burger-menu').addEventListener('click', function(event) {
    const menu = document.querySelector('.menu__open');
    const burger = document.querySelector('.burger-menu');

    // Избегаем закрытия меню, если клик был по самому бургеру
    menu.classList.toggle('active');
    burger.classList.toggle('active');
});

// Закрытие меню при клике на свободное место
document.addEventListener('click', function(event) {
    const menu = document.querySelector('.menu__open');
    const burger = document.querySelector('.burger-menu');
    
    // Проверяем, был ли клик внутри меню или по бургеру
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
        // Если клик был вне меню и бургера, закрываем меню
        menu.classList.remove('active');
        burger.classList.remove('active');
    }
});