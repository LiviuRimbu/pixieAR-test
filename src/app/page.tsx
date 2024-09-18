'use client';
import { useState } from 'react';

import IframeComponent from './components/iframe';
import StartMenu from './components/start-menu';

const Home: React.FC = () => {
    const [iframeSrc, setIframeSrc] = useState<string | null>(null);

    const handleImageClick = (src: string) => {
        setIframeSrc(src);
    };

    const closeIframe = () => {
        setIframeSrc(null);
    };

    return (
        <div className="bg-custom-gradient min-h-screen">
            {iframeSrc
                ? <IframeComponent url={iframeSrc} onClose={closeIframe}/>
                : <StartMenu handleImageClick={handleImageClick}/>
            }
        </div>
    );
};

export default Home;
