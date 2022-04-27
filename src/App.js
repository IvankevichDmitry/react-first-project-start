// import logo from './logo.svg';
import './App.css';

// ******* (1) Array Function */
// const App = () => {
//   return (
//     <div className="App">
//       <div>
//         <h1>Технологии</h1>
//         <ul>
//           <li>html, css, js</li>
//           <li>react, redux</li>
//         </ul>
//       </div>
//       <div>
//         <h2>Инструменты</h2>
//         <p>VScode, git, gitHub</p>
//       </div>
//     </div>
//   );
// }
// Теперь у нас есть тег <App /> и его используем в index.js

// *** (2) Создаем компоненты другие и вкладываем в Основную App
/*
Для понимания.
import React from 'react';
Мы берем JSX для нашей функции из библиотеки React из node_modules
*/

import Header from './Header';
import Technologies from './Technologies';

                const App = () => {
                  return (
                    <div>
                      <Header />
                      <Technologies />
                    </div>
                  )
                }











// Другие компненты для понимания материала(выше через import)
                
// const Header = () => {
//   return (
//     <div>
//       <a href="#">Home</a>
//       <a href="#">News Feed</a>
//       <a href="#">Messages</a>
//     </div>
//   )
// }

// const Technolgies = () => {
//   return (
//     <div className="App">
//        <div>
//          <h1>Технологии</h1>
//          <ul>
//            <li>html, css, js</li>
//            <li>react, redux</li>
//          </ul>
//        </div>
//        <div>
//          <h2>Инструменты</h2>
//          <p>VScode, git, gitHub</p>
//       </div>
//      </div>
//   )
// }

export default App;
















// ********************* 1 Это функция Function Declaration ********************
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello every Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


//***************** 3 Это через Class и метод render */
// Мы импортируем это из node_modules react.
// import React, {Component} from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Hello every Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }