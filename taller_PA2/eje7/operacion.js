function verificarDivisibilidad() {
    const numeroA = parseFloat(document.getElementById("numeroA").value);
    const numeroB = parseFloat(document.getElementById("numeroB").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(numeroA) || isNaN(numeroB) || !Number.isInteger(numeroA) || !Number.isInteger(numeroB) || numeroA <= 0 || numeroB <= 0) {
        resultado.classList.add("error");
        resultado.textContent = "Por favor, ingrese dos números enteros positivos.";
    } else if (numeroA % numeroB === 0) {
        resultado.classList.add("success");
        resultado.textContent = `El número ${numeroA} es divisible entre el número ${numeroB}.`;
    } else {
        resultado.classList.add("error");
        resultado.textContent = `El número ${numeroA} no es divisible entre el número ${numeroB}.`;
    }
}