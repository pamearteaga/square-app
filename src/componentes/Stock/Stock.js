import React, { Component } from 'react';

class Stock extends Component {
  constructor(props) {
    super(props)

  } // innecesario
    //dummy componente, 
    

  render() {
    return(
      <div>
        <h2>Stock actual de productos</h2>
        <div>{this.props.stock}</div>
      </div>
    )
  }
}

export default Stock;