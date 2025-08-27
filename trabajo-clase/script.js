
// let edadUsuario;
// edadUsuario = prompt("Ingrese la edad")

// if (edadUsuario <= 0) {
//     edadUsuario = prompt("Ingrese una edad valida")
// } else if (edadUsuario < 18) {
//     alert("Es menor de edad")
// } else if (edadUsuario < 65) {
//     alert("Persona es mayor de edad")

// } else if (edadUsuario < 85) {
//     alert("Persona es adulto mayor")
// } else {
//     alert("Persona es de años dorados")
// }

const buttonSaludo = document.createElement("button");
buttonSaludo.textContent = "Saludar JS";
buttonSaludo.addEventListener("click", ()=>{
    alert("Hola, saludos desde JS");
})

document.body.appendChild(buttonSaludo);

document.addEventListener("DOMContentLoaded", () => {
    console.log("El DOM ha sido cargado");
});

function crearBoton(){
    const buttonSaludo = document.createElement("button");
    buttonSaludo.textContent = "Saludar JS";
    buttonSaludo.addEventListener("click", ()=>{
        alert("Hola, saludos desde JS");
    })
    
    document.body.appendChild(buttonSaludo);
}