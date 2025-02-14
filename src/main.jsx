import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import App from "./App.jsx";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
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
