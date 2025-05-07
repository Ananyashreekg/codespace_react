import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  selectCounterValue,
} from './counterSlice';

const Counter = React.memo(() => {
  const count = useSelector(selectCounterValue);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const [error, setError] = useState('');

  const handleIncrement = useCallback(() => dispatch(increment()), [dispatch]);
  const handleDecrement = useCallback(() => dispatch(decrement()), [dispatch]);
  const handleReset = useCallback(() => dispatch(reset()), [dispatch]);

  const handleAddAmount = () => {
    if (isNaN(incrementAmount)) {
      setError('Please enter a valid number');
      return;
    }
    setError('');
    dispatch(incrementByAmount(Number(incrementAmount)));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} style={{ margin: '0 12px' }}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <br /><br />
      <input
        type="number"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handleAddAmount}>Increment / Decrement by Number</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
});

export default Counter;
