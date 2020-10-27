import logo from './logo.svg';
import './App.css';

const city = 'St.-Petersburg';
const count = 17;
const number = 5;
const sum = count + number;
const flag = true;
const point = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: 'blue'
        }}>
        Hello Mentor
        </p>
        <p>
        {city}
        </p>
        <p>
        {count}
        </p>
        <p>
        {sum}
        </p>
        <p>
        {flag && 'Flag is true'}
        {undefined}
        {null}
        {false}
        {true}
        </p>
        <p>
        {point ? 'Point is true' : 'Point is false'}
        </p>
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
