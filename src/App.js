import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


//(1) Array Function (НОВЫЙ СПОСОБ) */
//(2) Создаем компоненты другие и вкладываем в Основную App
/*

Для понимания.
import React from 'react';
Мы берем JSX для нашей функции из библиотеки React из node_modules
А у нас в новом React все это выполняеться в основном файле index.js.
*/

const App = (props) => {
 
  return (
    // <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile state={props.state.profilePage} addPost={props.addPost}/>} />
          <Route path="/dialogs" element={<Dialogs state={props.state.dialogsPage} />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
    // </BrowserRouter>
  )
}

// Теперь у нас есть тег <App /> и его используем в index.js
export default App;
