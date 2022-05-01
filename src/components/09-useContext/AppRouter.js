import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AboutScreen, LoginScreen, HomeScreen, Navbar } from './';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/about' element={<AboutScreen />} exact />
            <Route path='/login' element={<LoginScreen />} exact />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
