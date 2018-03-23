import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import firebase from 'firebase';
import Login from './componentes/Login/Login.js';
import {DB_CONFIG} from './componentes/Config/Config';
import PrimeraPagina from './componentes/PrimeraPagina/PrimeraPagina.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      products: [
        //{id: 1, name: 'proucto 1', img: 'imagen', stock: 18},
        //{id: 2, name: 'producto 2', img: 'imagen', stock: 5}
      ],
      stock: 0,
      img: 0,
      user: null,
    }

    this.app = firebase.initializeApp(DB_CONFIG); // inicializando firebase con la configuración guardada
    this.db = this.app.database().ref().child('products'); //referencia a la data
    this.addProduct = this.addProduct.bind(this); //para no perder el scope
    this.removeProduct = this.removeProduct.bind(this);
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() { //Se dispara una vez se renderiza
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user }); //podria ser user:user pero se resume 
    }) //devuelve un objeto usuario
  }
  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();
    // proveedor de google

        //aca va lo que muestra el usurio 
    firebase.auth().signInWithPopup(provider)
      // este sgning devuelve una promesa
      .then(result => console.log(`${result.user.email} ha iniciado sesión `))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  
  
    }

  handleLogout() {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha salido`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
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

  addProduct(productName, productImg, productStock) {
    //let { products } = this.state; // let products = this.state.products;
    //console.log(products);
    //products.push({
    //  id: products.length + 1,
    //  name: productName,
    //  img: productImg,
    //  stock: productStock
    //})
    //this.setState({
    //  products //producst: products
    //})
    this.db.push().set({ name: productName, img: productImg, stock: productStock })
    this.setState( // importante pues depende del estado previo
      (prevState) => {
        return {
          stock: prevState.stock + productStock,
          img: prevState.img + productImg,
        }
      }
    );
  }

  removeProduct(productId, productStock,productImg ) {
    this.db.child(productId).remove();
    this.setState( // importante pues depende del estado previo
      (prevState) => {
        return {
          stock: prevState.stock - productStock,
          img: prevState.img - productImg,
        }
      }
    );
  }

  render(){
    return (
      <Login
        user={this.state.user}
        handleLogout={this.handleLogout}
        handleAuth={this.handleAuth}
        stock={this.state.stock}
        img={this.state.img}
        products={this.state.products}
        removeProduct={this.removeProduct}
        addProduct={this.addProduct}
      />
    );
  }
}


export default App;

// NO PUEDES PONER LOGFIN : react necesita un componente inciial
// si pones login entonces tu app inicia con el, y NO es lo que quieres
// ya que DEBE iniciar con App
ReactDOM.render(<App />, document.getElementById('root'));




