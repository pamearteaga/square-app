import React, { Component } from 'react';
// importar componente

class Modal extends Component {
  render() {
    return (
      <div>
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              </div>
              <div className="modal-body">

                <span>Leti pon tu componente aqui :)</span>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn" data-dismiss="modal">Agregar</button>
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