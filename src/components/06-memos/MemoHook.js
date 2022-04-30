import './effects.css';
import { useCounter } from '../../hooks';
import { heavyProcess } from '../../helpers';
import { useMemo, useState } from 'react';

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);

  const [show, setShow] = useState(true);

  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

  return (
    <div>
      <h1>Memo Hook</h1>
      <hr />
      <p>{memoHeavyProcess}</p>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <button className='btn btn-primary me-4' onClick={increment}>
        + 1
      </button>
      <button className='btn btn-primary' onClick={() => setShow(!show)}>
        Show / Hide {' => ' + JSON.stringify(show)}
      </button>
      <hr />
    </div>
  );
};
