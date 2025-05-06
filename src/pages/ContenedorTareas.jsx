import { Link } from "react-router-dom";
import CrearTareas from "../components/CrearTarea";
import MostrarTareas from "../components/MostrarTareas";

import { useState } from "react";

export default function ContenedorTareas() {
    let usuario = JSON.parse(localStorage.getItem("usuario"));

    function cerrarSesion() {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
    }

    return (
        <div className="paginaTareas">
            <div className="cabeceraTareas">
                <h1>BIENVENID@ : {usuario.nombre}</h1>
                <Link className="link" onClick={cerrarSesion} to="/">Cerrar sesion</Link>
            </div>
            <div className="">
                <h2>AGREGA UNA TAREA</h2>
                <CrearTareas />
            </div>
        </div>
    );
}
