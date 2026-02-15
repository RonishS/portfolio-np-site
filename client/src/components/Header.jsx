import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Certifications'];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#0f1115]/95 backdrop-blur-md border-b border-transparent dark:border-white/5 transition-colors duration-300">
            {/* Consistent Padding with Hero: px-6 md:px-16 lg:px-32 */}
            <div className="w-full px-6 md:px-16 lg:px-32 h-28 flex items-center justify-between">

                {/* Left: Logo/Name */}
                <div className="flex-shrink-0">
                    <a href="#" className="font-playfair text-2xl md:text-3xl font-bold tracking-wide text-gray-900 dark:text-gray-100 whitespace-nowrap hover:opacity-80 transition-opacity">
                        RONISH SHRESTHA
                    </a>
                </div>

                {/* Right: Navigation */}
                <div className="flex items-center">
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-12 lg:gap-16">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="font-chivo text-sm lg:text-base font-medium tracking-widest text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors relative group"
                            >
                                {item.toUpperCase()}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden ml-8">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-900 dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0f1115] border-b border-gray-100 dark:border-gray-800 shadow-xl transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen py-8' : 'max-h-0'}`}>
                <div className="flex flex-col items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="font-chivo text-xl font-medium tracking-wide text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors"
                        >
                            {item.toUpperCase()}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
