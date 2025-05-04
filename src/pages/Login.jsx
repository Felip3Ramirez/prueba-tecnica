import { useState } from "react";
import { useNavigate,Link  } from 'react-router-dom';
import { usuarios } from '../services/apiFake';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin =  (username, password) => {
        const user = usuarios.find(
            (user) => user.nombre === username && user.password === password
          );
      
          if (user) {
    
            navigate('/tareas');
          } else {
            
            navigate('/registro');
          }
    };

    return (
        <div className="contenedorRegistro">
            <div className="formularioRegistro">
                <h1>Login</h1>

                <form className="formulario" action="">
                    <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Nombre" />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Contraseña" />
                    <button onClick={() => handleLogin(username, password)}>Iniciar Sesion</button>

                </form>
                <Link to="/">Cancelar</Link>
                <Link to="/registro">Aun no tienes cuenta? Registrate !</Link>
            </div>
            
        </div>
    )
}