import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MaterialMode from './components/MaterialMode';
import FormMui from './components/FormMui';
import StateEffect from './components/StateEffect';
import HookTimer from './components/HookTimer';
import HookRef from './components/Hookref';
import HookRefForward from './components/ HookRefForward';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HookRefForward />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
