import React from "react";
import { useContext } from "react";
import { LocationContext } from "../../LocatioContext";
import './display.css'


function Display(){
    const [location, setLocation] = useContext(LocationContext);

    return(
        <section className= "section-background">
            country: {location.country}
            timezone: {location.timezone}
        </section>
    )
}

export default Display