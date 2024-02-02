import { createContext } from "react";
import "./App.css";
import { List } from "./components/List";
import { Navbar } from './components/Navbar';

// Ilk context olusturma
export const AppContext = createContext();

export const App = () => {
  const loggedInUser = {
    isLoggedInUser: true,
    name: "John"
  };
  const loggedOutUser = {
    isLoggedInUser: false
  };
  
  return (
    <AppContext.Provider value={{user: loggedOutUser}}>
      <div className="container">
        <Navbar />
        <div className="app">
          <List />
        </div>
      </div>
    </AppContext.Provider>
  );
};
