import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { agregarUsuario } from '../services/apiFake';


export default function Registro() {
    const [nombre, setNombre] = useState("");
    const [cargo, setCargo] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const crearUsuario = (e) => {
        e.preventDefault();
        if (!nombre || !cargo || !password) {
            alert("verifica los espacios en blanco")
            return;
        } else {
            const usuario = { nombre, cargo, password };
            agregarUsuario(usuario);
            navigate("/");
        }
    };
    return (
        <div className="contenedorRegistro">
            <div className="formularioRegistro">
                <h1>Registrese</h1>

                <form className="formulario" action="">
                    <input onChange={(e) => setNombre(e.target.value)} type="text" placeholder="Nombre" required />
                    <input onChange={(e) => setCargo(e.target.value)} type="text" placeholder="Cargo" required />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Contraseña" required />
                    <button onClick={(e) => crearUsuario(e)}>Registrarme</button>

                </form>
                <Link to="/">Cancelar</Link>
                <Link to="/login">Ya tienes cuenta? Inicia sesion !</Link>
            </div>

        </div>
    );
}