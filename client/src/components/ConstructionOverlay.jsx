import React from 'react';
import { Construction, ArrowLeft } from 'lucide-react';

const ConstructionOverlay = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-[#0f1115] transition-colors duration-300 animate-in fade-in zoom-in duration-300">

            {/* Content Container */}
            <div className="max-w-2xl px-6 text-center space-y-8">

                {/* Icon with subtle pulse */}
                <div className="relative inline-block">
                    <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full animate-pulse"></div>
                    <Construction className="relative w-20 h-20 md:w-24 md:h-24 text-gray-900 dark:text-gray-100 mx-auto" strokeWidth={1.5} />
                </div>

                {/* Main Heading */}
                <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                    Work in Progress
                </h1>

                {/* Message */}
                <p className="font-roboto text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mx-auto">
                    This website is currently under construction. <br className="hidden md:block" />
                    I'm crafting a perfect experience for you. Please hold on.
                </p>

                {/* Go Back Button */}
                <div className="pt-8">
                    <button
                        onClick={onClose}
                        className="group flex items-center gap-3 mx-auto px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium text-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95"
                    >
                        <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                        Return to Portfolio
                    </button>
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gray-900 dark:via-white to-transparent opacity-20"></div>
            <div className="absolute bottom-10 text-center w-full">
                <p className="font-chivo text-sm text-gray-400 dark:text-gray-600 tracking-widest uppercase">
                    Ronish Shrestha &copy; 2026
                </p>
            </div>
        </div>
    );
};

export default ConstructionOverlay;
