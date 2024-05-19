import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HoverProvider } from "./contexts/HoverContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HoverProvider>
      <App />
    </HoverProvider>
  </React.StrictMode>
);
