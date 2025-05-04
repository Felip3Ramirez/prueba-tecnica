import RutaProtegida from "../components/RutaProtegida";
import ContenedorPrincipal from "../pages/ContenedorPrincipal";
import ContenedorTareas from "../pages/ContenedorTareas";
import Login from "../pages/Login";
import Registro from "../pages/Registro";

export let enrutador = [
    {
        path: '/registro',
        element: <Registro/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/tareas',
        element: <RutaProtegida proteger={<ContenedorTareas/>}></RutaProtegida>
    },
    {
        path: '/',
        element: <ContenedorPrincipal/>
    }
]