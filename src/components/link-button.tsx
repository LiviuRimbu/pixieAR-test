
import { FC } from 'react';
import Link from "next/link"
import {Button} from '@/components/ui/button';
import Image from "next/image"

type LinkButtonProps = {
	href: string;
	imageSrc: string;
	altText: string;
	btnTextMain: string;
	btnTextSec: string;
	className?: string;
	imgClassName?: string

};
const LinkButton: FC<LinkButtonProps> = ({ href, imageSrc, altText, btnTextMain, btnTextSec, className, imgClassName  }) => {
	return (
		<div >
			<Link href={href}>
				<Button variant="webar" className={`w-[60vw] h-[80px] mb-[5rem] text-[23px] ${className}`}>
					<Image
						src={imageSrc}
						className={`rounded-full mr-[10px] aspect-square ${imgClassName}`}
						alt={altText}
						width={40}
						height={40}
					/>
					<div className=" flex flex-col">
						<p className="">{btnTextMain} </p>
						<p className="text-[12px]">{btnTextSec}</p>
					</div>
				</Button>
			</Link>
		</div>
	);
};

export default LinkButton;