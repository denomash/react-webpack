import React from 'react';
import  { render } from 'react-dom';
import App from './App';
import "semantic-ui-css/semantic.min.css";
import "./assets/style/style.css"

render(
  <App />,
  document.getElementById('root')
);
module.hot.accept()
