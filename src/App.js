import React, { Component } from 'react';
import './App.css';
import Title from './components/Title/Title';
import Formulario from './components/Formulario/Formulario';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hola antiguo</h1>
        <Title nombre="Ely"/>
        <Formulario />
      </div>
    );
  }
}

export default App;
