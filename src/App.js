import pattern from './pattern-bg.png';
import './App.css';

const location = [
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ pattern } alt="logo" />
        <div>IP Address Tracker</div>
      </header>
    </div>
  );
}

export default App;
