import React from "react";
import { useState } from "react";
import "../scss/useState.scss";

const UseState = () => {
  const [Name, setName] = useState("Nouman Ali");
  let val = Name;

  const changeName = () => {
    val === "Nouman Ali" ? setName("Faizan Ali") : setName("Nouman Ali");
  };

  return (
    <>
      <div className="main-useState">
        <h1>My name is {val}</h1>
        <button onClick={changeName}>Click to toggle</button>
      </div>
    </>
  );
};

export default UseState;
