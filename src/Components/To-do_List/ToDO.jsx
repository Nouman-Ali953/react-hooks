import React, { useState, useEffect } from "react";
import "./todo.scss";
import { BsPlusLg } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import image from "../../images/1.png.webp";


// Get the data from the local storage
const getLocalItems = () => {
  const list = localStorage.getItem("Item-List");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const ToDO = () => {

  const [Task, setTask] = useState(getLocalItems());
  const [Data, setData] = useState();
  const [Toggle, setToggle] = useState(true);
  const [Edit, setEdit] = useState(null);


  const handleEvent = (e) => {
    setData(e.target.value);
  };
  const clearData = () => {
    setTask([]);
  };

  const ToDoTask = () => {
    if (!Data) {
    } else if (Data && !Toggle) {
      setTask(
        Task.map((elem) => {
          if (elem.id === Edit) {
            return { ...elem, name: Data };
          }
          return elem;
        })
      );
      setToggle(true);
      setData("");
      setEdit(null);
    } else {
      const allInputData = { id: new Date().getTime().toString(), name: Data };
      setTask([...Task, allInputData]);
      setData("");
    }
  };

  const clearItems = (index) => {
    const newArray = Task.filter((elem) => {
      return index !== elem.id;
    });
    setTask(newArray);
  };

  const editItem = (id) => {
    let newEditItem = Task.find((elem) => {
      return elem.id === id;
    });
    console.log(newEditItem);
    setToggle(false);
    setData(newEditItem.name);
    setEdit(id);
  };

  const textRotate = () => {
    document.getElementById("no").innerText = "Clear List";
  };
  const text_rotate = () => {
    document.getElementById("no").innerText = "Check List";
  };
  // add data to local storage
  useEffect(() => {
    localStorage.setItem("Item-List", JSON.stringify(Task));
  }, [Task]);

  return (
    <>
      <div className="main-div">
        <div className="image">
          <img src={image} alt="" />
        </div>

        <h4>Add Your List Here 😇</h4>
        <div className="input">
          <input
            type="text"
            name=""
            id="list"
            placeholder="✍️  Add new item"
            value={Data}
            onChange={handleEvent}
          />
          {Toggle ? (
            <BsPlusLg id="add" onClick={ToDoTask} title="Add item" />
          ) : (
            <FaEdit id="ed" onClick={ToDoTask} />
          )}
        </div>
        {Task.map((curr) => {
          return (
            <div className="add-items" key={curr.id}>
              <p>{curr.name}</p>
              <div className="edit">
                <FaEdit id="ed" onClick={() => editItem(curr.id)} />
                <AiFillDelete onClick={() => clearItems(curr.id)} />
              </div>
            </div>
          );
        })}
        <button
          type="submit"
          onMouseEnter={textRotate}
          onMouseOut={text_rotate}
          id="no"
          onClick={clearData}
        >
          Check List
        </button>
      </div>
    </>
  );
};

export default ToDO;
