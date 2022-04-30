import { useLayoutEffect, useRef, useState } from 'react';
import { useCounter, useFetch } from '../../hooks';
import './effects.css';

export const Layout = () => {
  const { increment, counter } = useCounter(1);
  const [boxSize, setBoxSize] = useState({});

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const paragraph = useRef();

  const { quote } = !!data && data[0];

  useLayoutEffect(() => {
    setBoxSize(paragraph.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />
      <>
        <blockquote className='blockquote text-end'>
          <p ref={paragraph} className='text-end'>
            {quote}
          </p>
        </blockquote>
        <div className='text-end'>
          <button className='btn btn-primary' onClick={() => increment()}>
            Next Quote
          </button>
        </div>
        <pre>{JSON.stringify(boxSize)}</pre>
      </>
    </div>
  );
};
