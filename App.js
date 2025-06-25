import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [display, setDisplay] = useState("");

  const append = (value) => {
    setDisplay(display + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Enter Number Correctly");
    }
  };

  const handleBackspace = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  const lightMode = () => {
    const Background = document.querySelector('.calculator');
    Background.style.background = 'white';
  }
  const darkMode = () => {
    const Background = document.querySelector('.calculator');
    Background.style.background = 'rgb(37, 37, 37)';
  }

  return (

    <div className="Background">
      <div className="btnBox">
        <h1>Calculator</h1>
        <button className="btn" onClick={lightMode}>Light Mode</button>
        <button className="btn" onClick={darkMode}>dark Mode</button>
      </div>
      <div className="calculator">
        <input type="text" value={display} className="Display" placeholder="8888888888888888888888888888" readOnly />
        <div className="buttons">
          <button onClick={clearDisplay}>CE</button>
          <button onClick={() => append("*")}>X</button>
          <button onClick={() => append("-")}>-</button>
          <button onClick={handleBackspace}>
            <svg fill="white" width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3H8.446c-.44 0-1.071.236-1.402.525L.248 9.473a.682.682 0 0 0 0 1.053l6.796 5.947c.331.289.962.527 1.402.527H18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2.809 11l-2.557-2.557L10.078 14l-1.443-1.443L11.191 10 8.635 7.443 10.078 6l2.557 2.555L15.19 6l1.444 1.443L14.078 10l2.557 2.555L15.191 14z" /></svg></button>
          <button onClick={() => append("9")}>9</button>
          <button onClick={() => append("8")}>8</button>
          <button onClick={() => append("7")}>7</button>
          <button onClick={() => append("%")}>%</button>
          <button onClick={() => append("6")}>6</button>
          <button onClick={() => append("5")}>5</button>
          <button onClick={() => append("4")}>4</button>
          <button onClick={() => append("+")}>+</button>
          <button onClick={() => append("3")}>3</button>
          <button onClick={() => append("2")}>2</button>
          <button onClick={() => append("1")}>1</button>
          <button onClick={() => append("/")}>/</button>
          <button onClick={() => append("00")}>00</button>
          <button onClick={() => append("0")}>0</button>
          <button onClick={() => append(".")}>.</button>
          <button onClick={calculate} className="equal">=</button>
        </div>
      </div>
    </div>
  );
}
