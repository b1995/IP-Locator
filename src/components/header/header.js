
import background from '../../Assets/pattern-bg.png'
import '../../App.css'
function Headertext() {
    return (

        <header className="App-header">
          <img src = {background} className = "Header-img" alt = "log" />
          <h1 className = "Header-text">IP Address Tracker</h1>
          <form action = "/" method = 'get' className = 'Search-bar'>
            <input
            type = "text"
            />
            <button type="submit"><i className="arrow right"></i></button>
          </form>

        </header>
    );
  }
  export default Headertext