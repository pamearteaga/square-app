import React, { Component } from 'react';
import firebase from 'firebase';
import PrimeraPagina from './../../componentes/PrimeraPagina/PrimeraPagina.js'
import BotonPago from './../../componentes/Pago/BotonPago.js';
import Opciones from './../../componentes/Opciones/Opciones.js';
import {DB_CONFIG} from './../../componentes/Config/Config.js';

class Login extends Component {
  constructor() {
    super();//Estamos heredando de otra clase para que llame al contro
    this.state = {
   
    };
  
  }
 
 

  renderLoginButton() {
    if (this.props.user) {
      return (
        <button onClick={this.props.handleLogout} className="Logout-btn">Log-out</button>
     
      );
    } else {
      return (
        // si no esta logueado se renderiza el boton y toda la pa ta
        <div> 
          <PrimeraPagina />
          
        <button className="Login-btn" onClick={this.props.handleAuth}> Log In with Google </button>
        </div>
      )

    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <p className="App-intro">
          {this.renderLoginButton()}
        </p>
        {this.props.user && ( 
          <div> 
          <div className="User">
            <img width="50" src={this.props.user.photoURL} alt={this.props.user.displayName} className='UserImg' />
            Welcome, {this.props.user.displayName}
          </div>
          <div>
            <BotonPago />
            <Opciones
              stock={this.props.stock}
              img={this.props.img}
              products={this.props.products}
              removeProduct={this.props.removeProduct}
              addProduct={this.props.addProduct}
            />
          </div>
         
          </div>
        )}

      </div>
    );
  }
}

export default Login;