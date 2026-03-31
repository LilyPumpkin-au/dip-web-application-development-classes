import React, { useState} from "react";
import DateInputComponent from "./components/DateInputComponent";

const App = () => {
    cosnt [DataTransfer, setDate] = useState("");
    return (
    <>
        <DateInputComponent onDateChange={setDate}/>
        <StyleComponet />
    </>
    );
};

export default App;