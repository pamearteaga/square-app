import React, { Component } from 'react';
import './Teclado.css';


class Teclado extends Component{

  tecla1 = (event) => {
    const btn = document.getElementById('totalCompra');
    const btnInner = document.getElementById('totalCompra').innerHTML;
    const operacion = document.getElementById('operacion');
    const operacionInner = document.getElementById('operacion').innerHTML;

    if (operacionInner === "0" ) {
         operacion.innerHTML = "1";
         btn.innerHTML = "1";
    } else {
       operacion.innerHTML = operacionInner + "1";
       btn.innerHTML = btnInner + "1";
    }
  }
  tecla2 = (event) => {
    const btn = document.getElementById('totalCompra');
    const btnInner = document.getElementById('totalCompra').innerHTML;
    const operacion = document.getElementById('operacion');
    const operacionInner = document.getElementById('operacion').innerHTML;

    if (operacionInner === "0" ) {
         operacion.innerHTML = "2";
         btn.innerHTML = "2";
    } else {
       operacion.innerHTML = operacionInner + "2";
       btn.innerHTML = btnInner + "2";
    }
  }
  tecla3 = (event) => {
    const btn = document.getElementById('totalCompra');
    const btnInner = document.getElementById('totalCompra').innerHTML;
    const operacion = document.getElementById('operacion');
    const operacionInner = document.getElementById('operacion').innerHTML;

    if (operacionInner === "0" ) {
         operacion.innerHTML = "3";
         btn.innerHTML = "3";
    } else {
       operacion.innerHTML = operacionInner + "3";
       btn.innerHTML = btnInner + "3";
    }
  }
  tecla4 = (event) => {
    const btn = document.getElementById('totalCompra');
    const btnInner = document.getElementById('totalCompra').innerHTML;
    const operacion = document.getElementById('operacion');
    const operacionInner = document.getElementById('operacion').innerHTML;

    if (operacionInner === "0" ) {
         operacion.innerHTML = "4";
         btn.innerHTML = "4";
    } else {
       operacion.innerHTML = operacionInner + "4";
       btn.innerHTML = btnInner + "4";
    }
  }
  tecla5 = (event) => {
    const btn = document.getElementById('totalCompra');
    const btnInner = document.getElementById('totalCompra').innerHTML;
    const operacion = document.getElementById('operacion');
    const operacionInner = document.getElementById('operacion').innerHTML;

    if (operacionInner === "0" ) {
         operacion.innerHTML = "5";
         btn.innerHTML = "5";
    } else {
       operacion.innerHTML = operacionInner + "5";
       btn.innerHTML = btnInner + "5";
    }
  }
  tecla6 = (event) => {
    const btn = document.getElementById('totalCompra');
    const btnInner = document.getElementById('totalCompra').innerHTML;
    const operacion = document.getElementById('operacion');
    const operacionInner = document.getElementById('operacion').innerHTML;

    if (operacionInner === "0" ) {
         operacion.innerHTML = "6";
         btn.innerHTML = "6";
    } else {
       operacion.innerHTML = operacionInner + "6";
       btn.innerHTML = btnInner + "6";
    }
  }
  tecla7 = (event) => {
    const btn = document.getElementById('totalCompra');
    const btnInner = document.getElementById('totalCompra').innerHTML;
    const operacion = document.getElementById('operacion');
    const operacionInner = document.getElementById('operacion').innerHTML;

    if (operacionInner === "0" ) {
         operacion.innerHTML = "7";
         btn.innerHTML = "7";
    } else {
       operacion.innerHTML = operacionInner + "7";
       btn.innerHTML = btnInner + "7";
    }
  }
  tecla8 = (event) => {
    const btn = document.getElementById('totalCompra');
    const btnInner = document.getElementById('totalCompra').innerHTML;
    const operacion = document.getElementById('operacion');
    const operacionInner = document.getElementById('operacion').innerHTML;

    if (operacionInner === "0" ) {
         operacion.innerHTML = "8";
         btn.innerHTML = "8";
    } else {
       operacion.innerHTML = operacionInner + "8";
       btn.innerHTML = btnInner + "8";
    }
  }
  tecla9 = (event) => {
    const btn = document.getElementById('totalCompra');
    const btnInner = document.getElementById('totalCompra').innerHTML;
    const operacion = document.getElementById('operacion');
    const operacionInner = document.getElementById('operacion').innerHTML;

    if (operacionInner === "0" ) {
         operacion.innerHTML = "9";
         btn.innerHTML = "9";
    } else {
       operacion.innerHTML = operacionInner + "9";
       btn.innerHTML = btnInner + "9";
    }
  }
  tecla0 = (event) => {
    const btn = document.getElementById('totalCompra');
    const btnInner = document.getElementById('totalCompra').innerHTML;
    const operacion = document.getElementById('operacion');
    const operacionInner = document.getElementById('operacion').innerHTML;

    if (operacionInner === "0" ) {
         operacion.innerHTML = "0";
         btn.innerHTML = "0";
    } else {
       operacion.innerHTML = operacionInner + "0";
       btn.innerHTML = btnInner + "0";
    }
  }
  teclaBorrar = (event) => {
    const btn = document.getElementById('totalCompra');
    const operacion = document.getElementById('operacion');
    operacion.innerHTML = "0";
    btn.innerHTML = "0";
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
        <div className="col-xs-4" onClick={this.tecla2}>
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