import React, { useState } from "react";
import DateInputComponent from "./components/DateInputComponent";

function App() {
  const [date, setDate] = useState("");

  return (
    <>
      <DateInputComponent newDate={date} onDateChange={setDate} />
    </>
  );
}

export default App;
