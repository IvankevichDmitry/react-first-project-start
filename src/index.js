import React from 'react';
/*
Для понимания.
import React from 'react';
Мы берем JSX для нашей функции из библиотеки React из node_modules
*/
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
































// (3) Для Class и для всех отсальных функиций (СТАРЫЙ СПОСОБ)
// ReacDom.render(<App />, document.getElemntById("root"))