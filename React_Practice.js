import React, { useState } from "react";
const MealList = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const reactElementWJSX = <h1></h1>;

  const demoCreateReactElement = React.createElement("h1", { className });

  return (
    <h1
      onClick={() => {
        console.log("HELLO");
      }}
    >
      There will be meals list here.
    </h1>
  );
};

import { BrowserRouter } from "react-router-dom";

<BrowserRouter></BrowserRouter>;

import { Route, Switch } from "react-router-dom";

import { Link } from "react-router-dom";

const navBar = () => {
  return (
    <head>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>{" "}
          </li>
          <li>
            <Link to="/new">Add</Link>
          </li>
        </ul>
      </nav>
    </head>
  );
};
import { useHistory } from "react-router-dom";

const history = useHistory();

const fetchData = () => {
  fetch("url", {
    method: "POST",
    body: JSON.stringify(object),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      res.json;
      history.push("/");
    })
    .catch((e) => {});
};

import { useRef } from "react";

const titleInputRef = useRef();

const formSubmitHandler = (event) => {
  event.preventDefault();
  const enteredTitle = titleInputRef.current.value;
};

<input ref={titleInputRef}></input>;

useEffect(() => {
  return () => {};
}, []);

import { createContext, useState } from "React";
// user-context.js
const UserContext = {
  id: "",
  userName: "",
  favorites: [],
};

export const UserContextProvider = (props) => {
  const [id, setId] = useState("");
  const [userName, setUserName] = useState("");
  const [favorites, useFavorites] = useState([]);

  const addUserHandler = () => {};

  const removeUserHandler = () => {};

  const addFavoriteHandler = () => {};

  const removeFavoriteHandler = () => {};

  const context = {
    id: id,
    userName: userName,
    favorites: favorites,
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
