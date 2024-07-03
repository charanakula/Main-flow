import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import '../styles/styles.css'; // Import the CSS file

const Calculator = () => {
  const [currentInput, setCurrentInput] = useState('0');
  const [previousInput, setPreviousInput] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (value) => {
    if (isNaN(value)) { // Check if it's an operation symbol
      setOperation(value);
      setCurrentInput(currentInput === '0' ? value : currentInput); // Set operation symbol or keep current input if not 0
    } else if (operation === null) {
      setCurrentInput(currentInput === '0' ? value : currentInput + value); // Handle number input before operation
    } else {
      setPreviousInput(currentInput);
      setCurrentInput(value);
    }

    // Add a temporary press effect (optional)
    const button = document.querySelector(`button[value="${value}"]`);
    if (button) {
      button.classList.add('pressed');
      setTimeout(() => button.classList.remove('pressed'), 100); // Remove after 100ms
    }
  };

  const handleEqual = () => {
    if (operation !== null && previousInput !== null) {
      const prev = parseFloat(previousInput);
      const curr = parseFloat(currentInput);
      let result;
      switch (operation) {
        case '+':
          result = prev + curr;
          break;
        case '-':
          result = prev - curr;
          break;
        case '*':
          result = prev * curr;
          break;
        case '/':
          if (curr === 0) {
            result = 'Error'; // Handle division by zero
          } else {
            result = prev / curr;
          }
          break;
        default:
          break;
      }
      setOperation(null);
      setPreviousInput(null);
      setCurrentInput(result.toString());
    }
  };

  return (
    <div className="calculator">
      <Display value={currentInput} />
      <div className="button-container">
        <Button value="7" onClick={handleClick} />
        <Button value="8" onClick={handleClick} />
        <Button value="9" onClick={handleClick} />
        <Button value="/" onClick={handleClick} className="operation" /> {/* Add operation class */}
        <Button value="4" onClick={handleClick} />
        <Button value="5" onClick={handleClick} />
        <Button value="6" onClick={handleClick} />
        <Button value="*" onClick={handleClick} className="operation" /> {/* Add operation class */}
        <Button value="1" onClick={handleClick} />
        <Button value="2" onClick={handleClick} />
        <Button value="3" onClick={handleClick} />
        <Button value="-" onClick={handleClick} className="operation" /> {/* Add operation class */}
        <Button value="0" onClick={handleClick} />
        <Button value="." onClick={handleClick} /> {/* Add decimal button */}
        <Button value="C" onClick={() => setCurrentInput('0')} /> {/* Clear button */}
        <Button value="=" onClick={handleEqual} />
      </div>
    </div>
  );
};

export default Calculator;
