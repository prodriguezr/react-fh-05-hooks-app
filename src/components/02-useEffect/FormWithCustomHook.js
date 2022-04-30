import { useEffect } from 'react';
import { useForm } from '../../hooks';
import './effects.css';

export const FormWithCustomHook = () => {
  const { values: formState, handleInoutChange } = useForm({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formState;

  useEffect(() => {
    console.log('Email changed');
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form with custom Hook</h1>
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
        <input
          type='password'
          name='password'
          value={password}
          className='form-control'
          placeholder='*********'
          onChange={handleInoutChange}
        />
        <button type='submit' className='btn btn-primary mt-4'>
          Save
        </button>
      </div>
    </form>
  );
};
