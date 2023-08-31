import './App.css';
// Example of renaming imported component
import { List as TodoList} from './components/List';
import {InputForm} from './components/InputForm';
import { Exercise1Button, Exercise1Button2,Exercise1Button3 } from './components/Exercise1Button';
import { Exercise3Button, Exercise3Button2 } from './components/Exercise3Button';
import { Exercise6Component, Exercise6Component2 } from './components/Exercise6Component';

export const App = () => {

  return (
    <div className="app">
      <header className="app-header">
        To-do list
      </header>
      <TodoList />
      <InputForm label="Title" age="22"/>
      {/* ## Exercise 1: Basic Button Click
Create a button in a functional component. When clicked, change the text of the button to "Clicked!". */}
{/*## Exercise 3: Click Counter
Develop a click counter using a functional component. Display the number of times a button has been clicked, and update it with each click.*/}
      <Exercise1Button />
      <Exercise1Button2 />
      <Exercise1Button3 />
      <Exercise3Button />
      <Exercise3Button2 />
      <Exercise6Component/>
      <Exercise6Component2/>
    </div>
  );
};
