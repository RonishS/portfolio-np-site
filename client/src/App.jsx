import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ConstructionOverlay from './components/ConstructionOverlay';

function App() {
    const [showConstruction, setShowConstruction] = useState(false);

    const handleConstruction = (e) => {
        if (e) e.preventDefault();
        setShowConstruction(true);
    };

    return (
        <div className="min-h-screen bg-white transition-colors duration-300 relative">
            {showConstruction && (
                <ConstructionOverlay onClose={() => setShowConstruction(false)} />
            )}

            <Header onInteract={handleConstruction} />
            <main>
                <Hero onInteract={handleConstruction} />
            </main>
        </div>
    );
}

export default App;
