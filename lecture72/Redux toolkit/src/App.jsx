import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleResetClick() {
    dispatch(reset());
  }

  function handleIncAmountClick() {
    dispatch(incrementByAmount(Number(amount))); // Convert to number here
  }

  return (
    <div className='container'>
      <button onClick={handleIncrementClick}> + </button>
      <p>Count: {count}</p>
      <button onClick={handleDecrementClick}> - </button>
      <br />
      <br />
      <button onClick={handleResetClick}> Reset </button>

      <input
        type='number' // Ensure 'number' is lowercase
        value={amount}
        placeholder='Enter Amount'
        onChange={(e) => setAmount(e.target.value)} // Store as string
      />
      <br />
      <br />
      <button onClick={handleIncAmountClick}> Inc by Amount </button>
    </div>
  );
}

export default App;
