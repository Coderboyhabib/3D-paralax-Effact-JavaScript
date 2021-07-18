function Parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance *speed}px)`;
};
window.addEventListener('scroll', function() {
    Parallax('header', window.scrollY, 1);
    Parallax('.small_rose', window.scrollY, 0.4);
    Parallax('.big_rose', window.scrollY, 0.2);
});