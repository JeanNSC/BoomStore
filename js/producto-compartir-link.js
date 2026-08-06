/* ==========================================================================
   FUNCIONALIDAD PARA COMPARTIR EN REDES SOCIALES
========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Capturamos la URL exacta de la página actual y el mensaje
    const urlActual = encodeURIComponent(window.location.href);
    const textoMensaje = encodeURIComponent("¡Mira este polo increíble en Boom Store! 🔥");

    // 2. Asignamos las URLs generadas a los botones correspondientes
    const btnFb = document.getElementById('btn-share-fb');
    const btnX = document.getElementById('btn-share-x');
    const btnTg = document.getElementById('btn-share-tg');
    const btnWa = document.getElementById('btn-share-wa');

    if (btnFb) btnFb.href = `https://www.facebook.com/sharer/sharer.php?u=${urlActual}`;
    if (btnX) btnX.href = `https://twitter.com/intent/tweet?url=${urlActual}&text=${textoMensaje}`;
    if (btnTg) btnTg.href = `https://t.me/share/url?url=${urlActual}&text=${textoMensaje}`;
    if (btnWa) btnWa.href = `https://api.whatsapp.com/send?text=${textoMensaje}%20${urlActual}`;

    // 3. Funcionalidad para el botón "Copiar Enlace"
    const btnCopy = document.getElementById('btn-share-copy');
    if (btnCopy) {
        btnCopy.addEventListener('click', function(e) {
            e.preventDefault(); // Evita que la página salte hacia arriba
            
            // Copiamos la URL al portapapeles del dispositivo
            navigator.clipboard.writeText(window.location.href).then(() => {
                const icono = document.getElementById('icono-copiar');
                
                // Cambiamos el icono a un check de confirmación
                icono.classList.remove('fa-link');
                icono.classList.add('fa-check');
                icono.style.color = '#0F9D8A';

                // Lo regresamos a su icono original después de 2 segundos
                setTimeout(() => {
                    icono.classList.remove('fa-check');
                    icono.classList.add('fa-link');
                    icono.style.color = '';
                }, 2000);
            });
        });
    }
});