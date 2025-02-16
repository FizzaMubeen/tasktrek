//rafce
import React from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {
  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          className="task_input"
          placeholder="Enter Your Task"
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JavaScript" />
            <Tag tagName="React" />

            {/* <button className="tag">HTML</button>
            <button className="tag">CSS</button>
            <button className="tag">JavaScript</button>
            <button className="tag">React</button> */}
          </div>
          <div>
            <select className="task_status">
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
