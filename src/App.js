import './App.css';
import Login from './components/Login';
import Player from './components/Player';
import { token } from './components/Spotify';


function App() {
  
  return (
    <div className="App">
      {
        token ? <Player /> : <Login />
      }
    </div>
  );
}

export default App;
