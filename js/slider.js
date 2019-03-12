let currentSlide = 0;

const dots = document.getElementsByClassName('fa-circle');
const slideWrapper = document.querySelector('.slider-wrapper');
const slides = document.getElementsByClassName('slide');

let size = slideWrapper.clientWidth;

window.addEventListener('resize', () => {
    size = slideWrapper.clientWidth;
})

function slide(num) {
    dots[currentSlide].classList.toggle('activ');
    slideWrapper.style.transform = 'translateX(' + (-size * num) + 'px)';
    currentSlide = num;
    dots[num].classList.toggle('activ');
    slideWrapper.style.transform = 'translateX(' + (-size * num) + 'px)';
}

function autoSlide() {
    slide((currentSlide + 1) % slides.length);
}

setInterval(autoSlide, 2000);
