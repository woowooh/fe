import React, {useState} from 'react';

import logo from './logo.svg';
import Hello from './components/Hello'
import LikeButton from './components/LikeButton'
import MouseTracker from './components/MouseTracker'
import useMousePosition from './hooks/useMousePosition'
import useUrlLoader from './hooks/useUrlLoader'
import './App.css';

interface IShowResult {
  message: string
  status: string
}

const App: React.FC = () => {
  const [ show, setShow] = useState(true)
  const positions = useMousePosition()
  const [data, loading] = useUrlLoader('https://dog.ceo/api/breeds/image/random', [show])
  const dogResult = data as IShowResult

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick ={ ()=> {setShow(!show)}} > Refresh dog </button>
        </p>
        { loading ? <p> 🐶读取中 </p>
          : <img src={dogResult && dogResult.message } />}
        <p> 
          X: {positions.x} Y: {positions.y}
        </p>
        <LikeButton />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header>
    </div>
  );
}

export default App;
