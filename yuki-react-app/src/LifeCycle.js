//Set break points where you lose the code
import React, { useState, useEffect } from "react";

function Lifecycle() {
  const [count, setCount] = useState(0);

  // useEffect for componentDidMount and componentDidUpdate
  useEffect(() => {
    console.log("Component mounted or updated"); // debugger

    return () => {
      //debugger
      console.log("Component will unmount"); // debugger
    }; // debugger
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1); // debugger
  };

    const decrementCount = () => {
    setCount(count - 1); // debugger
  };

  // return (
  //   <div>
  //     <h1>Lifecycle Monitor</h1>
  //     <p>Count: {count}</p>
  //     <button onClick={incrementCount}>Increment</button>
  //   </div>
  // );

    return (
    <div>
      <h1>Lifecycle Monitor</h1> 
      
      <CounterDisplay count={count} />
      <CounterControls
        onIncrease={incrementCount}
        onDecrease={decrementCount}/>
    </div>
  );

  // Child number 1
  function CounterDisplay({count}){
    return <p>Current Count Value : { count } </p>
  }

    // Child number 2
  function CounterControls({count, onIncrease, onDecrease}){
    return (

      <>
      <button onClick={onIncrease}>Increase</button>
      <button onClick={onDecrease}>Decrease</button>
      {console.log(count)}
    
      </>
    );
  }

}

export default Lifecycle;
