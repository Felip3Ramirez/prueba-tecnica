import { useState } from "react";
import { tareas } from "../services/apiFake";

export default function MostrarTareas() {
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    const tareasUsuario = tareas.filter(tarea => tarea.idUsuario === usuario.id);
    const [tareasCompletadas, setTareasCompletadas] = useState([]);
    const [tareasEnProgreso, setTareasEnProgreso] = useState([]);
    const completarTarea = (id) => {
        if (tareasCompletadas.includes(id)) {
            setTareasCompletadas(tareasCompletadas.filter(tareaId => tareaId !== id));
        } else {
            setTareasCompletadas([...tareasCompletadas, id]);
            setTareasEnProgreso(tareasEnProgreso.filter(tareaId => tareaId !== id));
        }
    }
    const tareaProgreso = (id) => {
        if (tareasEnProgreso.includes(id)) {
            setTareasEnProgreso(tareasEnProgreso.filter(tareaId => tareaId !== id));
        } else {
            setTareasEnProgreso([...tareasEnProgreso, id]);
            setTareasCompletadas(tareasCompletadas.filter(tareaId => tareaId !== id));
        }
    }
    return (
        <section className="tarjetaTarea">
            <h2>Lista de Tareas</h2>

            {tareasUsuario.length > 0 ? (
                <ul className="tarea">
                    {tareasUsuario.map((tarea) => {
                        let backgroundColor = "";
                        if (tareasCompletadas.includes(tarea.id)) {
                            backgroundColor = 'green';
                        } else if (tareasEnProgreso.includes(tarea.id)) {
                            backgroundColor = 'red';
                        }
                        return (
                            <div className="tareaAgregada" key={tarea.id} style={{ backgroundColor }}>
                                <article>
                                    <h3>{tarea.nombre}</h3>
                                    <p>{tarea.descripcion}</p>
                                    <div className="acciones">
                                        <button type="button" onClick={() => completarTarea(tarea.id)}>
                                            Completada
                                        </button>
                                        <button type="button" onClick={() => tareaProgreso(tarea.id)}>
                                            En Progreso
                                        </button>
                                    </div>
                                </article>
                            </div>
                        );
                    })}
                </ul>
            ) : (
                <p>No hay tareas para mostrar.</p>
            )}
        </section>
    );
}
