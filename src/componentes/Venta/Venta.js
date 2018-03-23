import React, { Component } from 'react';

class Venta extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return(
      <div>
        <h2>Venta total del dia</h2>
        <div>{this.props.ventas}</div>
      </div>
    )
  }
}

export default Venta;