import React, { Component } from 'react';
import './Teclado.css';


class Teclado extends Component{

  tecla1 = (event) => {
    const btn = document.getElementById('totalCompra').innerHTML;
    const operacion= document.getElementById('operacion');
    operacion.innerHTML = + "1";
  }

  
  render() {
    return(
      <div id="btnTe" className="Teclado hidden">
        <div className="col-xs-12">
          <h1>$<span id="operacion">0</span></h1>
        </div>
        <div className="col-xs-4" onClick={this.tecla1}>
          <h1 id="1">1</h1>
        </div>
        <div className="col-xs-4 tecla">
          <h1 id="2">2</h1>
        </div>
        <div className="col-xs-4 tecla">
          <h1 id="3">3</h1>
        </div>

        <div className="col-xs-4 tecla">
          <h1 id="4">4</h1>
        </div>
        <div className="col-xs-4 tecla">
          <h1 id="5">5</h1>
        </div>
        <div className="col-xs-4 tecla">
          <h1 id="6">6</h1>
        </div>

        <div className="col-xs-4 tecla">
          <h1 id="7">7</h1>
        </div>
        <div className="col-xs-4 tecla">
          <h1 id="8">8</h1>
        </div>
        <div className="col-xs-4 tecla">
          <h1 id="9">9</h1>
        </div>

        <div className="col-xs-4 tecla">
          <h1 id="c">C</h1>
        </div>
        <div className="col-xs-4 tecla">
          <h1 id="0">0</h1>
        </div>
        <div className="col-xs-4 tecla">
          <h1 id="suma">+</h1>
        </div>
      </div>
    );
  }
}

export default Teclado;