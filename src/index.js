import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import BotonPago from './componentes/Pago/BotonPago.js';
import Opciones from './componentes/Opciones/Opciones.js';

const pago = document.getElementById('pago');
const opciones = document.getElementById('opciones');

render(<BotonPago/>, pago);
render(<Opciones/>, opciones);
