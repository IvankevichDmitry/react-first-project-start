import React from 'react';
/*
Для понимания.
import React from 'react';
Мы берем JSX для нашей функции из библиотеки React из node_modules
*/
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


// Импортируем функцию для постов
import { addPost } from './redux/state';


export let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
          {/* <App posts={posts} dialogs={dialogs} messages={messages}/> */}
          <App state={state} addPost={addPost}/>
      </BrowserRouter>
    </React.StrictMode>
  );
};
