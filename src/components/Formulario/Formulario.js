import React, { Component } from 'react';

class Formulario extends Component {
  constructor() {
    super();

    this.state = {
      nombre: ''
    }
  }

  render() {
    return(
      <div>
        <input type="text" onChange={this.actualizar.bind(this)}/>
        <button onClick={this.saludar.bind(this)}>Saludar</button>
      </div>
    )
  }

  saludar() {
    alert('Hola ' + this.state.nombre);
  }

  actualizar(evento) {
    this.setState({
      nombre: evento.target.value
    })
  }
}

export default Formulario;