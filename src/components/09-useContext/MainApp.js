import { AppRouter, UserContext } from './';
import './styles.css';
import { useState } from 'react';

export const MainApp = () => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
};
