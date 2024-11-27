'use client';
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

import QRScannerComponent from "@/components/qr-scanner";
import InfoHeader from "@/components/info-header";
import { Button } from "@/components/ui/button";
import video from "@/data/video.json";
import Modal from "@/components/modal";
import IframeVideo from "@/components/iframe-video";
import Image from "next/image"

interface VideoData {
	[key: string]: {
		[subKey: string]: string;
	};
}

const Home: React.FC = () => {
	const t = useTranslations("qr-scanner");
	const [qrCodeData, setQrCodeData] = useState<string | null>(null); // Store QR code data
	const [searchResult, setSearchResult] = useState<{ [key: string]: string } | null>(null); // Search result
	const [isScannerVisible, setIsScannerVisible] = useState<boolean>(true); // Toggle scanner visibility
	const [activeVideoId, setActiveVideoId] = useState<string | null>(null); // Store the ID of the active video
	const [preloadedVideos, setPreloadedVideos] = useState<string[]>([]); // Store preloaded video IDs

	// Handle QR Code scanned data
	const handleQRCodeScanned = (data: string) => {
		setQrCodeData(data); // Set scanned QR code data
		setIsScannerVisible(false); // Hide the scanner
		searchByKey(data); // Search for the key in the JSON data
	};

	const videoData: VideoData = video;

	const searchByKey = (key: string) => {
		if (videoData[key]) {
			setSearchResult(videoData[key]); // Set the matched result
		} else {
			setSearchResult(null); // No match found
		}
	};

	// Preload videos when searchResult changes
	useEffect(() => {
		if (searchResult) {
			const videoIds = Object.values(searchResult);
			preloadVideos(videoIds);
		}
	}, [searchResult]);

	// Preload videos by creating hidden <video> elements
	const preloadVideos = (videoIds: string[]) => {
		videoIds.forEach((id) => {
			if (!preloadedVideos.includes(id)) {
				const videoElement = document.createElement("video");
				videoElement.src = `https://player.vimeo.com/video/${id}`;
				videoElement.preload = "auto";
				videoElement.style.display = "none"; // Hide the video element
				document.body.appendChild(videoElement);

				// Remove the video element once it's preloaded
				videoElement.oncanplaythrough = () => {
					videoElement.remove();
					setPreloadedVideos((prev) => [...prev, id]); // Mark as preloaded
				};
			}
		});
	};

	return (
		<div className="relative flex flex-col items-center justify-start  min-h-screen">
			{isScannerVisible ? (
				<QRScannerComponent onQRCodeScanned={handleQRCodeScanned} />
			) : (
				<div className="flex flex-col items-center justify-center mt-[15vh] p-4 ">
					<Button
						variant="webar"
						onClick={() => {
							setIsScannerVisible(true);
							setSearchResult(null);
						}}
						className="w-[228px] h-[65px] text-[23px] mb-[3rem] "
					>
						<Image
							src="/images/qr-code-white.png"
							className="rounded-full mr-[10px] aspect-square ${imgClassName"
							alt="qr"
							width={40}
							height={40}
						/>
						Scan
					</Button>
					{searchResult ? (
						<div className="mt-4">
							{Object.keys(searchResult).map((key) => (
								<div key={key}>
									{/* Open Modal for This Video */}
									<Button
										className="mb-[1rem] text-[20px] w-[300px]"
										variant="webar"
										onClick={() => setActiveVideoId(searchResult[key])} // Set active video ID
									>
										{key.split(/ p\d+/)[0]}
									</Button>

									{/* Modal for This Video */}
									<Modal
										isOpen={activeVideoId === searchResult[key]}
										onClose={() => setActiveVideoId(null)}
										className="fixed flex flex-col items-center justify-center w-[100vw] h-[100vh] bg-black bg-opacity-50 z-9999"
									>
										<IframeVideo id={searchResult[key]} />
									</Modal>
								</div>
							))}
						</div>
					) : (
						qrCodeData && (
							<p className="text-red-800 mt-4">No match found for the key.</p>
						)
					)}
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
