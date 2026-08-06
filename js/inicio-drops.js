document.addEventListener("DOMContentLoaded", function() {
    // ==========================================
    // 1. LÓGICA PARA "NEW DROPS"
    // ==========================================
    const sliderDrops = document.getElementById('newDropsSlider');
    const prevBtnDrops = document.querySelector('.prev-btn-drops');
    const nextBtnDrops = document.querySelector('.next-btn-drops');
    const scrollAmount = 280; 

    if (nextBtnDrops && prevBtnDrops && sliderDrops) {
        nextBtnDrops.addEventListener('click', () => {
            sliderDrops.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        prevBtnDrops.addEventListener('click', () => {
            sliderDrops.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }

    // ==========================================
    // 2. LÓGICA PARA "TOP DROPS"
    // ==========================================
    const sliderTop = document.getElementById('topDropsSlider');
    const prevBtnTop = document.querySelector('.prev-btn-top');
    const nextBtnTop = document.querySelector('.next-btn-top');

    if (nextBtnTop && prevBtnTop && sliderTop) {
        nextBtnTop.addEventListener('click', () => {
            sliderTop.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        prevBtnTop.addEventListener('click', () => {
            sliderTop.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }
});