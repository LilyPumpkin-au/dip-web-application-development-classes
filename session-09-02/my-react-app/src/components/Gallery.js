import React, { useState } from "react";
import sculptureList from "../data/SculptureList";

const app = document.getElementById("app");

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function Gallery() {
  // const { useState } = React;
  // Session9 Activity 2
  debugger;
  // 「配列の中身を取り出してる分割代入（destructuring）
  const [index, setIndex] = useState(0);
  // index → 今の状態（今どの彫刻を表示してるか）
  // setIndex → その状態を変更するための関数
  // 0 → 最初は0番目の彫刻からスタート

  function handleClick() {
    // Loop back to the first sculpture
    // index = 11 and sculptureList.length = 12, (11 + 1) % 12 results in 0, thus looping back to the first sculpture.
    // index = 0 and sculptureList.length = 12, (0 + 1) % 12 results in 1, moving to the next sculpture.
    // index = 5 and sculptureList.length = 12, (5 + 1) % 12 results in 6.
    setIndex((index + 1) % sculptureList.length);
  }

  let sculpture = sculptureList[index];
  console.log(`Just before render  ${sculpture.name} at ${index}`);
  return (
    <>
      <Header title="Develop. Preview. Ship." />
      <button onClick={handleClick}>Next</button>
      {/* <button onClick={handleClick()}>Next</button> */}
      {/* <button onClick={() => setIndex((index + 1) % sculptureList.length)}> */}
      {/* {" "}
        Next
      </button> */}
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}
