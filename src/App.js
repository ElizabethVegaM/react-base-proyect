import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer'

class App extends Component {
  render() {
    const names = ['Ismary', 'Ely', 'Violeta', 'Adriana', 'Marcia'];
    return (
      <div>
        <h1 className="algo">Abajo Angular</h1>
        <ul>
          {
            names.map(element => <li>{element}</li>)
          }
        </ul>
        <Footer />
      </div>
    );
  }
}

export default App;
