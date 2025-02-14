import React, { useState } from "react";
//React Fragment
const CreateToDo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const tasks = ["Task 1", "Task 2", "Task 3"];

  //   console.log(countArr);

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleChange = () => {
    setInput(event.target.value);
  };
  return (
    <>
      <h1>Tasks: {count}</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick} value="Add Task Button">
        Add Task
      </button>
      <h1>Input: {input}</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li> //Unique key
        ))}
      </ul>
    </>
  );
};

export default CreateToDo;
