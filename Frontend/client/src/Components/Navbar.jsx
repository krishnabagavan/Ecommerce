import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4 flex justify-between">
    <Link to="/" className="text-xl">E-Commerce</Link>
    <div>
      <Link to="/cart" className="px-3">Cart</Link>
      <Link to="/signup" className="px-3">SinUp</Link>
      <Link to="/signin" className="px-3">Sign In</Link>
    </div>
  </nav>
);

export default Navbar;
