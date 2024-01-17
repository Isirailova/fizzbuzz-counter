import React, { useState } from "react";
import "./fizzBuzz.style.css";

const FizzBuzz = () => {
  const [count, setCount] = useState(1);

  const onMinusClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const onPlusClick = () => {
    if (count < 100) {
      setCount(count + 1);
    }
  };

  const getFizzBuzz = () => {
    if (count % 3 === 0 && count % 5 === 0) {
      return "FizzBuzz";
    } else if (count % 3 === 0) {
      return "Fizz";
    } else if (count % 5 === 0) {
      return "Buzz";
    } else {
      return count;
    }
  };
  return (
    <div className="fizzBuzz">
      <div className="button-group">
        <button onClick={onMinusClick}> - </button>
        <p>{getFizzBuzz()}</p>
        <button onClick={onPlusClick}> + </button>
      </div>
    </div>
  );
};

export default FizzBuzz;
