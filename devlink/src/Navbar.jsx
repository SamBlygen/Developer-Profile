import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white shadow z-50 px-4 py-3 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-600">DevLink</h1>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li>
          <Link to="/developers" className="hover:text-indigo-600">
           Our Developers
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
