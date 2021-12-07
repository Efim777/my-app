import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// const element = React.createElement(
//   'p',
//   {
//     style: {
//       color: 'red',
//       fontSize: '40px'
//     }
//   },
//   'Hello, world'
// )

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// )
