import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Register from './pages/Register'
import Login from './pages/Login'
import Mypage from './pages/myPage'
import Main from './pages/Main'
import './App.css';

const router = createBrowserRouter([
  {
    path :"/login",
    element: <Login/>
  }, 
  {
    path: "/Register",
    element: <Register/>
  }, 
  {
    path: "/Mypage",
    element: <Mypage/>

    path : '/',
    element: <Main/>
  },
  {
    path: "Write",
    element: <Write />,
  }

])

function App() {
  return <RouterProvider router={router} />;
}
// function App() {
//   return (
//     <Register/>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

export default App;
