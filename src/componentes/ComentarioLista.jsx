import React from 'react';
import ComentarioItem from './ComentarioItem'; // Asegúrate de que el nombre sea correcto

function ComentarioLista({ comments, handleDelete }) {
  if (!comments || comments.length === 0) {
    return <p>No hay comentarios</p>;
  }

  return (
    <div className='comments'>
      <ul>
        {comments.map((comentario) => (
          <ComentarioItem
            key={comentario.id}
            comentario={comentario.comentario}
            calificacion={comentario.calificacion}
            id={comentario.id}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default ComentarioLista;
