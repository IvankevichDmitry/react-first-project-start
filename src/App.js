import './App.css';
import Header from './Header';
import Technologies from './Technologies';

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
                    <div>
                      <Header />
                      <Technologies />
                    </div>
                  )
                }

// Теперь у нас есть тег <App /> и его используем в index.js
export default App;