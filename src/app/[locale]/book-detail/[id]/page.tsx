'use client'
import React from "react"
import {useTranslations} from 'next-intl';
import Link from "next/link"

import InfoHeader from "@/components/info-header";
import {books} from '@/data/books-list';
import {Button} from '@/components/ui/button';
import {useIdAndLocales} from "@/lib/useIdAndLocales"
import Image from "next/image"
import booksList from "@/components/books-list"

const BookDetail: React.FC = () => {
	const t = useTranslations('book-detail');
	const { id, currentLocale} = useIdAndLocales();

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<InfoHeader btnText = {t('button')} imageSrc={books[Number(id)].imageSrc} imgText={t('selected-image')} />
			<Link href={`/${currentLocale}/book-detail/id=${id}/ar`}>
				<Button
					variant="webar"
					className="w-[228px] h-[65px] mb-9 text-[23px]"
				>
					<Image
						src={books[Number(id)].imageSrc}
						className=" rounded-full mr-[15px] "
						alt="cover book"
						width={40}
						height={40}
					/>
					{t('btn-scan-cover')}

				</Button>
			</Link>
			<Link href={`/${currentLocale}/qrcode`}>
				<Button
					variant="webar"
					className="w-[228px] h-[65px] text-[23px] "
				>
					<Image
						src={"/images/qr-code.png"}
						className="rounded-full mr-[10px] brightness-0 invert "
						alt="cover book"
						width={40}
						height={40}
					/>{t('btn-scan-content')}
				</Button>
			</Link>
		</div>
	);
};

export default BookDetail;
