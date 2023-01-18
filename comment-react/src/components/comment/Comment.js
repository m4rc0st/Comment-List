import React from 'react';
import "./Comment.css"
// import { Container } from './styles';

const Comment = (props) => {

  return(
    <div className='Comment'>
      <h2>Nome:{props.nome}</h2>
      <p>email: {props.email}</p>
      <p>data: {props.data.toString()}</p>
      <p> mensagem: {props.children}</p>
    </div>
  )
}

export default Comment;