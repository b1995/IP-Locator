
import background from '../../Assets/pattern-bg.png'
import '../../App.css'
import React, {useRef} from 'react'
function Headertext() {

const searchButton = useRef(null)

  const handleClick= () => {
    const value = searchButton.current.value
    console.log(value)
  }

    
    return (

        <header className="App-header">
          <img src = {background} className = "Header-img" alt = "log" />
          <h1 className = "Header-text">IP Address Tracker</h1>
          <form action = "/" method = 'get' className = 'Search-bar'>
            <input
            ref = {searchButton} 
            type = "text"
            />
            <button type="submit" onClick = {handleClick}><i className="arrow right"></i></button>
          </form>

        </header>
    );
  }
  export default Headertext