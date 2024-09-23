document.getElementById("calcular").addEventListener("click", function() {
    // Obtener los valores de los inputs de tipo number
    let sticker1 = parseInt(document.getElementById("sticker1").value);
    let sticker2 = parseInt(document.getElementById("sticker2").value);
    let sticker3 = parseInt(document.getElementById("sticker3").value);

    // Calcular la suma de los stickers
    let totalStickers = sticker1 + sticker2 + sticker3;

    // Mostrar el mensaje correspondiente
    if (totalStickers > 10) {
        document.getElementById("resultado").innerText = "Levas mas de 10";
    } else {
        document.getElementById("resultado").innerText = "la cantidad seleccionada se encuentra bien";
    }
});
