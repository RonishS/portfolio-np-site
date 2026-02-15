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
        <section className="min-h-screen bg-white dark:bg-[#0f1115] transition-colors duration-300 flex items-center pt-24 pb-12">

            {/* Fluid Container with Grid for stability */}
            {/* Switched from centered max-w-7xl to w-full with generous padding for 'previous' look */}
            <div className="w-full px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                {/* Left Content (Text) - Spans 7 cols to give space to text */}
                <div className="flex flex-col gap-6 lg:gap-8 text-left order-2 lg:order-1 z-10 lg:col-span-7 xl:col-span-8">
                    <h1 className="font-roboto font-bold leading-none text-gray-900 dark:text-white">
                        <span className="block text-5xl md:text-7xl mb-2 h-16 md:h-24 text-gray-800 dark:text-gray-100 items-center flex">
                            <CyclingTypewriter words={['Hi,', 'Hello,', 'Hola,', 'Namaste,']} />
                        </span>
                        {/* Adjusted size slightly to prevent wrapping on medium screens */}
                        <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight -ml-[2px] whitespace-nowrap">
                            I’m Ronish Shrestha
                        </span>
                    </h1>

                    <h2 className="font-roboto font-medium text-2xl md:text-4xl text-gray-600 dark:text-gray-400 mt-2">
                        Aspiring QA Engineer | <br className="md:hidden" /> Capturing Moments
                    </h2>

                    <div className="space-y-4 w-full max-w-3xl">
                        <p className="font-roboto font-normal text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300">
                            I focus on quality by noticing the details others often miss.
                        </p>
                        <p className="font-roboto font-normal text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300">
                            Step into my world to witness the fusion of my craft, my vision, and my story.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 md:gap-6 mt-6 md:mt-10">
                        <button className="px-8 md:px-10 py-3 md:py-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full text-lg md:text-xl font-medium shadow-sm hover:bg-gray-300 dark:hover:bg-gray-700 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                            View Resume
                        </button>
                        <button className="px-8 md:px-10 py-3 md:py-4 bg-transparent border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-full text-lg md:text-xl font-medium hover:border-gray-900 dark:hover:border-gray-100 transition-all duration-300">
                            Contact
                        </button>
                    </div>
                </div>

                {/* Right Content (Image) - Spans 5 cols */}
                <div className="flex justify-center lg:justify-end items-center relative order-1 lg:order-2 w-full lg:col-span-5 xl:col-span-4">
                    {/* Radial Glow */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-gray-200/50 to-transparent dark:from-white/5 dark:to-transparent blur-3xl rounded-full -z-10"></div>

                    {/* Image Container */}
                    <div className="relative w-72 h-72 md:w-[26rem] md:h-[26rem] lg:w-[30rem] lg:h-[30rem] xl:w-[32rem] xl:h-[32rem] rounded-full overflow-hidden shadow-2xl border-[6px] border-white dark:border-gray-800 bg-gray-100 flex items-center justify-center transition-transform duration-500 hover:scale-[1.01]">
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

            </div>
        </section>
    );
};

export default Hero;
