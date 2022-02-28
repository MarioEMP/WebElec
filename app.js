window.onresize = reSize

function reSize() {

    window.location.reload();

}

let inicio = document.getElementById("inicio");
let contacto = document.getElementById("contacto");
let servicios = document.getElementById("servicios");
let empleados = document.getElementById("empleados");
let empresa = document.getElementById("empresa");


function mostrarInicio() {

    if (inicio.style.display == "none") {
        [inicio.style.display = "block"] +
            [empresa.style.display = "block"] +
            [servicios.style.display = "none"] +
            [empleados.style.display = "none"] +
            [contacto.style.display = "none"];
    }
}


function mostrarContacto() {

    if (contacto.style.display == "none") {
        [contacto.style.display = "block"] +
            [servicios.style.display = "none"] +
            [empleados.style.display = "none"] +
            [empresa.style.display = "none"] +
            [inicio.style.display = "none"];
    }
}

function mostrarServicios() {

    if (servicios.style.display == "none" && window.innerWidth > 1130) {
        [servicios.style.display = "flex"] +
            [contacto.style.display = "none"] +
            [empleados.style.display = "none"] +
            [empresa.style.display = "none"] +
            [inicio.style.display = "none"];
    } else if (servicios.style.display == "none" && window.innerWidth < 1130) {
        [servicios.style.display = "block"] +
            [contacto.style.display = "none"] +
            [empleados.style.display = "none"] +
            [empresa.style.display = "none"] +
            [inicio.style.display = "none"];
    }
}


function mostrarEmpleados() {

    if (empleados.style.display == "none") {
        [empleados.style.display = "block"] +
            [contacto.style.display = "none"] +
            [servicios.style.display = "none"] +
            [empresa.style.display = "none"] +
            [inicio.style.display = "none"];
    }
}

function mostrarEmpresa() {

    if (empresa.style.display == "none") {
        [empresa.style.display = "block"] +
            [contacto.style.display = "none"] +
            [servicios.style.display = "none"] +
            [empleados.style.display = "none"] +
            [inicio.style.display = "none"];
    }
}


