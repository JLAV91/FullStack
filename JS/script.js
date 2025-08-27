
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");

function crearTexto(){
    const textoNombre = document.createElement("h1");
    textoNombre.textContent = nombre.value;
    const textoApellido = document.createElement("h1");
    textoApellido.textContent = apellido.value;
    document.body.appendChild(textoNombre);
    document.body.appendChild(textoApellido);

}