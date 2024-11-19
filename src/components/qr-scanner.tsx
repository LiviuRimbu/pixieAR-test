"use client";
import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
import dynamic from "next/dynamic";

// QRScannerComponent to be used as a reusable element
const QRScannerComponent: React.FC = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [qrCodeData, setQrCodeData] = useState<string | null>(null);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	useEffect(() => {
		if (videoRef.current) {
			const qrScanner = new QrScanner(
				videoRef.current,
				(result: { data: string }) => {
					setQrCodeData(result.data);
					setErrorMessage(null);
				},
				{
					onDecodeError: () => {
						setErrorMessage("Failed to decode QR code.");
					},
				}
			);

			qrScanner.start().catch((error) => {
				console.error("Error accessing camera", error);
				setErrorMessage("Unable to access camera.");
			});

			return () => {
				qrScanner.stop();
			};
		}
	}, []);

	return (
		<div className="relative h-screen w-screen flex justify-center items-center bg-black">
			{/* Fullscreen Video */}
			<div className="-scale-x-100 w-screen h-screen overflow-hidden">
				<video
					ref={videoRef}
					className="w-full h-full object-cover"
				></video>
			</div>

			<p className="absolute top-4 left-4 bg-black text-white p-2 rounded">
				Scanned Data: {qrCodeData}
			</p>

			{errorMessage && (
				<p className="absolute bottom-4 left-4 text-red-500 p-2">
					{errorMessage}
				</p>
			)}
		</div>
	);
};

export default dynamic(() => Promise.resolve(QRScannerComponent), {
	ssr: false,
});
