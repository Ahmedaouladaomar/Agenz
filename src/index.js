import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
import { SnackbarProvider } from 'notistack';
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <SnackbarProvider autoHideDuration={3500} maxSnack={3}>
    <App />
  </SnackbarProvider>
);

reportWebVitals();
