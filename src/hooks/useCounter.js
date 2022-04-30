import { useState } from 'react';

export const useCounter = (initialState = 10, factor = 1) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    setCounter(counter + factor);
  };

  const decrement = () => {
    if (counter < 1) return;

    setCounter(counter - factor);
  };

  const reset = () => {
    setCounter(initialState);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
