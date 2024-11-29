// JavaScript para hacer que el ícono se quede sobre el footer
window.addEventListener('scroll', function() {
    var icon = document.getElementById('whatsapp-icon');
    var footer = document.querySelector('footer');
    var footerRect = footer.getBoundingClientRect();
    
    // Si el pie de página es visible, mantenemos el ícono sobre él
    if (footerRect.top <= window.innerHeight) {
        icon.style.bottom = footerRect.height + 'px'; // Mueve el ícono justo encima del footer
    } else {
        icon.style.bottom = '20px'; // Deja el ícono en la parte inferior cuando no está sobre el footer
    }
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var logoBlanco = document.querySelector('.logo-blanco');
    var logoNegro = document.querySelector('.logo-negro');
    var header = document.querySelector('header');
    
    // Si el scroll ha pasado más allá del header, agregamos la clase "scrolled"
    if (window.scrollY > header.offsetHeight) {
        navbar.classList.add('scrolled');  // Agregar la clase 'scrolled' al navbar
        logoBlanco.style.display = 'none'; // Ocultar el logo blanco
        logoNegro.style.display = 'block'; // Mostrar el logo negro
    } else {
        navbar.classList.remove('scrolled'); // Remover la clase 'scrolled' del navbar
        logoBlanco.style.display = 'block'; // Mostrar el logo blanco
        logoNegro.style.display = 'none'; // Ocultar el logo negro
    }
});

// Función para abrir el popup
// Seleccionamos los elementos por su ID
const verMasBtn = document.getElementById('verMasBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

// Función para abrir el popup
verMasBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
});

// Función para cerrar el popup
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Cerrar el popup al hacer clic fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

document.getElementById('closeBtn').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
});


// Función para abrir un pop-up específico
function abrirPopup(idPopup) {
    const popup = document.getElementById(idPopup);
    popup.style.display = 'flex';
    indiceActual[idPopup] = 0;  // Inicializar índice del carrusel para el pop-up específico

    // Agregar un event listener para cerrar al hacer clic fuera del contenido
    popup.addEventListener('click', (event) => {
        const popupContent = popup.querySelector('.popup-content');
        if (!popupContent.contains(event.target)) {
            cerrarPopup(idPopup);
        }
    });
}

// Función para cerrar un pop-up específico
function cerrarPopup(idPopup) {
    const popup = document.getElementById(idPopup);
    popup.style.display = 'none';
}




let indiceActual = {};

// Función para abrir un pop-up específico
function abrirPopup(idPopup) {
    const popup = document.getElementById(idPopup);
    popup.style.display = 'flex';
    indiceActual[idPopup] = 0;  // Inicializar índice del carrusel para el pop-up específico
}

// Función para cerrar un pop-up específico
function cerrarPopup(idPopup) {
    const popup = document.getElementById(idPopup);
    popup.style.display = 'none';
}

// Función para mover las imágenes en el carrusel
function moverCarrusel(direccion, idPopup) {
    const carrusel = document.querySelector(`#${idPopup} .carousel-images`);
    const totalImagenes = carrusel.children.length;
    
    // Actualizar índice de la imagen
    indiceActual[idPopup] = (indiceActual[idPopup] + direccion + totalImagenes) % totalImagenes;
    
    // Mover el carrusel
    const desplazamiento = -indiceActual[idPopup] * 100;
    carrusel.style.transform = `translateX(${desplazamiento}%)`;
}

// Esperar hasta que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.getElementById("weird-navbar-toggler");
    const menu = document.getElementById("weird-navbar-menu");
  
    if (toggler && menu) {
      toggler.addEventListener("click", function () {
        menu.classList.toggle("show");
      });
    } else {
      console.error("No se encontraron los elementos toggler o menú.");
    }
  });
  