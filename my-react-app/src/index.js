import React from "react";
import { createRoot } from "react-dom/client";
import { UserProfile } from "./UserObject.js";

// const App = () => <h1>Hello, React!</h1>;
const App = () => (
  <div>
    <UserProfile />
  </div>
);

const root = createRoot(document.getElementById("root"));
root.render(<App />);
