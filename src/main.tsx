import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";
import "./styles/header.css";

import { App } from "./app.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
