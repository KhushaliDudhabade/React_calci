import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleNum1Change = (e) => setNum1(e.target.value);
  const handleNum2Change = (e) => setNum2(e.target.value);

  const validateInputs = () => {
    if (num1 === '' || num2 === '') {
      setError('Both fields are required');
      return false;
    }
    if (isNaN(num1) || isNaN(num2)) {
      setError('Inputs must be valid numbers');
      return false;
    }
    setError('');
    return true;
  };

  const handleOperation = (operation) => {
    if (!validateInputs()) return;

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    let res;
    switch (operation) {
      case 'add':
        res = number1 + number2;
        break;
      case 'sub':
        res = number1 - number2;
        break;
      case 'mul':
        res = number1 * number2;
        break;
      case 'div':
        res = number1 / number2;
        break;
      default:
        return;
    }
    setResult(res);
  };
  return (
    <div className="App">
      <div className="container">
        <h1 style={{ color: 'rgb(74, 5, 144)'}}>Simple React Calculator</h1>
        <input type='text' placeholder='Num 1' className='inputbox' value={num1} onChange={handleNum1Change}></input><br/>
        <input type='text' placeholder='Num 2' className='inputbox' value={num2} onChange={handleNum2Change}></input><br/>

        <button className='btn' onClick={() => handleOperation('add')}>+</button>
        <button className='btn' onClick={() => handleOperation('sub')}>-</button>
        <button className='btn' onClick={() => handleOperation('mul')}>*</button>
        <button className='btn' onClick={() => handleOperation('div')}>/</button>

        {error && <p style={{ color: 'red',fontSize:"20px" }}>{error}</p>}
        {result !== null && !error && <p style={{ color: 'green',fontSize:"20px" }}>Result: {result}</p>}
      </div>
      
    </div>
  );
}

export default App;
