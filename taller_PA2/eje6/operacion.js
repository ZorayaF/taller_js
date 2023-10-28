function buscarTexto() {
    const texto = document.getElementById("texto").value;
    const busqueda = document.getElementById("busqueda").value;
    const resultado = document.getElementById("resultado");

    if (texto && busqueda) {
        const regex = new RegExp(busqueda, 'g');
        const textoResaltado = texto.replace(regex, match => `<span class="highlight">${match}</span>`);
        resultado.innerHTML = textoResaltado;
    } else {
        resultado.textContent = "Por favor, ingrese un texto y un texto a buscar.";
    }
}