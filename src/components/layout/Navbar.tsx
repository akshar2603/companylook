'use client';

import React from "react";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg fixed w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-yellow-500 dark:text-yellow-400 transition-transform duration-300 hover:scale-110" />
            <span className="ml-2 text-xl font-bold text-gray-800 dark:text-gray-200 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300">
            Lakhankiya Innovations
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="/#services"
              className="text-gray-600 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Services
            </a>
            {/* have to implement in future  */}
            {/* <a
              href="#solutions"
              className="text-gray-600 dark:text-gray-300 hover:text-red-400 dark:hover:text-red-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Solutions
            </a> */}
            <a
              href="#about"
              className="text-gray-600 dark:text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              About
            </a>
            <a
              href="/career"
              className="text-gray-600 dark:text-gray-300 hover:text-teal-400 dark:hover:text-teal-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Careers
            </a>
            <a
              href="/contact"
              className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-yellow-500 dark:text-yellow-400 hover:text-yellow-600 dark:hover:text-yellow-500 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a
                href="/"
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-300 transition-colors duration-300"
              >
                Services
              </a>
              <a
                href="#solutions"
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-red-400 dark:hover:text-red-300 transition-colors duration-300"
              >
                Solutions
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-300 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="/career"
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-300"
              >
                Careers
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;