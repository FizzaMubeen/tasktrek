import React from "react";
import Todo from "../assets/direct-hit.png";
import Doing from "../assets/glowing-star.png";
import Done from "../assets/check-mark-button.png";
import "./TaskColumn.css";

const TaskColumn = (props) => {
  return (
    <div className="task_column">
      <section className="task_column">
        <h2 className="task_column_heading">
          <img className="task_column_icon" src={props.icon} alt="" />{" "}
          {props.title}
        </h2>
      </section>

      {/* <section className="task_column">
        <h2 className="task_column_heading">
          <img className="task_column_icon" src={Doing} alt="" /> Doing
        </h2>
      </section>

      <section className="task_column">
        <h2 className="task_column_heading">
          <img className="task_column_icon" src={Done} alt="" /> Done
        </h2>
      </section> */}
    </div>
  );
};

export default TaskColumn;
