import React from 'react';

function App() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-white selection:bg-white selection:text-black">

            {/* Main Content */}
            <main className="text-center w-full max-w-5xl fade-in flex flex-col items-center justify-center min-h-[80vh]">
                {/* Massive Headline - Regular Weight */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-tighter mb-8 leading-tight">
                    COMING<br className="md:hidden" /> SOON
                </h1>

                {/* Subtext */}
                <p className="text-neutral-400 text-lg md:text-2xl font-light mb-16 tracking-wide max-w-2xl">
                    Crafting a digital experience.
                </p>

                {/* Social Links - Clean White */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center w-full">
                    <a href="#" className="text-white hover:text-neutral-300 transition-colors text-lg font-normal border-b border-transparent hover:border-white pb-1 group">
                        LinkedIn
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                    </a>
                    <a href="#" className="text-white hover:text-neutral-300 transition-colors text-lg font-normal border-b border-transparent hover:border-white pb-1 group">
                        GitHub
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                    </a>
                    <a href="#" className="text-white hover:text-neutral-300 transition-colors text-lg font-normal border-b border-transparent hover:border-white pb-1 group">
                        Twitter
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                    </a>
                </div>

                {/* Minimalist Skeleton Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full opacity-20 hover:opacity-40 transition-opacity duration-700">
                    <div className="border border-white h-32 flex items-center justify-center">
                        <span className="text-xs uppercase tracking-[0.2em]">Works</span>
                    </div>
                    <div className="border border-white h-32 flex items-center justify-center">
                        <span className="text-xs uppercase tracking-[0.2em]">About</span>
                    </div>
                    <div className="border border-white h-32 flex items-center justify-center">
                        <span className="text-xs uppercase tracking-[0.2em]">Contact</span>
                    </div>
                </div>

            </main>

            <footer className="fixed bottom-6 text-neutral-600 text-xs uppercase tracking-widest">
                &copy; {new Date().getFullYear()}
            </footer>
        </div>
    );
}

export default App;
