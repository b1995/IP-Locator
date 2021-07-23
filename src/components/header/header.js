
import background from '../../Assets/pattern-bg.png'
function Headertext() {
    return (

        <header className="App-header" style = {{backgroundImage: `url(${background})` }}>

          <h1>IP Address Tracker</h1>
        </header>
    );
  }
  export default Headertext