import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Functional  from './component/Functional';
import reportWebVitals from './reportWebVitals';
import ClassComponents from './component/ClassComponents';
import UnionBank from './component/UnionBank'
import CorporationBank from './component/CorporationBank';
import AndhraBank from './component/AndhraBank';
import StateinclassComponent from './component/StateinclassComponent';
import StateinFunctionComponent from './component/StateinFunctionComponent';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UnionBank /> */}
    <StateinclassComponent /> 
    {/* <StateinFunctionComponent /> */}
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
