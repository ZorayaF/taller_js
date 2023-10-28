function identificarNumeros() {
    const numerosInput = document.getElementById("numeros").value;
    const resultado = document.getElementById("resultado");

    const numeros = numerosInput.split(',').map(Number);

    resultado.innerHTML = '';

    numeros.forEach(numero => {
        const elementoResultado = document.createElement('div');

        if (isNaN(numero) || !Number.isInteger(numero)) {
            elementoResultado.classList.add("error");
            elementoResultado.textContent = `${numero} no es un número entero`;
        } else if (numero % 2 === 0) {
            elementoResultado.classList.add("par");
            elementoResultado.textContent = `● ${numero} es número par`;
        } else {
            elementoResultado.classList.add("impar");
            elementoResultado.textContent = `● ${numero} es número impar`;
        }

        resultado.appendChild(elementoResultado);
    });
}