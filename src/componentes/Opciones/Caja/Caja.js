import React, { Component } from 'react';

class Caja extends Component{
  render() {
    return(
      <div id="btnCa" className="Caja hidden">
        <div id="total"><h1>$<span id="sumaTotal">0</span></h1><span>Total recaudado</span></div>
        <div id="ventas"><h1><span id="sumaVentas">0</span></h1><span>Cantidad de ventas</span></div>
      </div>
    );
  }
}

export default Caja;