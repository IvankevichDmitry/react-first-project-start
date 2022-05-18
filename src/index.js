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
import state, { subscribe } from './redux/state';

// Импортируем функцию для постов и сообщений
import { addMessage, addPost, updateNewMessageText, updateNewPostText } from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
          {/* <App posts={posts} dialogs={dialogs} messages={messages}/> */}
          <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText}/>
      </BrowserRouter>
    </React.StrictMode>
  );
};



rerenderEntireTree(state)

subscribe(rerenderEntireTree)





































// import './index.css';
// import reportWebVitals from './reportWebVitals';

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
































// (3) Для Class и для всех отсальных функиций (СТАРЫЙ СПОСОБ)
// ReacDom.render(<App />, document.getElemntById("root"))