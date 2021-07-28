import React from "react"
import GoogleMapReact from 'google-map-react'
import LocationPin from "../LocationPin/LocationPin"
import KEY from "../../key.js"
import "../../App.css"

/*const location = [
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
]*/
function Map ({ location, zoomLevel }){
    return(
    <div className="map">
      <h1>Hello</h1>
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: KEY.map }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
  </div>
)}

export default Map