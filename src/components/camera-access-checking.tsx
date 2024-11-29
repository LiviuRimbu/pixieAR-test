'use client'

import React, {useEffect, useState} from "react"
import {checkAndRequestCameraAccess} from "@/lib/access-camera"
import {useTranslations} from "next-intl"
import Modal from "@/components/modal"


const CheckCameraAccess: React.FC = () => {

	const t = useTranslations('camera-access-alert');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalMessage, setModalMessage] = useState("");

	useEffect(() => {
		checkAndRequestCameraAccess(setIsModalOpen, setModalMessage);
	}, []);

	return (
		<div>
			<div className="flex flex-col items-center justify-center min-h-screen">
				<Modal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
					className="fixed flex flex-col items-center justify-center w-[100vw] h-[100vh] bg-black bg-opacity-50 z-9999 "
				>
					<div className="bg-blue-400 flex flex-col items-center justify-center w-[50vw] h-[50vh] rounded-lg ">
						<p>{t('alert')}</p>
						<p>{modalMessage}</p>
					</div>
				</Modal>

			</div>
		</div>
	);
};

export default CheckCameraAccess;

