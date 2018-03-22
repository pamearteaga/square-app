import React, { Component } from 'react';
import Modal from './Modal.js';
import data from './mock.json';
import './Articulos.css';


class Articulos extends Component{
  render() {
    return(
      <div id="btnAr" className="Articulos">
        <button id="agregar" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Agregar artículo</button>
        {
          data.catalog.map((prod) => {
            return <div className="col-xs-6" key={prod.id}>
            <img className="img-responsive" src={prod.imageURL}/>
            <h3>{prod.name}</h3>
            <h4>$ {prod.price}</h4>
            <div id="eliminar"><span class="glyphicon glyphicon-remove" aria-hidden="true"><p>Eliminar</p></span></div>
            </div>;
          })
        }
        <Modal/>
      </div>
    );
  }
}

export default Articulos;