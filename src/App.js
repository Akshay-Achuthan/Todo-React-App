import React, {useState} from 'react';
import './App.css';

import TodoMain from "./component/TodoMain";
import TodoLists from './component/TodoLists';

const dataLists = [
  {text:"This is my first task", id:0, date: "08/05/2021"},
  {text:"This is my second task", id:1, date: "08/01/2019"},
  {text:"This is my third task", id:2, date: "08/11/2022"},
];

function App() {


  const [newEnteredTask,setNewEnteredTask] = useState(dataLists);
  
  const newUserEnteredData = (enteredTask) => {
    setNewEnteredTask((prevData) => {
      return [enteredTask,...prevData];
    });
  }

  const userDataDelete = (delItem) => {
    setNewEnteredTask((prevData) => {
      return prevData.filter((item) => item.id !== delItem);
    });
  };
 
  return (
    <div className="App">
      <h1>Todo React</h1>
      <TodoMain onUserData={newUserEnteredData}/>
      <TodoLists onUserDelete={userDataDelete} dataLists={newEnteredTask} />
    </div>
  );
}

export default App;
