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
    this.removeProduct = this.removeProduct.bind(this);
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

  removeProduct(product) {
  console.log(product)
  let products = this.state.products;
  let arr = products.indexOf(product);
  console.log(arr)
  products.splice(arr, 1);
  this.setState({
    products
  })
  console.log(products)
 }

/* le agregué que le quitara un lemento al stock al sumar el item a la compra */
 sumarProd(product) {
  const btn = parseInt(document.getElementById('totalCompra').innerHTML);
  const price = parseInt(document.getElementById('price').innerHTML);
  if (btn === 0 ) {
         document.getElementById('totalCompra').innerHTML = price;
    } else {
       document.getElementById('totalCompra').innerHTML = btn + price;
    }
  let products = this.state.products;
  let obj = products.indexOf(product); //busca dónde se ubica este producto en l data
  let stock = product.stock - 1; // le resta uno al stock
  products[obj].stock = stock; // actualiza el stock
  this.setState({ //actualiza el estado
    products
  })
  //console.log(products)
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
            if (prod.stock > 0) {
              return <div className="col-xs-6" key={prod.id}>
              <div onClick={(e) => this.sumarProd(prod, e)}>
              <img className="img-responsive" src={prod.imageURL}/>
              <h4>{prod.name}</h4>
              <h5>$<span id="price">{prod.price}</span></h5>
              <h5>Stock: {prod.stock}</h5>
              </div>
              <div id="eliminar" onClick={(e) => this.removeProduct(prod, e)}><span className="glyphicon glyphicon-remove" aria-hidden="true"><p>Eliminar</p></span></div>
              </div>;
            }

          })
        }
        <Modal
        addProduct={this.addProduct}/>
      </div>
    );
  }
}

export default Articulos;