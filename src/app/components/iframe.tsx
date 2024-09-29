import React from 'react';
import {Button} from './ui/button';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

interface IframeComponentProps {
    url: string;
    onClose: () => void;
    imgSrc: string;
}

const IframeComponent: React.FC<IframeComponentProps> = ({url, onClose, imgSrc}) => {
    const t = useTranslations('Iframe');
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-custom-gradient">
            <iframe
                src={url}
                frameBorder="0"
                scrolling="yes"
                seamless
                style={{display: 'block', width: '100vw', height: '100vh'}}
                allow="camera;gyroscope;accelerometer;magnetometer;xr-spatial-tracking;microphone"
                title="Project Iframe"
            >
            </iframe>

            <div className="absolute items-center top-5 left-[2vw] flex flex-row justify-between w-[90%]">
                <Button onClick={onClose}
                        className="text-[16px] btn-gradient text-white font-bold py-2 px-8 rounded-full hover:scale-105 transition-transform border border-white mr-[5vw]"
                >
                    {t('button')}
                </Button>
                <div className="flex flex-row items-center">
                    <span className="text-white font-bold text-white text-[16px]"> Scan: </span>
                    <Image
                        src={imgSrc}
                        className='ml-[1vh]'
                        alt="cover book"
                        width={60}
                        height={60}
                    />
                </div>
            </div>
        </div>
    );
};

export default IframeComponent;
