import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Certifications'];

    return (
        <header className="w-full fixed top-0 left-0 bg-white/90 dark:bg-[#0f1115]/90 backdrop-blur-md z-50 transition-colors duration-300">
            <div className="w-full px-[5%] h-24 flex items-center justify-between">

                {/* Left: Logo/Name */}
                <div className="font-playfair text-2xl md:text-3xl font-bold tracking-wide text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    RONISH SHRESTHA
                </div>

                {/* Right: Navigation */}
                <div className="flex items-center gap-20">
                    {/* Desktop Navigation - Increased Gap */}
                    <nav className="hidden md:flex items-center gap-20">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="font-chivo text-lg font-medium tracking-wide text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                            >
                                {item.toUpperCase()}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-6 md:hidden">
                        <button onClick={toggleMenu} className="text-gray-900 dark:text-white">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-24 left-0 w-full bg-white dark:bg-[#0f1115] border-t border-gray-100 dark:border-gray-800 shadow-lg p-6 flex flex-col gap-8 items-center h-screen">
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
            )}
        </header>
    );
};

export default Header;
