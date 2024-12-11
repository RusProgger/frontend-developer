// Структура данных с переводами для разных языков
const translations = {
    uk: {
         'page-title': 'Резюме - Руслан Вороненко Фронтенд розробник',
         'name-author': 'Руслан Вороненко',
         'works': 'Роботи',
         'collages': 'Колажі',
         'projects': 'Проєкти',
         'models': '3d моделі',
         'about': 'Про мене',
         'certificates': 'Сертифікати',
         'contacts': 'Контакти'

    },
    en: {
         'page-title': 'My portfolio Ruslan Voronenko',
         'name-author': 'Ruslan Voronenko',
         'works': 'Works',
         'collages': 'Collages',
         'projects': 'Projects',
         'models': '3d models',
         'about': 'About me',
         'certificates': 'Certificates',
         'contacts': 'Contacts'
    }
};

// Получаем все кнопки для языков
const langButtons = document.querySelectorAll('.header__language-button');

// Функция для переключения активного языка
function switchLanguage(language) {
    // Сохраняем выбранный язык в localStorage
    localStorage.setItem('language', language);

    // Удаляем класс активной кнопки у всех кнопок
    langButtons.forEach(button => button.classList.remove('header__language-button--active'));

    // Включаем класс активной кнопки на текущей выбранной
    if (language === 'uk') {
        document.getElementById('lang-uk').classList.add('header__language-button--active');
        document.getElementById('lang-uk').disabled = true;  // Блокируем кнопку "UK"
        document.getElementById('lang-en').disabled = false; // Разблокируем кнопку "EN"
    } else if (language === 'en') {
        document.getElementById('lang-en').classList.add('header__language-button--active');
        document.getElementById('lang-en').disabled = true;  // Блокируем кнопку "EN"
        document.getElementById('lang-uk').disabled = false; // Разблокируем кнопку "UK"
    }

    // Обновляем контент страницы в зависимости от выбранного языка
    updateContent(language);
}

// Функция для обновления контента страницы
function updateContent(language) {
    // Получаем все элементы с атрибутом data-translate и обновляем их текст
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

// Обработчики кликов для кнопок
document.getElementById('lang-uk').addEventListener('click', () => switchLanguage('uk'));
document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));

// При загрузке страницы проверяем, какой язык был выбран ранее
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language'); // Получаем сохранённый язык из localStorage

    if (savedLanguage === 'uk') {
        switchLanguage('uk'); // Если выбран украинский, активируем его
    } else if (savedLanguage === 'en') {
        switchLanguage('en'); // Если выбран английский, активируем его
    } else {
        // Если в localStorage ничего нет, ставим по умолчанию украинский
        switchLanguage('uk');
    }
});