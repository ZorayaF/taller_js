function calificarMateria() {
    const nombre = document.getElementById("nombre").value;
    const materia = document.getElementById("materia").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
        const promedio = (nota1 + nota2 + nota3) / 3;
        if (promedio >= 3.0) {
            resultado.classList.add("pass");
            resultado.innerHTML = 'Felicitaciones ' + nombre + ', su nota es ' + promedio + ', pasaste la materia ' + materia +'.';
        } else {
            resultado.classList.add("fail");
            resultado.innerHTML = 'Lo siento ' + nombre + ', su nota es ' + promedio + ', no pasaste la materia ' + materia +'.';
        }
    } else {
        resultado.innerHTML = 'Por favor, ingresa valores numéricos en todos los campos de notas.';
    }
    
}


document.getElementById("nota1").addEventListener("input", calificarMateria);
document.getElementById("nota2").addEventListener("input", calificarMateria);
document.getElementById("nota3").addEventListener("input", calificarMateria);
