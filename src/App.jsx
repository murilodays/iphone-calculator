import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('0');
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const handleButtonClick = (value) => {
    if (value === 'AC') {
      setInput('0');
      setOperator(null);
      setPreviousValue(null);
    } else if (value === '=') {
      if (operator && previousValue !== null) {
        const result = calculate(previousValue, input, operator);
        setInput(String(result));
        setOperator(null);
        setPreviousValue(null);
      }
    } else if (['+', '-', 'X', '÷'].includes(value)) {
      if (previousValue === null) {
        setPreviousValue(input);
      } else if (operator) {
        const result = calculate(previousValue, input, operator);
        setInput(String(result));
        setPreviousValue(String(result));
      }
      setOperator(value);
      setInput('0');
    } else {
      if (input === '0') {
        setInput(value);
      } else {
        setInput(input + value);
      }
    }
  };

  const calculate = (prev, current, operator) => {
    const prevNum = parseFloat(prev);
    const currentNum = parseFloat(current);
    switch (operator) {
      case '+':
        return prevNum + currentNum;
      case '-':
        return prevNum - currentNum;
      case 'X':
        return prevNum * currentNum;
      case '÷':
        return prevNum / currentNum;
      default:
        return currentNum;
    }
  };

  return (
    <div className='container'>
      <div className="result">
        <span>{input}</span>
      </div>

      <div className="buttons">
        <button className='item i1' onClick={() => handleButtonClick('AC')}>AC</button>
        <button className='item i2' onClick={() => handleButtonClick('+/-')}>+/-</button>
        <button className='item i3' onClick={() => handleButtonClick('%')}>%</button>
        <button className='item i4' onClick={() => handleButtonClick('÷')}>÷</button>
        <button className='item i5' onClick={() => handleButtonClick('7')}>7</button>
        <button className='item i6' onClick={() => handleButtonClick('8')}>8</button>
        <button className='item i7' onClick={() => handleButtonClick('9')}>9</button>
        <button className='item i8' onClick={() => handleButtonClick('X')}>X</button>
        <button className='item i9' onClick={() => handleButtonClick('4')}>4</button>
        <button className='item i10' onClick={() => handleButtonClick('5')}>5</button>
        <button className='item i11' onClick={() => handleButtonClick('6')}>6</button>
        <button className='item i12' onClick={() => handleButtonClick('-')}>-</button>
        <button className='item i13' onClick={() => handleButtonClick('1')}>1</button>
        <button className='item i14' onClick={() => handleButtonClick('2')}>2</button>
        <button className='item i15' onClick={() => handleButtonClick('3')}>3</button>
        <button className='item i16' onClick={() => handleButtonClick('+')}>+</button>
        <button className='item i17' onClick={() => handleButtonClick('0')}>0</button>
        <button className='item i18' onClick={() => handleButtonClick(',')}>,</button>
        <button className='item i19' onClick={() => handleButtonClick('=')}>=</button>
      </div>
    </div>
  );
}

export default App;