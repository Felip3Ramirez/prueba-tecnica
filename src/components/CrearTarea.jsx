import { useState } from "react";
import { agregarTarea } from "../services/apiFake"
import MostrarTareas from "./MostrarTareas";

export default function CrearTareas() {
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const crearTarea = (e) => {
        e.preventDefault();
        if (!nombre || !descripcion) {
            alert("verifica los espacios en blanco")
            return;
        } else {
            let usuario = JSON.parse(localStorage.getItem("usuario"));
            const idUsuario = (usuario.id)
            const tarea = { idUsuario, nombre, descripcion, usuario };
            agregarTarea(tarea);
            setNombre("");
            setDescripcion("");
            console.log(tarea);

        }
    };

    return (
        <div className="contenedorTareas">
            <form action="">
                <input
                    className="inputTarea"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    type="text"
                    placeholder="Nombre tarea"
                />
                <input
                    className="inputTarea"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    type="text"
                    placeholder="Descripcion tarea"
                />
                <button
                    className="botonCrearTarea"
                    type="button"
                    onClick={crearTarea}
                >
                    Crear tarea
                </button>
                <MostrarTareas></MostrarTareas>
            </form>
        </div>
    );
}
