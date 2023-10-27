function verificarMayorEdad() {
    const nombreInput = document.getElementById("nombre").value;
    const edadInput = document.getElementById("edad").value;
    const resultado = document.getElementById("resultado");

    if (edadInput<=0){
        resultado.textContent = 'No es una edad válida!';
    }
    else if (edadInput >= 18) {
        resultado.textContent = 'Hola ' + nombreInput + ', eres mayor de edad!';
    }else {
        resultado.textContent = 'Hola ' + nombreInput + ', eres menor de edad!';
    }
}
document.getElementById("edad").addEventListener("input", verificarMayorEdad);
document.getElementById("nombre").addEventListener("input", verificarMayorEdad);
