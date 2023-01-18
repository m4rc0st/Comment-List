import React, { Component } from 'react';
import './App.css';
import Comment from './components/comment/Comment';

class App extends Component {
  
  state = {
    comentarios: [
      {
        nome: 'João',
        email: 'joaoalgo@email.com',
        data: new Date(2023,2,19),
        mensagem: 'Lá eleeeee'
      },
      {
        nome: 'Maira',
        email: 'maira@email.com',
        data: new Date(2023,2,22),
        mensagem: 'Vixx'
      
      }
    ],
    novoComentario:{
      nome: '',
      email: '',
      data: new Date(),
      mensagem: ''
    }
  }

  addComentario = (evento) =>{
    evento.preventDefault();
    const novoComentario = {...this.state.novoComentario, data: new Date()}
    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: {nome:'', email:'', mensagem:''}
    })
  }

  preenchimento = (evento) =>{
    const {name, value} = evento.target;
    this.setState({
      novoComentario: {...this.state.novoComentario, [name]: value}
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Meu projeto</h1>

        {this.state.comentarios.map((comentario, indice) => (
          <Comment 
          key={indice}
          nome={comentario.nome}
          email={comentario.email}
          data={comentario.data}>
          {comentario.mensagem}
          </Comment>
        ))}

        <form method="post" onSubmit={this.addComentario}>
          <h2>Adicionar um comentario</h2>
          <div>
            <input 
            type="text" 
            name="nome"
            value={this.state.novoComentario.nome}
            onChange={this.preenchimento}
            placeholder='Digite seu nome'></input>
          </div>
          <div>
            <input 
            type="email" 
            name="email"
            value={this.state.novoComentario.email}
            onChange={this.preenchimento}
            placeholder='Digite seu email'></input>
          </div>
          <div>
            <textarea 
            name="mensagem" 
            value={this.state.novoComentario.mensagem}
            onChange={this.preenchimento}
            rows="4" />
          </div>
          <button type='submit'>Adicionar um comentário!</button>
        </form>
      </div>
    )
  }
}

export default App;

//       
