import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Sobre extends Component {
    render(){
        return (
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Página de Sobre</h1>
            </header>
            <p className="App-intro">
                Exemplo de página Sobre :)
            </p>
            </div>
        );
    }
}

export default Sobre;
