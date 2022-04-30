import './counter.css';

import { useCounter } from '../../hooks';

export const CounterWithCustomHook = () => {
  const factor = 5;

  const { state, increment, decrement, reset } = useCounter(10);
  return (
    <>
      <h1>Counter with Hook: {state}</h1>
      <hr />
      <button
        className='btn btn-primary me-3'
        onClick={() => increment(factor)}
      >
        + {factor}
      </button>
      <button
        className='btn btn-primary me-3'
        onClick={reset}
        disabled={state < 1}
      >
        RESET
      </button>
      <button
        className='btn btn-primary'
        onClick={() => decrement(factor)}
        disabled={state < 1}
      >
        - {factor}
      </button>
    </>
  );
};
