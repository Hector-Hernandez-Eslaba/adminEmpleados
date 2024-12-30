let empleados = [];

function Trabajador(nombre, apellido1, apellido2, edad, puesto){
    this.nombre = nombre,
    this.apellido1 = apellido1,
    this.apellido2 = apellido2,
    this.edad = edad,
    this.puesto = puesto
}

function enviarDatos(){
    let nombre = document.querySelector("#nombre").value;
    let apellido1 = document.querySelector("#apellido1").value;
    let apellido2 = document.querySelector("#apellido2").value;
    let edad = document.querySelector("#edad").value;
    let puesto = document.querySelector("#puesto").value;

    let trabajadores = new Trabajador(nombre, apellido1, apellido2, edad, puesto);
    empleados.push(trabajadores)
    
    alert("Se Capturaron las datos correctamente");
    
    limpiarDatos();

}

const obrero = document.querySelector(".boxCards");
console.log(obrero);

function mostrarEmpleados(){
    const masterCard = document.createElement("div")
    masterCard.className = "masterCard"
    masterCard.innerHTML = `
    <img class="imgCard" src="Imagenes/Imagen.png" alt="imagenCard">
    `
    const textCard = document.createElement("div");
    
    for(let arrayEmpleados of empleados){
        for(let mostrarTrabajadores in arrayEmpleados){
            
            const obreroCard = document.createElement("p")
            obreroCard.innerText = mostrarTrabajadores + ": " + arrayEmpleados[mostrarTrabajadores];

            console.log(mostrarTrabajadores)
            obrero.appendChild(masterCard)
            masterCard.appendChild(textCard);
            textCard.appendChild(obreroCard);            
        }
    }
}

function limpiarDatos(){
    document.querySelector("#nombre").value = "";
    document.querySelector("#apellido1").value = "";
    document.querySelector("#apellido2").value = "";
    document.querySelector("#edad").value = "";
    document.querySelector("#puesto").value = "";
}