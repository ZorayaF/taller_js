function identificarTipoDato() {
    const valorInput = document.getElementById("valor").value;
    const resultado = document.getElementById("resultado");

    if (valorInput.trim() === "") {
        resultado.textContent = "Aún no has ingresado nada.";
    } else if (!isNaN(valorInput)) {
        resultado.textContent = "número";
    } else {
        resultado.textContent = "texto";
    }
}


document.getElementById("valor").addEventListener("input", identificarTipoDato);