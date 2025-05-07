import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      const amount = Number(action.payload);
      if (!isNaN(amount)) {
        state.value += amount;
      }
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

// Selector for performance
export const selectCounterValue = (state) => state.counter.value;

export default counterSlice.reducer;
