document.querySelector('.burger-menu').addEventListener('click', function() {
    const menu = document.querySelector('.menu__open');
    const burger = document.querySelector('.burger-menu');
    
    menu.classList.toggle('active'); 
    burger.classList.toggle('active'); 
  });