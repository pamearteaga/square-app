import React, { Component } from 'react';
// importar componente

class Modal extends Component {
  constructor() {
    super()
    this.addProduct = this.addProduct.bind(this);
  }

  addProduct() {
    //console.log(this.inputName.value);
    //alert('sajda')
    //console.log(this.inputStock.value);
    //console.log(this.inputImg.value);
    console.log(this.inputImg.value)
    this.props.addProduct(this.inputName.value, 'http://placehold.it/150/bc4125/ffffff', this.inputStock.value, this.inputPrice.value);
    this.inputName.value = '';
    this.inputImg.value = '';
    this.inputStock.value = '';
    this.inputPrice.value = '';
  }

  render() {
    return (
      <div>
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4>Agrega un Producto</h4>
                <hr/>
              </div>
              <div className="modal-body">
                <div className='input-container'>
                  <label htmlFor='create-name'>Nombre: </label>
                  <input type='text' id='create-name'
                    ref={(input) => { this.inputName = input; }} />
                    <label htmlFor='create-price'>Precio: </label>
                    <input type='text' id='create-price'
                      ref={(input) => { this.inputPrice = input; }} />
                  <label htmlFor='create-stock'>Stock: </label>
                  <input type='text' id='create-stock'
                    ref={(input) => { this.inputStock = input; }} />
                  <label htmlFor='create-img'>Imagen: </label>
                  <input type='file' id='create-img'
                    ref={(input) => { this.inputImg = input; }} />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn modal-button" data-dismiss="modal" onClick={this.addProduct}>Agregar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Exportando componente
export default Modal;