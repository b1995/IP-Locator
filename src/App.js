import pattern from './pattern-bg.png';
import './App.css';
import Mapsection from './components/Maps/Map.js'

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
} 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ pattern } alt="logo" />
        <div>IP Address Tracker</div>
      </header>
      <body>
        <Mapsection location = { location } zoomLevel = { 17 }/>
      </body>
    </div>
  );
}

export default App;
