import { useState , useEffect} from "react"
import React from 'react'

const UseEffectCleanUP = () => {
    const [Width, setWidth] = useState(window.screen.width);
    const actualWidth = () =>{setWidth(window.innerWidth)}
    useEffect(() => {
      window.addEventListener("resize",actualWidth)
    
      return () => {
        window.removeEventListener("resize",actualWidth)
      }
    })

    
  return (
    <>
        <div className="main-useEffect-cleanUp">
            <h2>Actual size of the screen is:</h2>
            <h1>{Width}</h1>
            <p>By using cleanUp </p>
        </div>
    </>
  )
}

export default UseEffectCleanUP