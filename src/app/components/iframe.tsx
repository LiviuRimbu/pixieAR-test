import React from 'react';
import { Button } from './ui/button';

interface IframeComponentProps {
    url: string;
    onClose: () => void;
}

const IframeComponent: React.FC<IframeComponentProps> = ({ url, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            <iframe
                src={url}
                frameBorder="0"
                scrolling="yes"
                seamless
                style={{ display: 'block', width: '100vw', height: '100vh' }}
                allow="camera;gyroscope;accelerometer;magnetometer;xr-spatial-tracking;microphone"
                title="Project Iframe"
            ></iframe>
            <Button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white  bg-gradient-to-r from-purple-400 to-cyan-400 text-white font-bold py-2 px-8 rounded-full hover:scale-105 transition-transform border border-white"
            >
                Close
            </Button>
        </div>
    );
};

export default IframeComponent;
