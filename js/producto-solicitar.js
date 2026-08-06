document.addEventListener('DOMContentLoaded', () => {
    // Variables en blanco para guardar las decisiones del cliente
    let seleccionColor = 'Negro';
    let seleccionTalla = null;
    let seleccionModelo = null;

    // 1. Escuchar los clics en los Colores
    const botonesColor = document.querySelectorAll('.opcion-color');
    botonesColor.forEach(boton => {
        boton.addEventListener('click', function() {
            // Limpiar la clase a los demás y dársela al presionado
            botonesColor.forEach(b => b.classList.remove('seleccionado'));
            this.classList.add('seleccionado');
            // Guardar qué color eligió
            seleccionColor = this.getAttribute('data-valor');
        });
    });

    // 2. Escuchar los clics en las Tallas
    const botonesTalla = document.querySelectorAll('.opcion-talla');
    botonesTalla.forEach(boton => {
        boton.addEventListener('click', function() {
            botonesTalla.forEach(b => b.classList.remove('seleccionado'));
            this.classList.add('seleccionado');
            seleccionTalla = this.getAttribute('data-valor');
        });
    });

    // 3. Escuchar los clics en el Modelo (Fit)
    const botonesModelo = document.querySelectorAll('.opcion-modelo');
    botonesModelo.forEach(boton => {
        boton.addEventListener('click', function() {
            botonesModelo.forEach(b => b.classList.remove('seleccionado'));
            this.classList.add('seleccionado');
            seleccionModelo = this.getAttribute('data-valor');
        });
    });

    // 4. Lógica final al darle clic a "Solicitar"
    const btnSolicitar = document.getElementById('btn-solicitar');
    btnSolicitar.addEventListener('click', () => {
        
        // Si no seleccionaron nada, rellenamos con "No especificó"
        // (Nota: seleccionColor ya debería tener "Negro" por defecto, pero lo cubrimos por si acaso)
        const colorFinal = seleccionColor ? seleccionColor : "No especificó";
        const tallaFinal = seleccionTalla ? seleccionTalla : "No especificó";
        const modeloFinal = seleccionModelo ? seleccionModelo : "No especificó";

        // Obtener el nombre y precio leyéndolo directo del HTML
        const nombreProducto = document.getElementById('nombre-producto').innerText.trim();
        const precioProducto = document.getElementById('precio-producto').innerText.trim();

        // Armar la plantilla del mensaje para WhatsApp usando las variables finales
        const mensaje = `¡Hola Boom Store! \u{1F44B} Me interesa solicitar este producto:\n\n\u{1F455} *Producto:* ${nombreProducto}\n\u{1F3A8} *Color:* ${colorFinal}\n\u{1F4CF} *Talla:* ${tallaFinal}\n\u{2702}\u{FE0F} *Estilo:* ${modeloFinal}\n\u{1F4B0} *Precio:* ${precioProducto}\n\n¿Tienen disponibilidad para coordinar el pago y envío?`;

        // TU NÚMERO DE WHATSAPP (Recuerda poner tu número con el 51 de Perú)
        const numeroWhatsApp = "51998255450"; 

        // Codificar el texto para que los espacios y emojis viajen seguros por la URL
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;

        // Abrir directamente en una nueva pestaña del navegador o app del celular
        window.open(urlWhatsApp, '_blank');
    });
});