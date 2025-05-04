
import { Link } from "react-router-dom";

export default function ContenedorTareas() {
    function cerrarSesion() {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
    }
    return (
        <div className="paginaTareas">
            <div className="cabeceraTareas">
                <h1>BIENVENIDO :</h1>
                <h3>AGREGA UNA TAREA    </h3>
                <Link className="link" onClick={cerrarSesion} to="/">Cerrar sesion</Link>
            </div>
            <div className="contenedorTareas">
                
            </div>
        </div>

    );
}