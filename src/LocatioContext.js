import React, {createContext, useState} from 'react';

export const LocationContext = createContext();

export function LocationProvider(props){

    const [location, setLocation] = useState({
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 32.40792,
        lng: 35.70802,
    })
    return(
        <LocationContext.Provider value = {[location, setLocation]}>
            {props.children}
        </LocationContext.Provider>
    )
}

