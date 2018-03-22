import React, { Component } from 'react';
import data from './mock.json';
import './Articulos.css';


class Articulos extends Component{
  render() {
    return(
      <div id="btnAr" className="Articulos">
        {
          data.catalog.map((prod) => {
            return <div className="col-xs-6" key={prod.id}>
            <img className="img-responsive" src={prod.imageURL}/>
            <h3>{prod.name}</h3>
            <p>$ {prod.price}</p>
            </div>;
          })
        }
      </div>
    );
  }
}

export default Articulos;