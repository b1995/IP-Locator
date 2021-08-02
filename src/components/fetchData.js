import React, { useEffect } from "react"


function FetchData(ipAddress) {
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

export default FetchData