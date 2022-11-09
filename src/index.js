import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import Test from './app/Test.js';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore } from 'redux';
import {reducer} from './app/store.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = legacy_createStore(reducer);

const myRender = () =>{
  root.render(
    <React.StrictMode>
      <App state = {store.getState()} dispatch={store.dispatch} />
      {/*<Test></Test>*/}
    </React.StrictMode>
  );
};

store.subscribe(myRender);
myRender();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
