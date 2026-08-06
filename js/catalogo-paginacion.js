document.addEventListener("DOMContentLoaded", function() {
    
    const productos = document.querySelectorAll('.producto-item');
    const paginacionLista = document.getElementById('paginacion-lista');
    const textoResultados = document.getElementById('contador-resultados');
    const anclaScroll = document.getElementById('inicio-grilla-productos');

    let paginaActual = 1;
    let itemsPorPagina = window.innerWidth >= 992 ? 16 : 8; 

    // Escuchar si el usuario voltea el celular o achica la ventana
    window.addEventListener('resize', () => {
        const nuevosItems = window.innerWidth >= 992 ? 16 : 8;
        if (nuevosItems !== itemsPorPagina) {
            itemsPorPagina = nuevosItems;
            paginaActual = 1; 
            actualizarCatalogo();
        }
    });

    function actualizarCatalogo() {
        const totalProductos = productos.length;
        const totalPaginas = Math.ceil(totalProductos / itemsPorPagina);
        
        const inicio = (paginaActual - 1) * itemsPorPagina;
        const fin = inicio + itemsPorPagina;

        // Mostrar/Ocultar productos
        productos.forEach((producto, index) => {
            if (index >= inicio && index < fin) {
                producto.classList.remove('d-none');
            } else {
                producto.classList.add('d-none');
            }
        });

        // Actualizar el texto superior
        const mostrandoFin = fin > totalProductos ? totalProductos : fin;
        textoResultados.innerHTML = `MOSTRANDO ${inicio + 1}–${mostrandoFin} DE ${totalProductos} RESULTADOS`;

        // Dibujar los botones con las flechas
        dibujarBotones(totalPaginas);
    }

    function dibujarBotones(totalPaginas) {
        paginacionLista.innerHTML = ''; // Limpiamos botones anteriores

        if (totalPaginas <= 1) return; // Si solo hay 1 página, no hacemos nada

        // 1. DIBUJAR FLECHA "ANTERIOR" (←)
        // Solo aparece si la página actual es mayor a 1
        if (paginaActual > 1) {
            const liPrev = document.createElement('li');
            liPrev.innerHTML = `<button class="page-btn shadow-none">←</button>`;
            liPrev.addEventListener('click', (e) => {
                e.preventDefault();
                cambiarPagina(paginaActual - 1);
            });
            paginacionLista.appendChild(liPrev);
        }

        // 2. DIBUJAR LOS NÚMEROS (1, 2, 3...)
        for (let i = 1; i <= totalPaginas; i++) {
            const li = document.createElement('li');
            
            if (i === paginaActual) {
                li.classList.add('active');
            }
            
            li.innerHTML = `<button class="page-btn shadow-none">${i}</button>`;
            
            // Le damos el evento click a todos los números que NO sean la página actual
            if (i !== paginaActual) {
                li.addEventListener('click', (e) => {
                    e.preventDefault();
                    cambiarPagina(i);
                });
            }
            
            paginacionLista.appendChild(li);
        }

        // 3. DIBUJAR FLECHA "SIGUIENTE" (→)
        // Solo aparece si hay más páginas por delante
        if (paginaActual < totalPaginas) {
            const liNext = document.createElement('li');
            liNext.innerHTML = `<button class="page-btn shadow-none">→</button>`;
            liNext.addEventListener('click', (e) => {
                e.preventDefault();
                cambiarPagina(paginaActual + 1);
            });
            paginacionLista.appendChild(liNext);
        }
    }

    function cambiarPagina(nuevaPagina) {
        paginaActual = nuevaPagina;
        actualizarCatalogo();
        
        // EFECTO SCROLL ARRIBA
        if (anclaScroll) {
            const offsetTop = anclaScroll.getBoundingClientRect().top + window.scrollY - 100; 
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    // Arrancar la función
    actualizarCatalogo();
});