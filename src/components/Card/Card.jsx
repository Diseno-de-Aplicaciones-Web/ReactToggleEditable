import { useState } from "react"
import style from "./Card.module.css"

function Card({editable=false, contenido, setContenido}){

    const [ editando, setEditando ] = useState(false)

    function manejadorInput(evento){
        setContenido(evento.target.value)
    }

    function manejadorClick() {
        if (editable) setEditando(!editando)
    }

    return (
        <div className={style.wrapper}>
            <textarea className={style.texto} value={contenido} disabled={!editando} onInput={manejadorInput}/>
            {
                editable &&
                <button className={style.boton} onClick={manejadorClick}>
                    {editando ? "Terminar" : "Editar"}
                </button>
            }
        </div>
    )
}

export default Card