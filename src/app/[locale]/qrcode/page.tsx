'use client'
import React from "react";
import {useTranslations} from 'next-intl';

import QRScannerComponent from "@/components/qr-scanner";
import InfoHeader from "@/components/info-header"


const Home: React.FC = () => {
	const t = useTranslations('qr-scanner');
	return (
		<div>
			<QRScannerComponent />
			<InfoHeader btnText = {t('button')} imageSrc={'/images/qr-code.png'} imgText={t('selected-image')}  />
		</div>
	);
};

export default Home;