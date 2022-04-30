import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleInoutChange = ({ target: { name, value } }) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    handleInoutChange,
  };
};
