document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeStyle = document.getElementById('theme-style');
    
    // Проверяем, есть ли сохраненная тема в localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Если сохраненная тема — темная, ставим чекбокс в активное состояние и меняем файл стилей на dark-themes.min.css
    if (savedTheme === 'dark') {
      themeToggle.checked = true;
      themeStyle.setAttribute('href', 'assets/css/dark-themes.min.css');
    }
    
    // Обработчик изменения состояния чекбокса
    themeToggle.addEventListener('change', () => {
      if (themeToggle.checked) {
        // Меняем файл стилей на dark-themes.min.css
        console.log('Switching to dark theme...');
        themeStyle.setAttribute('href', 'assets/css/dark-themes.min.css');
        localStorage.setItem('theme', 'dark');
      } else {
        // Меняем файл стилей на main.min.css (светлая тема)
        console.log('Switching to light theme...');
        themeStyle.setAttribute('href', 'assets/css/main.min.css');
        localStorage.setItem('theme', 'light');
      }
    });
  });