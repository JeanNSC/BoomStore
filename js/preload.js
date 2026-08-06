
// 1. Bloqueamos el scroll para que el usuario no baje mientras carga
document.body.style.overflow = 'hidden';

// 2. Registramos el momento exacto en que empieza a cargar la página
const tiempoInicio = Date.now();

// 3. Este evento 'load' garantiza que TODAS las imágenes e íconos ya se descargaron
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
        
    // Calculamos cuánto tiempo ha tardado la página en cargar
    const tiempoTranscurrido = Date.now() - tiempoInicio;
        
    // Establecemos nuestro tiempo mínimo en milisegundos (3 segundos = 3000ms)
    const tiempoMinimo = 2000; 
        
    // Calculamos si necesitamos esperar tiempo extra
    // (Si el tiempo transcurrido es menor a 3000, calculamos la diferencia. Si es mayor, es 0)
    const tiempoDeEsperaRestante = Math.max(0, tiempoMinimo - tiempoTranscurrido);

    // Retrasamos la desaparición por el tiempo que falte
    setTimeout(() => {
        // Agregamos la clase que lo vuelve invisible
        preloader.classList.add('fade-out');
            
        // Devolvemos el scroll a la página
        document.body.style.overflow = 'auto'; 
            
    }, tiempoDeEsperaRestante);
});
