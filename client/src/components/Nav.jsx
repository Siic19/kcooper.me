import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/newpost">New Post</Link>
      </li>
    </ul>
  </div>
);

export default Nav;
