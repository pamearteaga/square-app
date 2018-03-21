import React, { Component } from 'react';
import './BotonPago.css';

class BotonPago extends Component{
  render() {
    return(
      <div className="Pago">
        <button>Cobrar $0</button> 
      </div>
    );
  }
}

export default BotonPago;