import React from 'react';
import "./Comment.css"

const Comment = (props) => {

  return(
    <div className='Comment'>
      <h2>Nome:{props.nome}</h2>
      <p>email: {props.email}</p>
      <p>data: {props.data.toString()}</p>
      <p> mensagem: {props.children}</p>
      <button onClick={props.onRemove}>&times;</button>
    </div>
  )
}

export default Comment;