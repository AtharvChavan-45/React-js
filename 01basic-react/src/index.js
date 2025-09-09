import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)
const anotheruser = 'Atharv'
// create react element
const reactElement =React.createElement(
  'a',
  {href: 'https://google.com',target:'_blank'},
  'click me to visit google',
  anotheruser // aotomaticaly enject from outside
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
   //<App />
  //</React.StrictMode>
  //anotherElement
  reactElement
);


