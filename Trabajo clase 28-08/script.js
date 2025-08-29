
const email = document.getElementById("email");
const contraseña = document.getElementById("contraseña");


function crearTexto() {
    if (email.value != "alumno@duoc.cl") {
        alert("Correo invalido")
    }
    if (contraseña.value != "123456") {
        alert("contraseña invalido")
    }

}