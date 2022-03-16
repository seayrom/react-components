import React from "react";

export const Counter = () => {
  const [value, setValue] = React.useState(0);
  const handleIncrease = () => {
    setValue((prevValue) => prevValue + 1);
  };
  const handleDecrease = () => {
    setValue((prevValue) => prevValue - 1);
  };
  if (value < 0) {
    alert("value cannot be negative");
    setValue(0);
  }
  if (value > 10) {
    alert("value cannot exceed 10");
    setValue(10);
  }

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};
