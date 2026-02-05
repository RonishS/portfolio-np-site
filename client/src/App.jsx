import React from 'react';

function App() {
    return (
        <div className="min-h-screen bg-black flex flex-col justify-between p-8 md:p-12 text-white overflow-hidden selection:bg-white selection:text-black">

            {/* Top / Header Placeholder (Optional, keeps center balanced) */}
            <div className="w-full text-right opacity-0 hidden md:block">
                <span>v1.0</span>
            </div>

            {/* Main Center Content */}
            <main className="flex-1 flex flex-col items-center justify-center text-center fade-in">

                {/* Massive Headline */}
                <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-normal tracking-tighter leading-none mb-12 text-white whitespace-nowrap">
                    COMING SOON
                </h1>

                {/* Social Links - Enlarged & White */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-center justify-center w-full">
                    <a href="https://www.linkedin.com/in/ronish-shrestha-776728243/" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl font-normal text-white hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-white pb-1">
                        LinkedIn
                    </a>
                    <a href="https://github.com/RonishS" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl font-normal text-white hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-white pb-1">
                        GitHub
                    </a>
                    <a href="https://www.instagram.com/r0nish.shrestha/" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl font-normal text-white hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-white pb-1">
                        Instagram
                    </a>
                </div>

            </main>

            {/* Footer / Bottom Content */}
            <footer className="w-full flex-col md:flex-row flex justify-between items-end md:items-center text-white border-t border-white/20 pt-6 mt-12 fade-in">

                {/* "Crafting..." moved to bottom left */}
                <div className="text-lg md:text-xl font-normal max-w-sm text-left mb-6 md:mb-0">
                    Currently crafting a new digital experience.
                </div>

                {/* Skeleton Placeholders as small footer items */}
                <div className="flex gap-8 opacity-50">
                    <div className="text-sm uppercase tracking-widest border border-white/30 px-4 py-2">
                        Selected Works
                    </div>
                    <div className="text-sm uppercase tracking-widest border border-white/30 px-4 py-2">
                        Contact
                    </div>
                </div>

            </footer>
        </div>
    );
}

export default App;
