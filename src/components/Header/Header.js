
import background from '../../Assets/pattern-bg.png'
import '../../App.css'
import React, {useRef, useState, useEffect} from 'react'
import KEY from '../../key'
function Headertext() {

  const [value, setValue] = useState('')

const searchButton = useRef(null)

  const handleClick= () => {
    setValue(searchButton.current.value)
  }



useEffect(() => {
  fetch(`https://geo.ipify.org/api/v1?apiKey=${KEY.geo}=${value}`)
    .then(respone => {
      if(respone.ok){
        console.log(respone.json())
        }
      }
    )
    }, [])

    
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