"use client";
import React, { useEffect, useRef } from "react";
import QrScanner from "qr-scanner";

interface QRScannerComponentProps {
	onQRCodeScanned: (data: string) => void;
}

const QRScannerComponent: React.FC<QRScannerComponentProps> = ({ onQRCodeScanned }) => {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (videoRef.current) {
			const qrScanner = new QrScanner(
				videoRef.current,
				(result: { data: string }) => {
					onQRCodeScanned(result.data); // Pass scanned data to the parent
				},
				{
					onDecodeError: () => {
						console.error("Failed to decode QR code.");
					},
				}
			);

			qrScanner.start().catch((error) => {
				console.error("Error accessing camera", error);
			});

			return () => {
				qrScanner.stop();
			};
		}
	}, [onQRCodeScanned]);

	return (
		<div className="relative h-screen w-screen flex justify-center items-center bg-black">
			<div className="w-screen h-screen overflow-hidden">
				<video
					ref={videoRef}
					className="w-full h-full object-cover"
				></video>
			</div>
		</div>
	);
};

export default QRScannerComponent;
