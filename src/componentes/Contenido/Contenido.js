/*import React, { Component } from 'react';
import Stock from '../Stock/Stock';
import Venta from '../Venta/Venta';
import Product from '../Product/Product';
import CreateProduct from '../CreateProduct/CreateProduct';

class Contenido extends Component {

  constructor(props){
    super(props);
    this.state = {
      products: [
        //{id: 1, name: 'proucto 1', img: 'imagen', stock: 18},
        //{id: 2, name: 'producto 2', img: 'imagen', stock: 5}
      ],
      stock: 0,
      img: 0,
    }
  }

  componentDidMount() {
    const { products } = this.state;
    this.db.on('child_added', snap => { // cuando un elemento -child- es añadido a la data de firebase
      products.push({ // pushearle estos datos
        id: snap.key,
        name: snap.val().name,
        img: snap.val().img,
        stock: snap.val().stock
      })
      this.setState({ products }) // actualizar estado
    })
    this.db.on('child_removed', snap => {
      for (let i = 0; i < products.length; i++) { // buscando el producto que se removió de la data
        if (products[i].id === snap.key) {
          products.splice(i, 1)
        }
      }
      this.setState({ products }) // actualizando estado
    })
  }

  render() {
    <div className="products-container">
        <header>
          <h1>Catálogo</h1>
          <Stock stock={this.state.stock} />
          <Venta ventas={this.state.img} />
        </header>

        <div className="products-list">
          <ul>
            {
              this.state.products.map(product => {
                console.log(product.id)
                return (
                  <Product
                    name={product.name}
                    key={product.id}
                    stock={product.stock}
                    img={product.img}
                    id={product.id}
                    removeProduct={this.removeProduct}
                  />
                )
              })
            }
            <CreateProduct
              addProduct={this.addProduct}
            />
          </ul>
        </div>
      </div>
  }
}

export default Contenido; 

*/