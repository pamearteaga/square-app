import React, { Component } from 'react';
import Articulos from './Articulos/Articulos.js';
import Teclado from './Teclado/Teclado.js';
import Caja from './Caja/Caja.js';
import './Opciones.css';

class Opciones extends Component{

  handleTe = (event) => {
    const Ar = document.getElementById('btnAr');
    const Te = document.getElementById('btnTe');
    const Ca = document.getElementById('btnCa');
    Ar.classList.add('hidden');
    Ca.classList.add('hidden');
    Te.classList.remove('hidden');
  }
  handleAr = (event) => {
    const Ar = document.getElementById('btnAr');
    const Te = document.getElementById('btnTe');
    const Ca = document.getElementById('btnCa');
    Te.classList.add('hidden');
    Ca.classList.add('hidden');
    Ar.classList.remove('hidden');
  }
   handleCa = (event) => {
    const Ar = document.getElementById('btnAr');
    const Te = document.getElementById('btnTe');
    const Ca = document.getElementById('btnCa');
    Te.classList.add('hidden');
    Ar.classList.add('hidden');
    Ca.classList.remove('hidden');
  }
  render() {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-4"><button id="articulos" onClick={this.handleAr}>Inventario</button></div>
          <div className="col-xs-4"><button id="teclado" onClick={this.handleTe}>Teclado</button></div>
          <div className="col-xs-4"><button id="caja" onClick={this.handleCa}>Caja</button></div> 
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