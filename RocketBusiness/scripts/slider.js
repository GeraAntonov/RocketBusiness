const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

let currentSize

window.addEventListener('resize', function(event) {
    currentSize = window.innerWidth;
    showSlide(currentSlide);
});

function showSlide(index) {
    if (currentSize <= 767) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
                setTimeout(() => slide.classList.add('active'), 10);
            } else {
                slide.classList.remove('active');
                setTimeout(() => slide.style.display = 'none', 5);
            }
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    } else {
        slides.forEach((slide) => {
            slide.classList.add('active');
            slide.style.display = 'block';
        });
    }
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

showSlide(currentSlide);
