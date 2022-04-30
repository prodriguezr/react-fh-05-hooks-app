import { useCallback, useState } from 'react';
import './effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(
    (factor) => {
      setCounter((c) => c + factor);
    },
    [setCounter]
  );

  return (
    <div>
      <h1>useCallback Hook {counter}</h1>
      <hr />
      <ShowIncrement increment={() => increment(5)} />
    </div>
  );
};
