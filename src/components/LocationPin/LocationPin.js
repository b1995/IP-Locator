import { Icon } from '@iconify/react'
import locationIcon from '@iconify/react'

function LocationPin({text}) {
    return(
        <div className="pin">
            <Icon icon = {locationIcon} className="pin-icon"></Icon>
            <p className= "pin-text">{text}</p>
        </div>
    )
}
export default LocationPin