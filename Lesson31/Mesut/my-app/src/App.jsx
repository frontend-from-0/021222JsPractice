import { createContext, useState } from "react";
import "./App.css";
import { List } from "./components/List";
import { Navbar } from "./components/Navbar/index.jsx";
import Input from "./components/Input";

// Ilk context olusturma
// export const AppContext = createContext();
export const AppContext = createContext();

export const App = () => {
  const loggedInUser = {
    isLoggedInUser: true,
    name: "John",
  };
  const loggedOutUser = {
    isLoggedInUser: false,
  };

  const inputHandler = (value) => {
    
  }

  return (
    <AppContext.Provider value={{ user: loggedOutUser }}>
      <div className="container">
        <Navbar />
        <Input inputHandler={inputHandler} value={value} />
        <div className="app">
          <List />
        </div>
      </div>
    </AppContext.Provider>
  );
};
