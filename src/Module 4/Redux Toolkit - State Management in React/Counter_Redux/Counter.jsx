import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())} style={{ margin: '0 10px' }}>
        Decrement
      </button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <br /><br />
      <input
        type="number"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(Number(e.target.value))}
        placeholder="Enter amount"
      />
      <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
        Increment by Amount
      </button>
    </div>
  );
};

export default Counter;
