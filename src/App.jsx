import React, { useState } from 'react';
import Header from './componentes/Header';
import comentarios from './data/Comentarios';
import ComentarioLista from './componentes/ComentarioLista';
import Card from './componentes/Card';
import ComentarioStats from './componentes/ComentarioStats';
import ComentarioForm from './componentes/ComentarioForm';

function App() {
  const [comments, setComments] = useState(comentarios);

  const borrarItem = id => {
    if (window.confirm("¿Estás seguro de borrar este comentario?")) {
      // asignar nuevo estado a comments
      // filter: para quitar los comentarios
      // cuyo id concuerde con el parametro
      setComments(comments.filter((c)=> c.id !== id ))
    }
  };

  const titulo = "App de comentarios";
  const Autor = "Richard Sanchez";
  const Ficha = "2902093";
  const Centro = "CGMLTI";

  const loading = false;
  if (loading) return <h1>Cargando comentarios...</h1>;

  const addComentario = (newComentario) => {
    setComments((prevComments) => {
        // Verificar si el comentario ya existe en la lista
        if (prevComments.includes(newComentario)) {
            // Si existe, lo eliminamos
            return prevComments.filter(comentario => comentario !== newComentario);
        } else {
            // Si no existe, lo agregamos
            return [...prevComments, newComentario];
        }
    });
};


  return (
    <div 
    className='container'>
      <Header 
      titulo={titulo}  autor={Autor} ficha={Ficha} centro={Centro}/>
      <ComentarioForm 
      handleAdd={ addComentario }/>
      <ComentarioStats 
      comentarios={comments}/>
      <ComentarioLista 
      comments={comments} 
      handleDelete={borrarItem} />
      <Card reverse={true}>
        <p>Hola</p>
      </Card>
    </div>
  )
}

export default App;
