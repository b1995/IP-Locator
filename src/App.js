import './App.css';
import Display from './components/Datadisplay/display';
import Headertext from './components/header/header.js';
import Map from './components/Maps/Map.js'
import { LocationProvider } from './LocatioContext';



function App() {
  return (
    <div className = "App">
    <LocationProvider>
      <Headertext/>
      <Display className = "display"/>
      <Map/>
    </LocationProvider>
    </div>
  );
}

export default App;
