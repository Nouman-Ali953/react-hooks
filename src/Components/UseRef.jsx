import React ,{useRef,useState}from 'react'

const UseRef = () => {
  const [name, setname] = useState();
  const userName = useRef();
    const formSubmitted = (e) =>{
        e.preventDefault();
        setname(`Your lucky name is "${userName.current.value}"`);
        
      }
      return (
        <>
    <div className="main-useRef">
        <h2>useRef Hook</h2>
        <form onSubmit={formSubmitted}>
            <label htmlFor="userName"></label>
            <input type="text"  id="userName" ref={userName} placeholder="Enter your name"/>
            <button type="submit">Submit</button>
        </form>
        <p> {name} </p>
    </div>

    </>
  )
}

export default UseRef