import React from "react";
import { useEffect, useState } from "react";
import "../Mini_Project/project.scss";
import Loader from "./Loader";
import { FcOk } from "react-icons/fc";

const FetchApi = () => {
  const [user, setuser] = useState([]);
  const [Loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      const response = await fetch("https://Api.github.com/users");
      setuser(await response.json());
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  if (Loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="main-project">
        <h2>List of GitHub users 👨‍⚖️</h2>
        <div className="container">
          {user.map((curElement) => (
            <div className="box" key={curElement.id}>
              <div className="first">
                <img src={curElement.avatar_url} alt="pics" />
                {curElement.login}<FcOk/>
              </div>
              <p>
                dolor sit amet consectetur adipisicing elit. Sequi, recusandae
                alias,ducimus perferendis reiciendis voluptatem quia dolore
                architecto Numquam?
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FetchApi;
