import { Link } from 'react-router-dom';
export default function ContenedorPrincipal() {
    return (
        <div className="contenedorPrincipal">
            <h1>Gestor de tareas internas</h1>
            <div className='contenedorBotones'>
                <Link className='link' to="/registro">REGISTRO</Link>
                <Link  className='link' to="/tareas">TAREAS</Link>
            </div>
        </div>
    );
}