import React, { Component } from 'react';
// importar componente

class ModalPago extends Component {

  render() {
    return (
      <div>
        <div className="modal fade" id="modalpago" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
              </div>
              <div className="modal-body">
                <h3>¡Transacción realizada!</h3>             
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger modal-button" data-dismiss="modal">Listo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default ModalPago;

