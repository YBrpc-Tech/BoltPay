import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../../assets/logo1.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white z-50 px-6 md:px-12 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img className="h-12 md:h-16 cursor-pointer" src={Logo} alt="BoltPay Logo" />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium text-sm">
          <li className="hover:text-primary transition-colors cursor-pointer">Convert Currencies</li>
          <li className="hover:text-primary transition-colors cursor-pointer">About Us</li>
          <li className="hover:text-primary transition-colors cursor-pointer">Contact Us</li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate('/send')}
            className="bg-secondary hover:bg-transparent border-2 border-secondary hover:text-secondary text-white font-semibold px-6 py-2 rounded-full shadow-md transition-colors duration-300"
          >
            Pay Instantly
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-gray-700 font-medium">
          <Link to="/" className="block hover:text-primary" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <p className="hover:text-primary">Convert Currencies</p>
          <p className="hover:text-primary">About Us</p>
          <p className="hover:text-primary">Contact Us</p>
          <button
            onClick={() => {
              navigate('/send');
              setMenuOpen(false);
            }}
            className="mt-2 w-full bg-secondary hover:bg-transparent border-2 border-secondary hover:text-secondary text-white font-semibold px-6 py-2 rounded-full shadow-md transition-colors duration-300"
          >
            Pay Instantly
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
