import React, { useState } from "react";
import "./TodoMain.css";

import Card from "../UI/Card";

const TodoMain = (props) => {

  const today = new Date();
  const formatter = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit' });
  let formattedDate = formatter.format(today);
  
  const [enteredTask, setEnteredTask] = useState('');

  const userInputHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  const addTaskHandler = () => {
    if (enteredTask.trim() !== "") {
      const taskObject = {
        text: enteredTask,
        id: Math.random(),
        date: formattedDate
      };
      props.onUserData(taskObject);
      setEnteredTask('');
    }
  };

  return (
    <Card>
      <input
        className="card-input"
        value={enteredTask}
        onChange={userInputHandler}
        type="text"
      />
      <button className="card-button" onClick={addTaskHandler}>
        Add Task
      </button>
    </Card>
  );
};

export default TodoMain;
