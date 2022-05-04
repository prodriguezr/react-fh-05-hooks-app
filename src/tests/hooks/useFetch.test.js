import { renderHook } from '@testing-library/react-hooks';
//import { renderHook } from '@testing-library/react';
import { useFetch } from '../../hooks';

describe('Tests on useFetch hook', () => {
  test('You should get the default information', () => {
    const { result } = renderHook(() =>
      useFetch('https://www.breakingbadapi.com/api/quotes/1')
    );

    const { data, loading, error } = result.current;

    console.log(data, loading, error);

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test('Get the desired information (loading: false, error: null)', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('https://www.breakingbadapi.com/api/quotes/2')
    );

    await waitForNextUpdate({ timeout: 3000 });

    const { data, loading, error } = result.current;

    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test('Must handle error', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('https://reqres.in/apid/users?page=2')
    );

    await waitForNextUpdate({ timeout: 3000 });

    const { data, loading, error } = result.current;

    console.log(JSON.stringify(data), loading, error);

    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe('Information could not be obtained');
  });
});
