import React from 'react';
import {formatRelative} from "date-fns";
import {ptBR} from "date-fns/locale";

import "./Comment.css";
import imagemUsuario from "/home/marcos/Comment-List/comment-react/public/Profile.png"

const Comment = (props) => {

  return(
    <div className='Comment'>
      <img class="avatar" src={imagemUsuario} alt={props.nome}/>
      <div class='conteudo'>
        <h2 class="nome"> @{props.nome}</h2>
        
        <p class="email"> {props.email}</p>
        
        <p class="mensagem"> {props.children}</p>
        <button onClick={props.onRemove}>&times;</button>
        <p class="data"> {formatRelative(props.data, new Date(),{locale: ptBR} )}</p>
      </div>
    </div>
  )
}

export default Comment;