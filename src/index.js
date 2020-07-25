import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Object} from 'core-js';
import Auth from './Auth';

let state={};

window.setState=(changes)=>{
  state=Object.assign({},state,changes); 
  ReactDOM.render(<App {...state} />,document.getElementById('root'));
}

const auth=new Auth();

let kullanıcıAdı=auth.getProfile.nickname || "ABY";
/* eslint no-restricted-globals:0*/
let initialState={
  isim:kullanıcıAdı,
  location:location.pathname.replace(/^\/?|\/$/g,""),
  auth
}


window.setState(initialState);

