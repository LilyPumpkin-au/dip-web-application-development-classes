// note this file needs to be moved into my-react-app to work
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "../asset/css/style.css";

export default function LikeDislikeButton() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  function handleLike() {
    setLikes((prev) => prev + 1);
    console.log(`Good: ${likes + 1}`);
  }

  function handleDislike() {
    setDislikes((prev) => prev + 1);
    console.log(`Dislike: ${dislikes + 1}`);
  }

  return (
    <div>
      <button onClick={handleLike}> 👍 {likes} </button>
      <button onClick={handleDislike}> 👎 {dislikes} </button>
    </div>
  );
}
