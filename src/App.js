import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  // Evaluate the expression using eval (use cautiously)
  // eslint-disable-next-line
  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  // Clear the input
  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="display">{input}</div>
      <div className="buttons">
        <div className="button-row">
          <button className="clear-button" onClick={handleClear}>C</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('7')}>7</button>
          <button className="operator" onClick={() => handleClick('+')}>+</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button className="operator" onClick={() => handleClick('-')}>-</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('1')}>1</button>
          <button className="operator" onClick={() => handleClick('*')}>*</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button className="equal-button" onClick={handleEqual}>=</button>
          <button className="operator" onClick={() => handleClick('/')}>/</button>
        </div>
      </div>
    </div>
  );
}

export default App;
