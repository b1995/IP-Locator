import React, { Component, useEffect } from "react"
import GoogleMapReact from 'google-map-react'
import KEY from "../../key.js"
import "../../App.css"
import LocationPin from "../LocationPin/LocationPin.js"



/*const location = [
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
]*/

class Map extends Component{

   FetchData(ipAddress) {
    useEffect(() => {
        fetch(`https://geo.ipify.org/api/v1?apiKey=at_NJXxHw5dIXji1dpTeMgCxJhQP1AqN&ipAddress=${ipAddress}`)
            .then(respone => {
                if(respone.ok){
                    return respone.json()
                }
            }
            )
          })
        }
  static defaultProps = {
      center:{
        lat: 47.42216,
        lng: -225.08427,
      },
      zoom : 11
  };
  render(){
    return(
      <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: KEY.map }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <LocationPin
          lat={47.42216}
          lng={-225.08427}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
)}}

export default Map