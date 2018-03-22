import React, { Component } from 'react';
import Articulos from './Articulos/Articulos.js';
import Teclado from './Teclado/Teclado.js';
import './Opciones.css';

class Opciones extends Component{

  handleTe = (event) => {
    const Ar = document.getElementById('btnAr');
    const Te = document.getElementById('btnTe');
    Ar.classList.add('hidden');
    Te.classList.remove('hidden');
  }
  handleAr = (event) => {
    const Ar = document.getElementById('btnAr');
    const Te = document.getElementById('btnTe');
    Ar.classList.remove('hidden');
    Te.classList.add('hidden');
  }
  render() {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-4"><button id="articulos" onClick={this.handleAr}>Catálogo</button></div>
          <div className="col-xs-4"><button id="teclado" onClick={this.handleTe}>Teclado</button></div>
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