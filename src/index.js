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

// БАЗА ДАННЫХ
// 1. Данные с сообщениями. Используються в MyPosts.jsx
let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 10 },
  { id: 2, message: "Post 1", likesCount: 30 },
  { id: 3, message: "Post 2", likesCount: 100 },
  { id: 5, message: "Post 3", likesCount: 110 },
];
// 2. Данные с пользователями. Используються в Dialogs.jsx
let dialogs = [
  { id: 1, name: "Dmitry" },
  { id: 2, name: "Alina" },
  { id: 3, name: "Timothy" },
  { id: 4, name: "Eketerina" },
  { id: 5, name: "Maxim" },
  { id: 6, name: "Tanya" },
];
//  3. Данные с пользователями. Используються в Dialogs.jsx
let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Hello" },
  { id: 3, message: "Good morning" },
  { id: 4, message: "Good day" },
  { id: 5, message: "Yes" },
  { id: 6, message: "Welcome" },
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={posts} dialogsData={dialogs} messagesData={messages}/>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
































// (3) Для Class и для всех отсальных функиций (СТАРЫЙ СПОСОБ)
// ReacDom.render(<App />, document.getElemntById("root"))