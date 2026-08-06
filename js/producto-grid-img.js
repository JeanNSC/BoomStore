document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       1. FUNCIONALIDAD DE LA GALERÍA DE IMÁGENES
    ========================================================================== */
    const miniaturas = document.querySelectorAll('.miniatura-img');
    const imagenPrincipal = document.getElementById('imagen-principal');

    miniaturas.forEach(miniatura => {
        miniatura.addEventListener('click', function() {
            // A) Copiar la ruta de la miniatura clickeada y pegarla en la principal
            const nuevaRuta = this.getAttribute('src');
            imagenPrincipal.setAttribute('src', nuevaRuta);

            // ====================================================================
            // NUEVO: Reiniciar la animación de fade para que no se vea el cambio seco
            // ====================================================================
            imagenPrincipal.classList.remove('animacion-fade'); // Quitamos la clase
            void imagenPrincipal.offsetWidth; // Forzamos al navegador a recalcular (magia de JS)
            imagenPrincipal.classList.add('animacion-fade'); // Volvemos a agregar la clase
            // ====================================================================

            // B) Limpiar el borde negro de todas las miniaturas
            miniaturas.forEach(m => {
                m.classList.remove('border-dark', 'border-2', 'p-1');
            });

            // C) Agregar el borde negro SOLO a la miniatura que acaban de tocar
            this.classList.add('border-dark', 'border-2', 'p-1');
        });
    });

    /* ==========================================================================
       2. FUNCIONALIDAD DEL VISOR MODAL (LUPA)
    ========================================================================== */
    const visorImagenModal = document.getElementById('visorImagenModal');
    if (visorImagenModal) {
        visorImagenModal.addEventListener('show.bs.modal', () => {
            // Cuando se abre el modal, lee la ruta actual de la imagen principal...
            const rutaActual = document.getElementById('imagen-principal').getAttribute('src');
            // ... y se la pega a la imagen gigante del modal.
            document.getElementById('imagen-modal').setAttribute('src', rutaActual);
        });
    }

});