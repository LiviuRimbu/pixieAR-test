'use client'
import React, {useEffect, useState} from "react"
import {useTranslations} from 'next-intl';
// import Link from "next/link"


import { checkAndRequestCameraAccess } from '@/lib/access-camera';
// import CameraInstrModal from '@/components/camera-instr-modal';
import InfoHeader from "@/components/info-header";
import {books} from '@/data/books-list';
// import {Button} from '@/components/ui/button';
import {useIdAndLocales} from "@/lib/useIdAndLocales"
// import Image from "next/image"
import LinkButton from "@/components/link-button";
import Modal from "@/components/modal";


const BookDetail: React.FC = () => {
	const t = useTranslations('book-detail');
	const { id, currentLocale} = useIdAndLocales();
	const bookId = books[Number(id)];

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalMessage, setModalMessage] = useState("");

	useEffect(() => {
		checkAndRequestCameraAccess(setIsModalOpen, setModalMessage);
	}, []);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				className="fixed flex flex-col items-center justify-center w-[100vw] h-[100vh] bg-black bg-opacity-50 z-9999 "
			>
				<div className="bg-blue-400 flex flex-col items-center justify-center w-[50vw] h-[50vh] rounded-lg ">
					<p>{t('instruction')}</p>
					<p>{modalMessage}</p>
				</div>
			</Modal>

			<InfoHeader btnText = {t('button')} imageSrc={bookId.imageSrc} imgText={t('selected-image')} />
			<LinkButton
				href={`/${currentLocale}/book-detail/id=${id}/ar`}
				className="mb-9"
				imageSrc={bookId.imageSrc}
				altText="cover book"
				btnText = {t('btn-scan-cover')}
				imgClassName="mr-[15px]"
			/>
			<LinkButton
				href={`/${currentLocale}/qrcode`}
				className="w-[228px] h-[65px] mb-9 text-[23px]"
				imageSrc={"/images/qr-code-white.png"}
				altText="qr"
				btnText = {t('btn-scan-content')}
				imgClassName="aspect-square"
			/>

		</div>
	);
};

export default BookDetail;
