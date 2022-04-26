// import logo from './logo.svg';
import './App.css';

// ******* 2 Это через стрелочную функцию Array Function */
const App = () => {
  return (
    <div className="App">
     <ul>
       <li>html</li>
       <li>css</li>
       <li>js</li>
       <li>react</li>
     </ul>
    </div>
  );
}

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