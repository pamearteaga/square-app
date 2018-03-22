import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import firebase from 'firebase';
import Login from './componentes/Login/Login.js';


var config = {
  apiKey: "AIzaSyB7KUYEpnVAkvSAHCbsUuclRrkXkhbM1mI",
  authDomain: "square-bef05.firebaseapp.com",
  databaseURL: "https://square-bef05.firebaseio.com",
  projectId: "square-bef05",
  storageBucket: "square-bef05.appspot.com",
  messagingSenderId: "1058596072614"
};

firebase.initializeApp(config);

ReactDOM.render(<Login />, document.getElementById('root'));




