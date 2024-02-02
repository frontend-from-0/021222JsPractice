import './App.css';
// Example of renaming imported component
import React from 'react';
import { List as TodoList} from './components/List';
import {InputForm} from './components/InputForm';
import { Exercise1Button } from './components/Exercise1Button';
import { Exercise2Toggle} from './components/Exercise2Toggle';
import { Exercise3Button } from './components/Exercise3Button';
import { Exercise4Handler} from './components/Exercise4Handler';
import { Exercise6Component2 } from './components/Exercise6Component';
import { Exercise5Mouse } from './components/Exercise5Mouse';
import { Exercise7Event } from './components/Exercise7Event';
import { Exercise8List } from './components/Exercise8List';
import { Exercise9Multiple } from './components/Exercise9Multiple';
import { Exercise10Double } from './components/Exercise10Double';

export const App = () => {

  return (
    <div className="app">
      <header className="app-header">
        To-do list
      </header>
      <TodoList />
      <InputForm label="Title" age="22"/>
      <Exercise1Button />
      <Exercise2Toggle />
      <Exercise3Button />
      <Exercise4Handler />
      <Exercise5Mouse />
      <Exercise6Component2/>
      <Exercise7Event />
      <Exercise8List />
      <Exercise9Multiple />
      <Exercise10Double />
    </div>
  );
};

