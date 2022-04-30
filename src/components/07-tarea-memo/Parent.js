import React, { useCallback } from 'react';
import { Child } from './Child';
import { useState } from 'react';

import './style.css';

export const Parent = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [value, setValue] = useState(0);

  // const incrementar = (num) => {
  //   setValor(valor + num);
  // };

  const increment = useCallback(
    (num) => {
      setValue((n) => n + num);
    },
    [setValue]
  );

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {value} </p>

      <hr />

      {numeros.map((n) => (
        <Child key={n} num={n} increment={increment} />
      ))}
      {/* <Child /> */}
    </div>
  );
};
