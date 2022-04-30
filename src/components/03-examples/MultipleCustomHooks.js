import { useCounter, useFetch } from '../../hooks';
import './effects.css';

export const MultipleCustomHooks = () => {
  const { increment, decrement, counter } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {loading ? (
        <div className='alert alert-info text-center'>Loading...</div>
      ) : (
        <>
          <blockquote className='blockquote text-end'>
            <p className='me-0'>{quote}</p>
            <footer className='blockquote-footer'>{author}</footer>
          </blockquote>
          <div className='text-end'>
            <button
              disabled={counter <= 1}
              className='btn btn-primary me-3'
              onClick={() => decrement()}
            >
              Previous Quote
            </button>
            <p>Quote: {counter}</p>
            <button className='btn btn-primary' onClick={() => increment()}>
              Next Quote
            </button>
          </div>
        </>
      )}
    </div>
  );
};
