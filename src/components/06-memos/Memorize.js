import './effects.css';
import { useCounter } from '../../hooks';
import { SmallCounter } from './SmallCounter';
import { useState } from 'react';

export const Memorize = () => {
  const { counter, increment } = useCounter(10);

  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>
        Memorize - Counter: <SmallCounter value={counter} />
      </h1>
      <button className='btn btn-primary me-4' onClick={increment}>
        + 1
      </button>
      <button className='btn btn-primary' onClick={() => setShow(!show)}>
        Show / Hide {JSON.stringify(show)}
      </button>
      <hr />
    </div>
  );
};
