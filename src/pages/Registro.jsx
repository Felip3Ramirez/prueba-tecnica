import { useState } from "react";
import { useNavigate,Link  } from 'react-router-dom';


export default function Registro() {
    const [nombre, setNombre] = useState("");
    const [cargo, setCargo] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    return (
        <div className="contenedorRegistro">
            <div className="formularioRegistro">
                <h1>Registrese</h1>

                <form className="formulario" action="">
                    <input onChange={(e) => setNombre(e.target.value)} type="text" placeholder="Nombre" />
                    <input onChange={(e) => setCargo(e.target.value)} type="text" placeholder="Cargo" />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Contraseña" />
                    <button onClick={(e) => crearUsuario(e)}>Registrarme</button>

                </form>
                <Link to="/">Cancelar</Link>
                <Link to="/login">Ya tienes cuenta? Inicia sesion !</Link>
            </div>
            
        </div>
    );
}