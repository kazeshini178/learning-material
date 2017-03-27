import React from 'react';
import { Link } from 'react-router';

export const Navbar = ({ currentUser }) => (
  <div className="navbar">
    <Link
      className="link"
      to="/home">
      Home
    </Link>
    <Link
      className="link"
      to="/about">
      About
    </Link>
    {currentUser.loggedIn ?
      <Link
        to="/logout"
        className="link" >Logout</Link> :
      <Link
        to="/login"
        className="link" >Login</Link>}
  </div>
);

export default Navbar;