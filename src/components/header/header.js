
import background from '../../Assets/pattern-bg.png'
import '../../App.css'
import React, {useRef, useState, useEffect, useContext} from 'react'
import KEY from '../../key'
import { LocationContext } from '../../LocatioContext'
function Headertext() {

  const [value, setValue] = useState('')
  const [location, setLocation] = useContext(LocationContext);

const searchButton = useRef(null)

  const handleClick= (e) => {
    e.preventDefault()
    setValue(searchButton.current.value)
  }



useEffect(() => {
  fetch(`https://geo.ipify.org/api/v1?apiKey=${KEY.geo}=${value}`)
    .then(respone => {
      if(respone.ok){
          respone.json()
          .then(data => {
            setLocation(data.location)
            console.log(data)
          })
        }
      })
    },[value, setLocation])

    
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