import {React, useState } from 'react'
import Card from './Card'
import {FaTimes} from 'react-icons/fa'

const ComentarioItem = ({ comentario, calificacion, id, handleDelete}) => {

    //manejo del estado de un comentario
    //comentario y calificacion como atributos de comentarioitem
    //mediante el uso de estados.

    const [ comment, setComment ] = useState(comentario)
    const [ rating, setRating] = useState(calificacion)
    const [ identificacion, setIdentificacion] = useState(id)

    const cambiarRating = (identificacion) => {
        setRating((prev) => prev + 1)
    }
    const borrarItem=(identificacion)=>{
        console.log(identificacion)
    }

  return (
    <Card reverse={true}>
        <div className='num-display'>{rating}</div>
        <button onClick={ ()=> handleDelete(identificacion) }
            className='close'
            >
        <FaTimes color='purple'/>
        </button>
        <div className='text-display'>{comment}</div>
    </Card>
  )
}

export default ComentarioItem