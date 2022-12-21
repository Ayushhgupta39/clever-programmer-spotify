import { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Player from './components/Player';
import { token } from './components/Spotify';

function App() {
  
  return (
    <div className="App">
      <h1>Let's Freaking Gooo 🚀🚀</h1>
      {
        token ? <Player /> : <Login />
      }
      
    </div>
  );
}

export default App;
