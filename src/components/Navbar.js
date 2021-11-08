import React from 'react';
import { NavLink } from 'react-router-dom';
import planetLogo from '../img/planet.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/profile',
      text: 'My profile',
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light panel-bg">
      <div className="d-flex container justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img src={planetLogo} alt="Logo" />
          <span>Space Travelers' Hub</span>
          <ul className="navbar-nav">
            {links.map((link) => (
              <li key={link.id} className="nav-item ps-3">
                <NavLink to={link.path} activeClassName="active-link" className="nav-link" exact>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <img src={loginLogo} alt="Login" className="login-logo" />
      </div>
    </nav>
  );
};
export default Navbar;