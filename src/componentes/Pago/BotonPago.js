import React, { Component } from 'react';
import './BotonPago.css';

class BotonPago extends Component{
  handleCobrar = (event) => {
    const btn = parseInt(document.getElementById('totalCompra').innerHTML);
    document.getElementById('totalCompra').innerHTML = 0;
    const total = parseInt(document.getElementById('sumaTotal').innerHTML);
    const ventas = parseInt(document.getElementById('sumaVentas').innerHTML);
    const btnTotal = btn + total;
    const btnVentas = ventas + 1;
    
    document.getElementById('sumaTotal').innerHTML = btnTotal;
    document.getElementById('sumaVentas').innerHTML = btnVentas;

    if (btn === 0) {
      document.getElementById('sumaVentas').innerHTML = 0;
    }
  }
  render() {
    return(
      <div className="Pago">
        <button id="cobrar" onClick={this.handleCobrar}>Cobrar $<span id="totalCompra">0</span></button> 
      </div>
    );
  }
}

export default BotonPago;