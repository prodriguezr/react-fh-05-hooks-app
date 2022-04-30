import { MultipleCustomHooks } from '../03-examples';
import { useState } from 'react';

import './effects.css';

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Real Example Ref</h1>
      <hr />
      {show && <MultipleCustomHooks />}
      <button className='btn btn-primary' onClick={() => setShow(!show)}>
        Show/Hide component
      </button>
    </div>
  );
};
