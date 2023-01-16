import React, { Component } from 'react';
import './App.css';
import Comment from './components/comment/Comment';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Meu projeto</h1>
        <Comment nome="Maira" email="algo@gmail.com" data={new Date(2023,2,21)}>
          Como vai?
        </Comment>
      </div>
    )
  }
}

export default App;
