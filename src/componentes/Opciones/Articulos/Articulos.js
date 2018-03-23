import React, { Component } from 'react';
import Modal from './Modal.js';
import data from './mock.json';
import './Articulos.css';


class Articulos extends Component{
  constructor() {
    super()
    this.state = {
    products: data.catalog, // AQUÍ DEBERÍA CAMBIAR A LA DATA DE FIREBASE con props probablemente
    productsForShow: data.catalog // aquí empieza igual a products, pero cambiará si se hace una búsqueda
    /* productsForShow es lo que se va a desplegar en la página, en caso de no hacer ninguna búsqueda o tener el input vacío, productsForShow siempre será igual a products, que es nuestra data original con info desde firebase, si se cambia algo en el input, productsForShow se transformará en un nuevo array con productos cuyo nombre coincida con lo ingresado en el input */
    }
    this.filterProducts = this.filterProducts.bind(this);
    this.addProduct = this.addProduct.bind(this); //para no perder el scope
  }

/* función para buscar productos */
  filterProducts() {
    let val = this.inputFilter.value; // valor del input al presionar una tecla
    val = val.toLowerCase();
    val = val.split(' ').join(''); //pasando valor a minúsculas y borrando espacios para evitar errores
    //console.log(val)
    let newProducts = [];
    for (let i = 0; i < this.state.products.length; i++) {
      let el = this.state.products[i].name.toLowerCase();
      el = el.split(' ').join(''); //pasando nombre del producto a minúsculas y borrando espacios para evitar errores
      //console.log(el)
      if (el.indexOf(val) !== -1) {
        newProducts.push(this.state.products[i])
      }
    }
    if (/**newProducts.length === 0 ||**/ val.length === 0) {
      this.setState( {productsForShow: this.state.products} )
    } else {
      this.setState( {productsForShow: newProducts} )
    }
    //console.log(this.state)
    //console.log(newProducts)
  }

  /* función para agregar un producto, esta la enviaremos al modal */
  addProduct(productName, productImg, productStock, productPrice) {
  let products = this.state.products; // let products = this.state.products;
  console.log(products);
  products.push({
    id: products.length + 1,
    name: productName,
    price: productPrice,
    imageURL: productImg,
    stock: productStock
  })
  this.setState({
    products //producst: products
  })
  //this.db.push().set({name: productName, img: productImg, stock: productStock})
 }

  render() {
    return(
      <div id="btnAr" className="Articulos">
        <div className='search-container'>
          <input type='text' id='search' placeholder='Busca entre tus productos' onKeyUp={this.filterProducts} ref={(input) => { this.inputFilter = input; }}/>
        </div>
        <button id="agregar" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Agregar artículo</button>
        {
          this.state.productsForShow.map((prod) => { /* aquí cambié data.catalog por productsForShow */
            return <div className="col-xs-6" key={prod.id}>
            <img className="img-responsive" src={prod.imageURL}/>
            <h3>{prod.name}</h3>
            <h4>$ {prod.price}</h4>
            <h4 id="price">Stock: 5</h4>
            <div id="eliminar"><span className="glyphicon glyphicon-remove" aria-hidden="true"><p>Eliminar</p></span></div>
            </div>;
          })
        }
        <Modal
        addProduct={this.addProduct}/> />
      </div>
    );
  }
}

export default Articulos;