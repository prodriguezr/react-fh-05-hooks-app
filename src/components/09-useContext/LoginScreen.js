import { useContext } from 'react';

import { UserContext } from '.';

import './styles.css';

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button
        className='btn btn-primary'
        onClick={() =>
          setUser({
            id: '4567',
            name: 'Marisel',
            email: 'marisel@gmail.com',
          })
        }
      >
        Log in
      </button>
    </div>
  );
};
