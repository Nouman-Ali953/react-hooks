import React, { createContext } from 'react'

const bioData = createContext();
const UseContext = () => {
    const name= "My name is Nouman Ali"
  return (
    <bioData.Provider value={name}>
    </bioData.Provider>
  )
}

export default UseContext;
export { bioData };
