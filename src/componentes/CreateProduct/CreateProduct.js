import React, { Component } from 'react';
//import './index.css';

class CreateProduct extends Component {
  constructor() {
    super()
    this.addProduct = this.addProduct.bind(this);
  }

  addProduct() {
    //console.log(this.inputName.value);
    //alert('sajda')
    //console.log(this.inputStock.value);
    //console.log(this.inputImg.value);
    this.props.addProduct(this.inputName.value, parseFloat(this.inputImg.value), parseInt(this.inputStock.value));
    this.inputName.value = '';
    this.inputImg.value = '';
    this.inputStock.value = '';
  }

  render() {
    return(
      <li>
        <span>Agrega un Producto</span>
        <div className='input-container'>
          <label htmlFor='create-name'>Name: </label>
          <input type='text' id='create-name'
            ref={(input) => { this.inputName = input; }} />
          <label htmlFor='create-stock'>Stock: </label>
          <input type='text' id='create-stock'
            ref={(input) => { this.inputStock = input; }} />
          <label htmlFor='create-img'>Imagen: </label>
          <input type='text' id='create-img'
            ref={(input) => { this.inputImg = input; }} />
          <button id='create-btn' onClick={this.addProduct}>crea tu producto</button>
        </div>
      </li>
    )
  }
}

//** proptypes

export default CreateProduct;