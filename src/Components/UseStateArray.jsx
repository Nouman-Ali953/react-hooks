import React from "react";
import "../scss/useState.scss";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const UseStateArray = () => {
  const bioData = [
    { id: 0, name: "Nouman Ali", Age: "20" },
    { id: 1, name: "Faizan Ali", Age: "16" },
    { id: 2, name: "Abdul Rehman Ali", Age: "15" },
  ];
  const [Data, setData] = useState(bioData);
  const clearData = () => {
    setData([]);
    // setData([{...Data,name:"Sir Shabab Haider Zaidi",Age:"28"}]);
    // The upper line reflects the use spread operator (...Data)
  };
  const removeEle = (id) => {
    const myNewArray = Data.filter((curr) => {
      return curr.id !== id;
    });
    setData(myNewArray);
  };
  return (
    <>
      <div className="main-useState-array">
        {Data.map((curr) => (
          <h2 key={curr.id}>
            {" "}
            Name:{curr.name} & Age:{curr.Age}{" "}
            <CloseIcon
              onClick={() => {
                removeEle(curr.id);
              }}
            />{" "}
          </h2>
        ))}
        <button onClick={clearData}>Clear</button>
      </div>
    </>
  );
};

export default UseStateArray;
