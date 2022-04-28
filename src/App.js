import './App.css';


//(1) Array Function (НОВЫЙ СПОСОБ) */
//(2) Создаем компоненты другие и вкладываем в Основную App
/*

Для понимания.
import React from 'react';
Мы берем JSX для нашей функции из библиотеки React из node_modules
А у нас в новом React все это выполняеться в основном файле index.js.
*/

const App = () => {
  return (
    <div className="app-wrapper">

      <header className='header'>
        <img src="https://www.vhv.rs/dpng/d/256-2567002_hello-png-free-download-transparent-background-hello-clip.png"></img>
      </header>

      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>

      <div className='content'>
        <div>
          <img src="https://t4.ftcdn.net/jpg/03/53/95/73/240_F_353957302_lzuGOuFVbkPMnfLCngcUco7EMS5OOxiz.jpg"></img>
        </div>

        <div className="logotip">
          <img src="https://img.favpng.com/2/9/19/euclidean-vector-man-face-png-favpng-7dphNQdwDvHR1MKgvpEbrmJZh.jpg"></img>
          avatar+description
        </div>

        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>

        <div>
        </div>

      </div>

    </div>
  )
}

// Теперь у нас есть тег <App /> и его используем в index.js
export default App;