"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Determine if a link is active
  const isActive = (path: string) => {
    return pathname === path;
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg py-3' 
          : 'bg-slate-900 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/"
            className="font-bold text-2xl group flex items-center"
          >
            <div className="w-10 h-10 mr-2 rounded-full bg-rose-400 flex items-center justify-center text-rose-100">
              SS
            </div>
            {isScrolled ? (
              <span className="text-slate-800 group-hover:text-rose-400 transition-colors duration-300">Saalim Shaikh</span>
            ) : (
              <span className="text-rose-100 group-hover:text-rose-400 transition-colors duration-300">Saalim Shaikh</span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-1">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                // { name: 'Projects', path: '/projects' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className={`relative px-4 py-2 rounded-md font-medium transition duration-300 ${
                      isActive(item.path)
                        ? isScrolled 
                          ? 'text-slate-800 bg-indigo-50' 
                          : 'text-rose-500 bg-white/10'
                        : isScrolled 
                          ? 'text-rose-400 hover:text-slate-500 hover:bg-indigo-50' 
                          : 'text-rose-100 hover:text-rose-400 hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                    {isActive(item.path) && (
                      <span className={`absolute bottom-0 left-0 w-full h-0.5 ${isScrolled ? 'bg-slate-800' : 'bg-rose-400'}`}></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none ${
                isScrolled 
                  ? 'text-gray-800 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'opacity-100 max-h-screen' 
            : 'opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        <div className="px-6 pt-5 pb-6 bg-white shadow-lg rounded-b-lg border-t border-gray-200">
          <div className="flex flex-col space-y-2">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              // { name: 'Projects', path: '/projects' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <Link 
                key={item.name} 
                href={item.path}
                className={`font-medium px-4 py-3 rounded-md ${
                  isActive(item.path)
                    ? 'text-slate-800 bg-indigo-50'
                    : 'text-rose-400 hover:text-slate-500 hover:bg-indigo-50'
                }`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 