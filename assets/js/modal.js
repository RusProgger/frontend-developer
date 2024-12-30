const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const images = document.querySelectorAll('.gallery-img');

images.forEach(img => {
    img.onclick = function() {
        modal.style.display = "flex";
        modalImg.src = this.src; 
    }
});

const closeBtn = document.querySelector('.close');
closeBtn.onclick = function() {
    modal.style.display = "none";
};

modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};