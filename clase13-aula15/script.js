const input = document.getElementById("nuevaTarea");
const boton = document.getElementById("agregarTarea");
const lista = document.getElementById("listaTareas");

// Lista de tareas
boton.addEventListener("click", () => {
    if(input.value.trim() !== "") {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.innerText = input.value; // <li>valor de input</li>

        const botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";

        botonEliminar.addEventListener("click", () => {
            lista.removeChild(nuevaTarea);
        })

        nuevaTarea.appendChild(botonEliminar);
        lista.appendChild(nuevaTarea);

        input.value = ""; // Limpiar el campo de entrada
    } else {
        alert("Por favor, ingresa una tarea.");
    }
})

// Modos de color

const btnModo = document.getElementById("modoBtn");
const body = document.body;

btnModo.addEventListener("click", () => {
    body.classList.toggle("oscuro") // <body class="oscuro">

    if (body.classList.contains("oscuro")) {
        btnModo.innerText = "Activar modo claro";
    } else {
        btnModo.innerText = "Activar modo oscuro";
    }
})

// Lista de usuarios

const usuarios = [
    {nombre: "Juan", edad: 25},
    {nombre: "Ana", edad: 30},
    {nombre: "Pedro", edad: 22},
]

const divUsuarios = document.getElementById("usersContainer");

usuarios.forEach(usuario => {
    const card = document.createElement("div");
    card.classList.add("card");

    const nombre = document.createElement("h3");
    nombre.innerText = usuario.nombre // 1° <h3>Juan</h3>

    const edad = document.createElement("p");
    edad.innerText = `Edad: ${usuario.edad}`;// 1° <p>Edad: 25</p>

    card.appendChild(nombre);
    card.appendChild(edad);
    divUsuarios.appendChild(card);

    console.log("Usuario agregado")
})