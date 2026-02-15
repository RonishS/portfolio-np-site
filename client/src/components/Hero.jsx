import React, { useState, useEffect } from 'react';

// Typewriter Component
const CyclingTypewriter = ({ words }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        const timeout2 = setInterval(() => {
            setBlink(prev => !prev);
        }, 500);
        return () => clearInterval(timeout2);
    }, []);

    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 2000 : 150, parseInt(Math.random() * 50)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words]);

    return (
        <span>
            {words[index].substring(0, subIndex)}
            <span className={`${blink ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
        </span>
    );
};

const Hero = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 lg:px-20 py-24 bg-white dark:bg-[#0f1115] transition-colors duration-300">

            {/* Left Content */}
            <div className="flex flex-col gap-8 text-left max-w-2xl w-full z-10 lg:pr-10 order-2 lg:order-1 mt-10 lg:mt-0">
                <h1 className="font-roboto font-bold leading-tight text-gray-900 dark:text-white">
                    <span className="block text-5xl md:text-7xl mb-4 h-20 md:h-24 text-gray-800 dark:text-gray-100">
                        <CyclingTypewriter words={['Hi,', 'Hello,', 'Hola,', 'Namaste,']} />
                    </span>
                    <span className="block text-5xl md:text-7xl lg:text-8xl whitespace-nowrap">
                        I’m Ronish Shrestha
                    </span>
                </h1>

                <h2 className="font-roboto font-medium text-[1.7rem] md:text-[2.5rem] text-gray-600 dark:text-gray-300 mt-2">
                    Aspiring QA Engineer | Capturing Moments
                </h2>

                <div className="space-y-6 w-full">
                    <p className="font-roboto font-normal text-2xl md:text-[1.7rem] leading-relaxed text-gray-700 dark:text-gray-300 xl:whitespace-nowrap">
                        I focus on quality by noticing the details others often miss.
                    </p>
                    <p className="font-roboto font-normal text-2xl md:text-[1.7rem] leading-relaxed text-gray-700 dark:text-gray-300 xl:whitespace-nowrap">
                        Step into my world to witness the fusion of my craft, my vision, and my story.
                    </p>
                </div>

                <div className="flex gap-6 mt-10">
                    <button className="px-10 py-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full text-xl font-medium shadow-sm hover:bg-gray-300 dark:hover:bg-gray-700 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                        View Resume
                    </button>
                    <button className="px-10 py-4 bg-transparent border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-full text-xl font-medium hover:border-gray-900 dark:hover:border-gray-100 transition-all duration-300">
                        Contact
                    </button>
                </div>
            </div>

            {/* Right Content - Image */}
            <div className="flex justify-center items-center relative w-full lg:w-auto order-1 lg:order-2">
                {/* Radial Glow */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-radial-gradient from-gray-200/50 to-transparent dark:from-white/5 dark:to-transparent blur-3xl rounded-full -z-10"></div>

                {/* Image Container */}
                <div className="relative w-80 h-80 md:w-[32rem] md:h-[32rem] rounded-full overflow-hidden shadow-xl border-[6px] border-white dark:border-gray-800 bg-gray-50 flex items-center justify-center transition-transform duration-500 hover:scale-[1.01]">
                    <img
                        src="/assets/pfp.png"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://placehold.co/600x600/f0f0f0/1a1a1a?text=RS";
                        }}
                        alt="Ronish Shrestha"
                        className="w-full h-full object-cover filter contrast-[1.05] grayscale-[5%]"
                    />
                </div>
            </div>

        </section>
    );
};

export default Hero;
