import React, {useState} from "react";
import "./TodoMain.css"

import Card from "../UI/Card"

const TodoMain = (props) => 
{
  const [enteredTask,setEnteredTask] = useState('');

  
  const userInputHandler = (event) => {
    setEnteredTask(event.target.value);
  }

  const addTaskHandler = () =>{
    if(enteredTask === "" || enteredTask === null || enteredTask === undefined){
      return false;
    }else{
      props.onUserData(enteredTask);
    }
    setEnteredTask('');
  }

  return (
    <Card>
      <input className="card-input" value={enteredTask} onChange={userInputHandler} type="text" />
      <button className="card-button" onClick={addTaskHandler}>Add Task</button>
    </Card>
  );
}

export default TodoMain;