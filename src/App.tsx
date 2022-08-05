import React, { useState } from "react";
import "./App.css";
import flower from "./components/purple-flower.jpg";
import "./components/MainGround.css";
import { User } from "./Interfaces";

const App = () => {
  const [user, setUser] = useState<User>();

  const getRandomTime = () => {
    return Date.now();
  };

  const getGender = () => {
    return Date.now() % 2 === 0 ? "male" : "female";
  };

  const fetchUsers = async (timestamp: number, gender: string) => {
    let url = `https://fakerapi.it/api/v1/persons?_quantity=1&_gender=${gender}&_seed=${timestamp}`;
    return await fetch(url)
      .then((response) => response.json().then((user) => user.data[0] as User))
      .then((user) => setUser(user));
  };

  const fetchApi = async () => {
    await fetchUsers(getRandomTime(), getGender());
  };

  window.onload = () => fetchApi();

  return (
    <>
      <div className="bottom-box"></div>
      <div className="bottom-pink"></div>
      <div className="top-box">
        <img src={flower} />
      </div>
      <h1 className="name">{user?.firstname}</h1>
      <h1 className="lname">{user?.lastname}</h1>
      {/* <FontAwesome
        className="super-crazy-colors"
        name="fa-duotone fa-venus"
        size="3x"
      /> */}
      <div className="multiple-attributes">
        <h2>{user?.birthday}</h2>
        <h2>{user?.email}</h2>
        <h2>{user?.phone}</h2>
        <h2>{user?.address.city}</h2>
        <h2>{user?.address.country}</h2>
      </div>
    </>
  );
};

export default App;