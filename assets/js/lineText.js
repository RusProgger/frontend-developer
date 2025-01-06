const textContainer = document.getElementById('text-random');
const words = ["Programmer", "designer", "FrontEnd"];
let currentWordIndex = 0;
let currentLetterIndex = 0;

function typeText() {
  const currentWord = words[currentWordIndex];
  textContainer.textContent = currentWord.slice(0, currentLetterIndex + 1);
  currentLetterIndex++;

  if (currentLetterIndex === currentWord.length) {
    // Задержка перед стиранием
    setTimeout(() => {
      eraseText();
    }, 3000); // Задержка 3 секунды после завершения слова
  } else {
    setTimeout(typeText, 200); // Задержка между буквами
  }
}

function eraseText() {
  const currentWord = words[currentWordIndex];
  textContainer.textContent = currentWord.slice(0, currentLetterIndex);
  currentLetterIndex--;

  // Если все буквы стерты, начинаем набирать следующее слово
  if (currentLetterIndex >= 0) {
    setTimeout(eraseText, 100); // Задержка при стирании
  } else {
    // Переход к следующему слову
    currentWordIndex = (currentWordIndex + 1) % words.length;
    setTimeout(typeText, 200); // Начинаем набирать новое слово
  }
}

// Запуск анимации
typeText();