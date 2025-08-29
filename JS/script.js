const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");

let texto;

if (edad <= 0) {
    texto = "Ingrese una edad valida"
} else if (edad < 18) {
    texto = "Es menor de edad"
} else if (edad < 65) {
    texto = "Persona es mayor de edad"

} else if (edad < 85) {
    texto = "Persona es adulto mayor"
} else {
    texto = "Persona es de años dorados"
}


function crearTexto() {
    const textoEdad = document.createElement("h1");
    textoEdad.textContent = texto;
    document.body.appendChild(textoEdad);

}