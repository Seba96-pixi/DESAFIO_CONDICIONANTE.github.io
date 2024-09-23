function verificarPassword() {
    // Obtener los valores seleccionados de los select
    const digit1 = document.getElementById('digit1').value;
    const digit2 = document.getElementById('digit2').value;
    const digit3 = document.getElementById('digit3').value;

    // Combinar los dígitos seleccionados
    const password = digit1 + digit2 + digit3;

    // Párrafo para mostrar el resultado
    const resultado = document.getElementById('resultado');

    // Verificar el password
    if (password === '911') {
        resultado.textContent = 'password 1 correcto';
    } else if (password === '714') {
        resultado.textContent = 'password 2 es correcto';
    } else {
        resultado.textContent = 'password incorrecto';
    }
}
