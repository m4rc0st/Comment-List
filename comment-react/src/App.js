import React, { Component } from 'react';
import './App.css';
import Comment from './components/comment/Comment';

class App extends Component {
  
  state = {
    comentarios: [
      {
        nome: 'João',
        email: 'joaoalgo@email.com',
        data: new Date(2023,0,25, 12, 15, 0),
        mensagem: 'Lá eleeeee'
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

  removerComentario =(comentario) =>{
    let lista = this.state.comentarios;
    lista = lista.filter(c => c !== comentario)
    this.setState({comentarios: lista})
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
        <h1>Assunto do Momento</h1>

        {this.state.comentarios.map((comentario, indice) => (
          <Comment 
          key={indice}
          nome={comentario.nome}
          email={comentario.email}
          data={comentario.data}
          onRemove={this.removerComentario.bind(this, comentario)}>
          {comentario.mensagem}
          </Comment>
        ))}

        <form method="post" onSubmit={this.addComentario} className="NovoComentario">
          <h2>Adicionar um comentario</h2>
          <div>
            <input 
            type="text" 
            name="nome"
            value={this.state.novoComentario.nome}
            required
            onChange={this.preenchimento}
            placeholder='Nome de Usuário'></input>
          </div>
          <div>
            <input 
            type="email" 
            name="email"
            value={this.state.novoComentario.email}
            required
            onChange={this.preenchimento}
            placeholder='Digite seu email'></input>
          </div>
          <div>
            <textarea 
            name="mensagem" 
            value={this.state.novoComentario.mensagem}
            required
            onChange={this.preenchimento}
            rows="3" 
            />
          </div>
          <button type='submit'>Adicionar um comentário!</button>
        </form>
      </div>
    )
  }
}

export default App;

//       
