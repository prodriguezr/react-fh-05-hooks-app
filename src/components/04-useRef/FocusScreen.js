import { useRef } from 'react';

import './effects.css';

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    //document.querySelector('input').select();
    inputRef.current.select();
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        type='text'
        placeholder='Your name'
        className='form-control'
      />
      <button className='btn btn-primary mt-3' onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
