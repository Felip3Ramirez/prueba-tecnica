import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { usuarios } from '../services/apiFake';
import { generarToken } from "../helpers/funcione";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function buscarUsuario() {
        let user = usuarios.find((item) => username === item.nombre && password === item.password);
        return user;
    }

    const validarInicioSesion = (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert("verifica los espacios en blanco");
            return;
        } else {
            const user = buscarUsuario();
            if (user) {
                let tokenAcceso = generarToken();
                localStorage.setItem("token", tokenAcceso);
                localStorage.setItem("usuario", JSON.stringify(user));
                navigate('/tareas');
            } else {
                alert("Usuario o contraseña incorrectos");
                navigate('/registro');
            }
        }
    };

    return (
        <div className="contenedorRegistro">
            <div className="formularioRegistro">
                <h1>Login</h1>

                <form className="formulario">
                    <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Nombre" required />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Contraseña" required />
                    <button type="button" onClick={validarInicioSesion}>Iniciar Sesion</button>
                </form>
                <Link to="/">Cancelar</Link>
                <Link to="/registro">Aun no tienes cuenta? Registrate !</Link>
            </div>
        </div>
    )
}
