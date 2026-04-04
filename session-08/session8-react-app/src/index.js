import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";

// const App = () => <h1>Hello, React!</h1>;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
