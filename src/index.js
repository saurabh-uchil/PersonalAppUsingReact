import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigationProvider } from "./Context/NavigationContext";

const element = document.getElementById("root");

const root = ReactDOM.createRoot(element);

root.render(
<NavigationProvider>
    <App />
</NavigationProvider>
);