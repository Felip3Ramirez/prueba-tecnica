import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { usuarios } from '../services/apiFake';
import { generarToken } from "../helpers/funcione";
export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const validarInicioSesion = (e, username, password) => {
        e.preventDefault();
        if (!username || !password) {
            alert("verifica los espacios en blanco")
            return;
        } else {
            let tokenAcceso = generarToken();
            localStorage.setItem("token", tokenAcceso);
            const user = usuarios.find(
                (user) => user.nombre === username && user.password === password
            );
            if (user) {
                navigate('/tareas');
            } else {
                navigate('/registro');
            }
        }

    };

    return (
        <div className="contenedorRegistro">
            <div className="formularioRegistro">
                <h1>Login</h1>

                <form className="formulario" action="">
                    <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Nombre" required />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Contraseña" required />
                    <button type="button" onClick={(e) => validarInicioSesion(e, username, password)}>Iniciar Sesion</button>

                </form>
                <Link to="/">Cancelar</Link>
                <Link to="/registro">Aun no tienes cuenta? Registrate !</Link>
            </div>

        </div>
    )
}