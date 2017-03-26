import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => (
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
  </div>
);

export default Navbar;