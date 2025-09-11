import './App.css';
import Hello from './Count';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello/>
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          Sophonwit <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
