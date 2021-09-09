import React, {  useContext } from "react"
import GoogleMapReact from 'google-map-react'
import KEY from "../../key.js"
import "../../App.css"
import LocationPin from "../LocationPin/LocationPin.js"
import { LocationContext } from "../../LocatioContext.js"

/*const location = [
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
]*/

function Map() {
  const [location, setLocation] = useContext(LocationContext)
    return(
      <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: KEY.map }}
        center={{
          lat: location.lat,
          lng: location.lng,
        }}
        zoom={17}
        yesIWantToUseGoogleMapApiInternals
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
)}

export default Map