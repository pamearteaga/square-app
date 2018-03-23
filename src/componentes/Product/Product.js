import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
  constructor(props) {
    super(props)
    this.removeProduct = this.removeProduct.bind(this)
    
  }

  removeProduct() {
    alert('removing ' + this.props.id);
    this.props.removeProduct(this.props.id, this.props.stock , this.props.img);
  }

  render() {
    return(
      <li>
        <span className='remove-btn' onClick={this.removeProduct}>eliminar</span>
        <span>{this.props.name}</span>
        <span>{this.props.stock}</span>
        <span>{this.props.img}</span>
      </li>
    )
  }
}


export default Product;