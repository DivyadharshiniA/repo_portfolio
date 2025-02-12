// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">
          <Link to="/"><h1>My Portfolio</h1></Link>
        </h1>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link to="/projects" className="text-gray-300 hover:text-white">Projects</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
