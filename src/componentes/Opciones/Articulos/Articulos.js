import React, { Component } from 'react';
import Modal from './Modal.js';
import data from './mock.json';
import Stock from './../../Stock/Stock';
import Venta from './../../Venta/Venta';
import Product from './../../Product/Product';
import CreateProduct from './../../CreateProduct/CreateProduct';
import firebase from 'firebase';
import './Articulos.css';


class Articulos extends Component{
  render() {
    return(
      <div id="btnAr" className="Articulos">
        <div className="products-container">
        <header>
          <h1>Catálogo</h1>
          <Stock stock={this.props.stock} />
          <Venta ventas={this.props.img} />
        </header>

        <div className="products-list">
          <ul>
            {
              this.props.products.map(product => {
                console.log(product.id)
                return (
                  <Product
                    name={product.name}
                    key={product.id}
                    stock={product.stock}
                    img={product.img}
                    id={product.id}
                    removeProduct={this.props.removeProduct}
                  />
                )
              })
            }
             <CreateProduct
              addProduct={this.props.addProduct}
            />
           
          </ul>
        </div>
      </div>
      <Modal/>
      </div>
    );
  }
}

export default Articulos;