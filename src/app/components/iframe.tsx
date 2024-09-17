import React from 'react';

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
            <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-md"
            >
                Close
            </button>
        </div>
    );
};

export default IframeComponent;
