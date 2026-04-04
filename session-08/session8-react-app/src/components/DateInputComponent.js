import React from "react";

function DateInputComponent({ newDate = "", onDateChange }) {
  const inputStyle = {
    margin: "5px",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };
  var newDate = "";

  const handleChange = (event) => {
    // get the event target and extract the value
    // debugger;
    onDateChange(event.target.value);
  };

  return (
    <input
      className="input"
      type="date"
      style={inputStyle}
      onChange={handleChange}
    />
  );
}

export default DateInputComponent;
