function identificarNumero() {
    const numeroInput = parseFloat(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(numeroInput) || !Number.isInteger(numeroInput) || numeroInput < 0) {
        resultado.classList.add("error");
        resultado.textContent = "Debe ingresar números enteros positivos.";
    } else if (numeroInput % 2 === 0) {
        resultado.classList.add("par");
        resultado.textContent = numeroInput + ' es un número par.';
    } else {
        resultado.classList.add("impar");
        resultado.textContent = numeroInput + 'es un número impar.';
    }
}