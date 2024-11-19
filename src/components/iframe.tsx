import React from 'react';
import {useTranslations} from 'next-intl';

import InfoHeader from "@/components/info-header"
import {books} from "@/data/books-list"
import {useIdAndLocales} from "@/lib/useIdAndLocales"


const IframeComponent: React.FC = () => {
    const t = useTranslations('iframe');
    const {id} = useIdAndLocales();
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-custom-gradient">
            <iframe
                src={books[Number(id)].src}
                frameBorder="0"
                scrolling="yes"
                seamless
                style={{display: 'block', width: '100vw', height: '100vh'}}
                allow="camera;gyroscope;accelerometer;magnetometer;xr-spatial-tracking;microphone"
                title="Project Iframe"
            >
            </iframe>

            <InfoHeader btnText = {t('button')} imageSrc={books[Number(id)].imageSrc} imgText={t('selected-image')}  />
        </div>
    );
};

export default IframeComponent;
