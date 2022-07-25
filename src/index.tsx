import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import "./assets/styling/reset.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


