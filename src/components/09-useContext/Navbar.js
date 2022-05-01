import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='/'>
          useContext
        </NavLink>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <NavLink className='nav-link' to='/'>
              Home
            </NavLink>
            <NavLink className='nav-link' to='/login'>
              Login
            </NavLink>
            <NavLink className='nav-link' to='/about'>
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
