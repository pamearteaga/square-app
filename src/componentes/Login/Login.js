import React, { Component } from 'react';
import firebase from 'firebase';
import PrimeraPagina from './../../componentes/PrimeraPagina/PrimeraPagina.js'
import BotonPago from './../../componentes/Pago/BotonPago.js';
import Opciones from './../../componentes/Opciones/Opciones.js';
import {DB_CONFIG} from './../../componentes/Config/Config.js';
import './index.css';
import FaGoogle from 'react-icons/lib/fa/google';
import FaSignOut from 'react-icons/lib/fa/sign-out';

class Login extends Component {
  constructor() {
    super();//Estamos heredando de otra clase para que llame al contro
    this.state = {
   
    };
  
  }
 
 

  renderLoginButton() {
    if (this.props.user) {
      return (
        <button onClick={this.props.handleLogout} className="Logout-btn"><FaSignOut /></button>
      );
    } else {
      return (
        // si no esta logueado se renderiza el boton y toda la pa ta
        <div className='primera-pagina'>
          <div className='btn-container'>
            <button className="Login-btn" onClick={this.props.handleAuth}> <div className='icon'><FaGoogle /></div> Inicia sesión con Google </button>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-intro">
          {this.renderLoginButton()}
        </div>
        {this.props.user && (
          <div>
          <div className="User">
            <img src={this.props.user.photoURL} alt={this.props.user.displayName} className='UserImg' />
            <span className='username'>{this.props.user.displayName}</span>
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