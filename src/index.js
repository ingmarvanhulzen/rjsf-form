import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// {
//   "title": "A registration form (nullable)",
//   "description": "A simple form example using nullable types",
//   "type": "object",
//   "properties": {
//     "verlangen": {
//       "type": "string",
//       "title": "Heeft u in de afgelopen 12 maanden regelmatig het verlangen gehad om te stoppen met gebruik?",
//       "enum": ["Ja", "Nee"]
//     },
//     "lastName": {
//       "type": "string",
//       "title": "Last name"
//     },
//     "age": {
//       "type": "integer",
//       "title": "Age"
//     }
//   }
// }
