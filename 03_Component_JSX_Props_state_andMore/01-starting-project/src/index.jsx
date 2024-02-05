// Importing the ReactDOM library from the "react-dom/client" module.
// ReactDOM is used to render React components to the DOM.
import ReactDOM from "react-dom/client";

// Importing the App component from the "App.jsx" file.
// This is the main component of your React application.
import App from "./App.jsx";

// Importing the CSS styles from the "index.css" file.
// This file contains global styles for your application.
import "./index.css";

// Getting the DOM element with the id of "root".
// This is where your React application will be attached.
const entryPoint = document.getElementById("root");

// Creating a root React fiber with the "root" DOM element and rendering the App component into it.
// This is the starting point of your React application.
ReactDOM.createRoot(entryPoint).render(<App />);
