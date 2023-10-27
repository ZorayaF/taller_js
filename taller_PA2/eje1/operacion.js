function contador(){
    document.getElementById("cantidad").textContent = document.getElementById("caracteres").value.length;
}
document.getElementById("caracteres").addEventListener("input", contador);
