import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
];

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const NavItem: React.FC<{ path: string, label: string }> = ({ path, label }) => (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
          isActive
            ? 'text-indigo-500 dark:text-indigo-400'
            : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
        }`
      }
    >
      {({ isActive }) => (
        <>
          {label}
          {isActive && (
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-indigo-500 rounded-full" />
          )}
        </>
      )}
    </NavLink>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-gray-200 dark:border-gray-800' : 'bg-transparent border-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
          DB
        </NavLink>
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map(link => <NavItem key={link.path} {...link} />)}
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300">
            {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
          </button>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300">
              {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 dark:bg-gray-950/90 backdrop-blur-lg pb-4">
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map(link => <NavItem key={link.path} {...link} />)}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;