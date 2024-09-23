// Selecciona la imagen usando querySelector
let imagen = document.querySelector('#imagen_trabajo'); // Selecciona el elemento con el ID 'imagen_trabajo'

// Agrega un evento de clic a la imagen
imagen.addEventListener('click', function() {
    if (imagen.style.border) {
        imagen.style.border = ''; // Elimina el borde si ya está aplicado
    } else {
        imagen.style.border = '50px solid red'; // Aplica el borde si no está aplicado
    }
});
