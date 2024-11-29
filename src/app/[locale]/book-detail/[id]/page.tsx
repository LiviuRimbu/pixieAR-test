'use client'
import React from "react"
import {useTranslations} from 'next-intl';

import InfoHeader from "@/components/info-header";
import {books} from '@/data/books-list';
import {useIdAndLocales} from "@/lib/useIdAndLocales"
import LinkButton from "@/components/link-button";

const BookDetail: React.FC = () => {
	const t = useTranslations('book-detail');
	const { id, currentLocale} = useIdAndLocales();
	const bookId = books[Number(id)];

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<InfoHeader btnText = {t('button')} imageSrc={bookId.imageSrc} imgText={t('selected-image')} />
			<LinkButton
				href={`/${currentLocale}/book-detail/id=${id}/ar`}
				className="mb-9"
				imageSrc={bookId.imageSrc}
				altText="cover book"
				btnTextMain = {t('btn-scan-cover')}
				btnTextSec = {t('btn-scan-cover-sec')}
				imgClassName="mr-[15px]"
			/>
			<LinkButton
				href={id === "0" ? `/${currentLocale}/qrcode` : `https://pilgrimqr.com/#/`}
				className=""
				imageSrc={"/images/qr-code-white.png"}
				altText="qr"
				btnTextMain = {t('btn-scan-content')}
				btnTextSec = {t('btn-scan-content-sec')}
				imgClassName="aspect-square"
			/>

		</div>
	);
};

export default BookDetail;
