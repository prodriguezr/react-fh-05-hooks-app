import { useEffect, useState } from 'react';
import './effects.css';
import Message from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log('hey!');
  }, []);

  useEffect(() => {
    // console.log('hey! A change ocurred in FormState');
  }, [formState]);

  useEffect(() => {
    // console.log('hey! Email changed');
  }, [email]);

  const handleInoutChange = ({ target: { name, value } }) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className='form-group'>
        <input
          type='text'
          name='name'
          value={name}
          className='form-control'
          placeholder='Your name'
          autoComplete='off'
          onChange={handleInoutChange}
        />
        <input
          type='text'
          name='email'
          value={email}
          className='form-control'
          placeholder='yourname@gmail.com'
          autoComplete='off'
          onChange={handleInoutChange}
        />
        {name === '123' && <Message />}
      </div>
    </>
  );
};
