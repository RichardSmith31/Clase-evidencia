import React, { useState } from 'react';
import Card from './Card';
import ComentarioCalificacion from './ComentarioCalificacion';

const ComentarioForm = ({ handleAdd }) => {  // Desestructurar props

    const [text, setText] = useState('');
    const [calificacion, setCalificacion] = useState('0');

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Crear el objeto comentario
        const newComentario = {
            comentario: text,
            calificacion: parseInt(calificacion)  // Asegúrate de que la calificación sea un número
        };
        handleAdd(newComentario);
        setText(''); // Limpiar el campo de texto después de enviar
        setCalificacion('0'); // Resetear calificación
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <ComentarioCalificacion select={(calificacion) => setCalificacion(calificacion)} />
                <div className='input-group'>
                    <input 
                        type='text' 
                        value={text}
                        onChange={handleTextChange}
                        placeholder='Ingrese su comentario' 
                    />
                    <button type='submit'>Guardar</button>
                </div>
            </form>
        </Card>
    );
};

export default ComentarioForm;
