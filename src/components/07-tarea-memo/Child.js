import React from 'react';

export const Child = React.memo(({ num, increment }) => {
  console.log('  Me volví a generar :(  ');

  return (
    <button className='btn btn-primary me-3' onClick={() => increment(num)}>
      {num}
    </button>
  );
});
