let empleados = [];

function Trabajador(nombre, apellido1, apellido2, anios, puesto){
    this.nombre = nombre,
    this.apellido1 = apellido1,
    this.apellido2 = apellido2,
    this.anios = anios,
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
    console.log(trabajadores)

}

const obrero = document.querySelector(".boxCards");
console.log(obrero);

function mostrarEmpleados(){
    for(let arrayEmpleados of empleados){
        for(let mostrarTrabajadores in arrayEmpleados){

            let obreroCard = document.createElement("p")
            obreroCard.innerText = arrayEmpleados.nombre

            obrero.appendChild(obreroCard);
            //alert(mostrarTrabajadores + arrayEmpleados[mostrarTrabajadores])

        }
    }
}

