/* ==========================================================================
   INICIALIZADOR DE FRAMEWORKS Y SCRIPTS GLOBALES
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Inicializar AOS (Animaciones al hacer scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800, // Duración de las animaciones en milisegundos
            once: true,    // Si es true, la animación solo ocurre una vez al bajar
            offset: 100    // Distancia en píxeles antes de activar la animación
        });
    }

    // 2. Aquí puedes agregar más inicializadores (Tooltips de Bootstrap, Sliders, etc.)
    
});