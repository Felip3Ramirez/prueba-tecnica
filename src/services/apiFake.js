export function agregarUsuario(usuario){
    const nuevoId = usuarios.length + 1
    const nuevoUsuario = {id:nuevoId.toString(), ...usuario}
    usuarios.push(nuevoUsuario);

}
let usuarios=[
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


let tareas=[
    {
        "id":"1",
        "nombre":"revisar documentos",
        "descripcion":"inspecionar si hay algun fallo en la redaccion de los documentos"
    },
    {
        "id":"2",
        "nombre":"ir donde el supervisor",
        "descripcion":"ir antes donde el supervisor marcos en el 3 piso antes de salir del horario laboral"
    }
]
