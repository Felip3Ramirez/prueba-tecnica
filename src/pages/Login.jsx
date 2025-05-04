import { useState } from "react";
import { useNavigate,Link  } from 'react-router-dom';

export default function Login() {
    const [nombre, setNombre] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    return (
        <div className="contenedorRegistro">
            <div className="formularioRegistro">
                <h1>Login</h1>

                <form className="formulario" action="">
                    <input onChange={(e) => setNombre(e.target.value)} type="text" placeholder="Nombre" />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Contraseña" />
                    <button >Iniciar Sesion</button>

                </form>
                <Link to="/">Cancelar</Link>
                <Link to="/registro">Aun no tienes cuenta? Registrate !</Link>
            </div>
            
        </div>
    )
}