import logo from './logoNuevo.png';
import './App.css';
import logo2 from './images/Eventos.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo2} className="App-logo" alt="logo" />
        <p>
          Citas Rápidas en Santiago de Chile y Viña del Mar
        </p>
        <a
          className="App-link"
          href="https://faceitcitasrapidas.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Face It 
        </a>
      </header>
    </div>
  );
}

export default App;
