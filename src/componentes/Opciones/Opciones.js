import React, { Component } from 'react';
import Articulos from './Articulos/Articulos.js';
import Teclado from './Teclado/Teclado.js';
import Caja from './Caja/Caja.js';
import './Opciones.css';

class Opciones extends Component{


  handleAr = (event) => {
    document.getElementById('btnAr').classList.remove('hidden');
    document.getElementById('btnCa').classList.add('hidden');
    document.getElementById('btnTe').classList.add('hidden');
    document.getElementById('articulos').classList.add('btnActivo');
    document.getElementById('teclado').classList.remove('btnActivo');
    document.getElementById('teclado').classList.add('btnInactivo');
    document.getElementById('caja').classList.remove('btnActivo');
    document.getElementById('caja').classList.add('btnInactivo');
  }

  handleTe = (event) => {
    document.getElementById('btnAr').classList.add('hidden');
    document.getElementById('btnCa').classList.add('hidden');
    document.getElementById('btnTe').classList.remove('hidden');
    document.getElementById('teclado').classList.add('btnActivo');
    document.getElementById('articulos').classList.remove('btnActivo');
    document.getElementById('articulos').classList.add('btnInactivo');
    document.getElementById('caja').classList.remove('btnActivo');
    document.getElementById('caja').classList.add('btnInactivo');

  }

   handleCa = (event) => {
    document.getElementById('btnAr').classList.add('hidden');
    document.getElementById('btnCa').classList.remove('hidden');
    document.getElementById('btnTe').classList.add('hidden');
    document.getElementById('caja').classList.add('btnActivo');
    document.getElementById('articulos').classList.remove('btnActivo');
    document.getElementById('articulos').classList.add('btnInactivo');
    document.getElementById('teclado').classList.remove('btnActivo');
    document.getElementById('teclado').classList.add('btnInactivo');
  }
  render() {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-4"><button id="articulos" className="btnActivo" onClick={this.handleAr}>Inventario</button></div>
          <div className="col-xs-4"><button id="teclado" className="btnInactivo" onClick={this.handleTe}>Teclado</button></div>
          <div className="col-xs-4"><button id="caja" className="btnInactivo" onClick={this.handleCa}>Caja</button></div> 
        </div>

        <div id="main">
          <div>
          <Articulos
            stock={this.props.stock}
            img={this.props.img}
            products={this.props.products}
            removeProduct={this.props.removeProduct}
            addProduct={this.props.addProduct}
          />
          <Teclado/>
          <Caja/>
          </div>
        </div> 

      </div>
    );
  }
}

export default Opciones;