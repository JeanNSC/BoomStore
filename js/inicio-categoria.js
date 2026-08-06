document.addEventListener("DOMContentLoaded", function() {
    const sliderCat = document.getElementById('categoriasSlider');
    const prevBtnCat = document.querySelector('.prev-btn');
    const nextBtnCat = document.querySelector('.next-btn');

    // Cuánto se moverá al tocar la flecha (Aprox. el ancho de una tarjeta en celular)
    const scrollAmount = 260; 

    if (nextBtnCat && prevBtnCat && sliderCat) {
        nextBtnCat.addEventListener('click', () => {
            sliderCat.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        
        prevBtnCat.addEventListener('click', () => {
            sliderCat.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }
});