import { agregarTarea } from "../services/apiFake"


export default function ContenedorTareas (){
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const crearTarea = (e) => {
        e.preventDefault();
        if (!nombre || !descripcion ) {
            alert("verifica los espacios en blanco")
            return;
        } else {
            const tarea = { nombre, descripcion };
            agregarTarea(tarea);
        }
    };
    return(
        <div className="contenedorTareas">
            nom
        </div>
    )
}