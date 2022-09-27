import React, { useEffect, useState } from "react";

const UseEffects = () => {
  // useEffect(()=>alert("This is the check for the useEffects 😃"))
  useEffect(() => {
    if (value >= 1) {
      document.title = `(${value}) 💬 Chat`;
    } else {
      document.title = `💬 Chat`;
    }
  });
  const [value, setvalue] = useState(0);

  const Increment = () => {
    setvalue(value + 1);
  };
  return (
    <>
      <div className="main-useEffect">
        <h2>Hello use UseEffects</h2>
        <h1>{value}</h1>
        <button onClick={Increment}>Increment 🏃</button>
      </div>
    </>
  );
};

export default UseEffects;
