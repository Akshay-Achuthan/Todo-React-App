import React, {useState} from 'react';
import './App.css';

import TodoMain from "./component/TodoMain";
import TodoLists from './component/TodoLists';

const dataLists = [
  "This is my first task",
  "This is my second task",
];

function App() {


  const [newEnteredTask,setNewEnteredTask] = useState(dataLists);
  
  const newUserEnteredData = (enteredTask) => {
    setNewEnteredTask((prevData) => {
      return [enteredTask,...prevData];
    });
  }

  return (
    <div className="App">
      <h1>Todo React</h1>
      <TodoMain onUserData={newUserEnteredData}/>
      <TodoLists dataLists={newEnteredTask} newTask={newEnteredTask}/>
    </div>
  );
}

export default App;
