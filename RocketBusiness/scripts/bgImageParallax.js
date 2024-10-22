const bgImageParallax = document.querySelector('.video_content__overlay');

const checkScreenSize = () => {
    if (window.innerWidth > 1024) {
        bgImageParallax.addEventListener('mousemove', handleMouseMove);
    } else {
        bgImageParallax.removeEventListener('mousemove', handleMouseMove);
        bgImageParallax.style.backgroundPosition = 'center';
    }
};

const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { offsetWidth, offsetHeight } = bgImageParallax;

    const x = (clientX / offsetWidth) * 50;
    const y = (clientY / offsetHeight) * 50;

    bgImageParallax.style.backgroundPosition = `${x}% ${y}%`;
};

checkScreenSize();
window.addEventListener('resize', checkScreenSize);
