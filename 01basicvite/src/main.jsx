import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";

// custom react object element
// const reactElement = React.createElement(
//   "a",  // Element
//   {href : "https://google.com" , target : "_blank"},  // Attributes in an object form
//   "Click ME!" // text 
// );

createRoot(document.getElementById("root")).render(
  <App/>
);
