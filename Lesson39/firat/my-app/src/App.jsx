import React from "react";
import "./App.css";
import OpenDialog from "./components/OpenDialog/OpenDialog";
import ChangeBG from "./components/ChangeBG/ChangeBG";

function App() {
  return (
    <div className="App">
      <ChangeBG />
      <OpenDialog />
    </div>
  );
}

export default App;
