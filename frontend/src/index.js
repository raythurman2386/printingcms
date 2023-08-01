import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import ReactGA from "react-ga4";

ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
