import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import VivatApp from './App';
// import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {store} from './redux/redux-store'
import {Provider} from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store} >     
        <VivatApp />
      </Provider> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <VivatApp />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
