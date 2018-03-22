import React, { Component } from 'react';
import Articulos from './Articulos/Articulos.js';
import Teclado from './Teclado/Teclado.js';
import './Opciones.css';

class Opciones extends Component{
  render() {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-4"><button id="articulos">Articulos</button></div>
          <div className="col-xs-4"><button id="teclado">Teclado</button></div>
          <div className="col-xs-4"><button id="caja">Caja</button></div> 
        </div>

        <div id="main">
          <div>
          <Articulos/>
          <Teclado/>
          </div>
        </div> 

      </div>
    );
  }
}

export default Opciones;