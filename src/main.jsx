import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import App from "./App.jsx";
import Card from "./components/Card.jsx";
import CreateToDo from "./components/CreateToDo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Card />
    <CreateToDo />
  </StrictMode>
);

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";  // Correct import for React 18
// import "./index.css";
// import Card from "./components/Card.jsx";

// // Using the correct createRoot method
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Card />
//   </StrictMode>
// );
