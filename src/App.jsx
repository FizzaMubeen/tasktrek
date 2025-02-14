import React from "react"; //rafce
import "./App.css";
import TaskForm from "./components/TaskForm";

const App = () => {
  return (
    <div className="app">
      <TaskForm></TaskForm>
      <header className="app_header"> Header Section </header>
      <main className="app_main">
        <section className="task_column">Section 1</section>
        <section className="task_column">Section 2</section>
        <section className="task_column">Section 3</section>
      </main>
    </div>
  );
};

export default App;
