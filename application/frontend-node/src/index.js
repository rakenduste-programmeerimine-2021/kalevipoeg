import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Rental from './rental';

ReactDOM.render(
  <React.StrictMode>
    <Rental>
      <App />
    </Rental>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
