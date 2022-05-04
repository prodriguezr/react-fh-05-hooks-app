import { act, renderHook } from '@testing-library/react';

import { useForm } from '../../hooks';

describe('Tests on useForm hook', () => {
  const initForm = {
    name: 'Pablo Rodríguez',
    address: 'María del Pilar 3531',
  };

  test('It should return the default values of the form', () => {
    const {
      result: { current },
    } = renderHook(() => useForm(initForm));
    const [values, f1, f2] = current;

    // console.log(
    //   `Values: ${JSON.stringify(values)} f1: ${typeof f1} f2: ${typeof f2}`
    // );

    expect(values).toEqual(initForm);
    expect(typeof f1).toBe('function');
    expect(typeof f2).toBe('function');
  });

  test('It should change the property name', () => {
    const { result } = renderHook(() => useForm(initForm));
    const [, handleInputChange] = result.current;

    const inputForm = {
      target: {
        name: 'name',
        value: 'Marisel',
      },
    };

    act(() => {
      handleInputChange(inputForm);
    });

    const [values] = result.current;

    expect(values).toEqual({ ...initForm, name: 'Marisel' });
  });

  test('It should reset the form', () => {
    const { result } = renderHook(() => useForm(initForm));
    const [, handleInputChange, reset] = result.current;

    const inputForm = {
      target: {
        name: 'name',
        value: 'Marisel',
      },
    };

    act(() => {
      handleInputChange(inputForm);
      reset();
    });

    const [values] = result.current;

    expect(values).toEqual(initForm);
  });
});
