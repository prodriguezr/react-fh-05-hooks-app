import { renderHook, act } from '@testing-library/react';

import { useCounter } from '../../hooks';

describe('Test on useCounter', () => {
  test('Should return default values', () => {
    const {
      result: {
        current: { counter, increment, decrement, reset },
      },
    } = renderHook(() => useCounter());

    expect(counter).toBe(10);
    expect(typeof increment).toBe('function');
    expect(typeof decrement).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('Must return value passed as property', () => {
    const n = 1000;
    const {
      result: {
        current: { counter },
      },
    } = renderHook(() => useCounter(n));

    expect(counter).toBe(n);
  });

  test('Must be increment the value of the counter', () => {
    const n = 1000;

    const { result } = renderHook(() => useCounter(n));
    const { increment } = result.current;

    act(() => {
      increment();
    });

    const { counter } = result.current;

    expect(counter).toBe(n + 1);
  });

  test('Must be decrement the value of the counter', () => {
    const n = 1000;

    const { result } = renderHook(() => useCounter(n));
    const { decrement } = result.current;

    act(() => {
      decrement();
    });

    const { counter } = result.current;

    expect(counter).toBe(n - 1);
  });

  test('Must be reset the value of the counter', () => {
    const n = 1000;

    const { result } = renderHook(() => useCounter(n));
    const { decrement, reset } = result.current;

    act(() => {
      decrement();
      reset();
    });

    const { counter } = result.current;

    expect(counter).toBe(n);
  });
});
