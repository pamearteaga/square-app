import React, { Component } from 'react';

class Caja extends Component{
  render() {
    return(
      <div id="btnCa" className="Caja hidden">
        <div id="total"><h1>$<span id="sumaTotal">0</span></h1><p>Total recaudado</p></div>
        <div id="ventas"><h1><span id="sumaVentas">0</span></h1><p>Cantidad de ventas</p></div>
      </div>
    );
  }
}

export default Caja;