export function agregarUsuario(usuario) {
    const nuevoId = usuarios.length + 1;
    const nuevoUsuario = { id: nuevoId.toString(), ...usuario };
    usuarios.push(nuevoUsuario);
}

export let usuarios = [
    {
        "id":"1",
        "nombre":"tomas",
        "cargo":"recursos humanos",
        "password":"1234"
    },
    {
        "id":"2",
        "nombre":"diana",
        "cargo":"operario",
        "password":"1234"
    }
]
export function agregarTarea(tarea) {
    const nuevoId = tareas.length + 1;
    const nuevaTarea = { id: nuevoId.toString(), ...tarea };
    tareas.push(nuevaTarea);
}

export let tareas = [
    {
        "idUsuario":"1",
        "id":"1",
        "nombre":"revisar documentos",
        "descripcion":"inspecionar si hay algun fallo en la redaccion de los documentos"
    },
    {
        "idUsuario":"2",
        "id":"2",
        "nombre":"ir donde el supervisor",
        "descripcion":"ir donde el supervisor marcos en el 3 piso antes de salir del horario laboral"
    }
]

