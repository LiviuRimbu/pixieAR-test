'use client';
import React, { useState } from "react";
import { useTranslations } from "next-intl";

import QRScannerComponent from "@/components/qr-scanner";
import InfoHeader from "@/components/info-header";

const Home: React.FC = () => {
	const t = useTranslations("qr-scanner");
	const [qrCodeData, setQrCodeData] = useState<string | null>(null); // Store QR code data
	const [isScannerVisible, setIsScannerVisible] = useState<boolean>(true); // Toggle scanner visibility

	const handleQRCodeScanned = (data: string) => {
		setQrCodeData(data); // Set the scanned QR code data
		setIsScannerVisible(false); // Hide the QRScannerComponent
	};

	return (
		<div className="relative flex flex-col items-center justify-center min-h-screen">
			{isScannerVisible ? (
				<QRScannerComponent onQRCodeScanned={handleQRCodeScanned} />
			) : (

				<div className="p-4  rounded ">

					<button
						onClick={() => setIsScannerVisible(true)}
						className="mt-4 p-2 bg-blue-500 text-white rounded mb-7"
					>
						Scan
					</button>
					<p className="text-violet">Ai scanat:</p>
					<p className="text-green-800 text-7xl">{qrCodeData}</p>

				</div>
			)}

			<InfoHeader
				btnText={t("button")}
				imageSrc={"/images/qr-code.png"}
				imgText={t("selected-image")}
			/>
		</div>
	);
};

export default Home;
