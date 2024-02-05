
// Try to finish the Todo list application that we did in the lesson.
// Add input to add new todo items, a submit button and a delete button to each of the list elements.

import React, { createContext, useState } from "react";
import "./App.css";
import { List } from "./components/List";
import { Navbar } from "./components/Navbar";

export const AppContext = createContext({ isLoggedInUser: false });

export const App = () => {
  const [user, setUser] = useState({
    isLoggedInUser: false,
    name: "John",
  });

  const handleLogin = () => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(loggedOutUser);
  };


  return (
    <AppContext.Provider value={{ user, handleLogin, handleLogout }}>
      <div className="container">
        <Navbar />
        <div className="app">
          <List />
        </div>
      </div>
    </AppContext.Provider>
  );
};

const loggedInUser = {
  isLoggedInUser: true,
  name: "John",
};

const loggedOutUser = {
  isLoggedInUser: false,
};
