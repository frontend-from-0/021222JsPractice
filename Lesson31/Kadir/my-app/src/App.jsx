// import { createContext } from "react";
// import "./App.css";
// import { List } from "./components/List";
// import { Navbar } from './components/Navbar';
// import { AddButton } from './components/AddButton';

// // Ilk context olusturma
// export const AppContext = createContext();

// export const App = () => {
//   const loggedInUser = {
//     isLoggedInUser: true,
//     name: "John"
//   };
//   const loggedOutUser = {
//     isLoggedInUser: false
//   };

//   return (
//     <AppContext.Provider value={{user: loggedOutUser}}>
//       <div className="container">
//         <Navbar />
//         <div className="app">
//           <List />
//         </div>
//         <div className="app">
//           <AddButton />
//         </div>
//       </div>
//     </AppContext.Provider>
//   );
// };

// Try to finish the Todo list application that we did in the lesson.
// Add input to add new todo items, a submit button and a delete button to each of the list elements.

// App.jsx
import React, { createContext, useState } from "react";
import "./App.css";
import { List } from "./components/List";
import { Navbar } from "./components/Navbar";
// import { AddButton } from "./components/AddButton";

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

  // const handleAddItem = (text) => {
  //   // Add your logic to handle the new item here
  //   console.log("New item:", text);
  // };

  return (
    <AppContext.Provider value={{ user, handleLogin, handleLogout }}>
      <div className="container">
        <Navbar />
        <div className="app">
          <List />
          {/* // Render input and submit button from AddButton in App
          <AddButton addItem={handleAddItem} /> */}
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
