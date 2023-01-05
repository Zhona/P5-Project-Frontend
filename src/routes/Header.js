import { NavLink } from "react-router-dom";
import React from "react";

function Header({ user }) {
  return (
    <header className="header">
      <nav className="header-nav">
      <div className='logo'><NavLink to="/" exact="true">High Tea</NavLink></div>
        
        <ul className="navLink_routes">
          <li>
           
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/products">Product</NavLink>
          </li>
          <li>
            {" "}
            {user ? (
              <NavLink to="/profile">Profile</NavLink>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </li>

          <li>
            {" "}
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
