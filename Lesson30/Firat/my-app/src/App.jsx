import "./App.css";
// Example of renaming imported component
import { List as TodoList } from "./components/List";
import { InputForm } from "./components/InputForm";
import {
  Exercise1Button,
  Exercise1Button2,
} from "./components/Exercise1Button";
import { Exercise3Button } from "./components/Exercise3Button";
import { Exercise6Component } from "./components/Exercise6Component";
import { Exercise2 } from "./components/Exercise2";
import { Exercise4 } from "./components/Exercise4";
import { Exercise5 } from "./components/Exercise5";
import { Exercise7 } from "./components/Exercise7";
import { Exercise8 } from "./components/Exercise8";
import { Exercise9 } from "./components/Exercise9";
import { Exercise10 } from "./components/Exercise10";

export const App = () => {
  return (
    <div className="app">
      <header className="app-header">To-do list</header>
      <TodoList />
      <InputForm label="Title" age="22" />
      {/* ## Exercise 1: Basic Button Click
Create a button in a functional component. When clicked, change the text of the button to "Clicked!". */}
      {/*## Exercise 3: Click Counter
Develop a click counter using a functional component. Display the number of times a button has been clicked, and update it with each click.*/}
      <Exercise1Button />
      <Exercise1Button2 />
      <Exercise2 />
      <Exercise3Button />
      <Exercise4 />
      <Exercise5 />
      <Exercise6Component />
      <Exercise7 />
      <Exercise8 />
      <Exercise9 />
      <Exercise10 />
    </div>
  );
};
