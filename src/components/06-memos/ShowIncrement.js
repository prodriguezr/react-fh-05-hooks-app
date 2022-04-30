import { memo } from 'react';

export const ShowIncrement = memo(({ increment }) => {
  console.log('I regenerated');

  return (
    <button className='btn btn-primary' onClick={increment}>
      Increment
    </button>
  );
});
