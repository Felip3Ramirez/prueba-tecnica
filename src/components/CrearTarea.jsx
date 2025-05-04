import { useState } from "react";
import { agregarTarea } from "../services/apiFake"

export default function CrearTareas (){
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const crearTarea = (e) => {
        e.preventDefault();
        if (!nombre || !descripcion ) {
            alert("verifica los espacios en blanco")
            return;
        } else {
            const tarea = { nombre, descripcion };
            agregarTarea(tarea);
        }
    };
    return(
        <div className="contenedorTareas">
            <form action="">
            <input onChange={(e) => setNombre(e.target.value)} type="text" placeholder="Nombre tarea"/>
            <input onChange={(e) => setDescripcion(e.target.value)} type="text" placeholder="Descripcion tarea"/>
            <button type="button" onClick={(e)=>crearTarea(e)}>Crear tarea</button>
            </form>
        </div>
    )
}