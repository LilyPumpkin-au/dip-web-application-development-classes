// note this file needs to be moved into my-react-app to work
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "../asset/css/style.css";

export default function StyledComponent() {
  // add useState() seconds, change the number to change the duration
  const [animationDuration, setAnimationDuration] = useState(5);

  // add useEffect
  useEffect(() => {
    console.log("Component mounted or animationDuration Changed:");
  }, [animationDuration]);

  return (
    <section
      className="animatedSection"
      style={{ animationDuration: `${animationDuration}s` }}
    >
      This is a styled section with animation
    </section>
  );
}
