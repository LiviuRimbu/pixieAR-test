'use client'
import React from "react"
import {useTranslations} from 'next-intl';
import Link from "next/link"

import InfoHeader from "@/components/info-header";
import {books} from '@/data/books-list';
import {Button} from '@/components/ui/button';
import {useIdAndLocales} from "@/lib/useIdAndLocales"

const BookDetail: React.FC = () => {
	const t = useTranslations('book-detail');
	const { id, currentLocale} = useIdAndLocales();

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<InfoHeader btnText = {t('button')} imageSrc={books[Number(id)].imageSrc} imgText={t('selected-image')} />
			<Link href={`/${currentLocale}/book-detail/id=${id}/ar`}>
				<Button
					variant="webar"
					className="w-[35vw] mb-[1rem]"
				>
					{t('btn-scan-cover')} </Button>
			</Link>
			<Link href={`/${currentLocale}/qrcode`}>
				<Button
					variant="webar"
					className="w-[35vw]"
				>
					{t('btn-scan-content')}
				</Button>
			</Link>
		</div>
	);
};

export default BookDetail;
