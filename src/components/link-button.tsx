
import { FC } from 'react';
import Link from "next/link"
import {Button} from '@/components/ui/button';
import Image from "next/image"

type LinkButtonProps = {
	href: string;
	imageSrc: string;
	altText: string;
	btnText: string;
	className?: string;
	imgClassName?: string

};
const LinkButton: FC<LinkButtonProps> = ({ href, imageSrc, altText, btnText, className, imgClassName  }) => {
	return (
		<div >
			<Link href={href}>
				<Button variant="webar" className={`w-[228px] h-[65px] text-[23px] ${className}`}>
					<Image
						src={imageSrc}
						className={`rounded-full mr-[10px] aspect-square ${imgClassName}`}
						alt={altText}
						width={40}
						height={40}
					/>
					{btnText}
				</Button>
			</Link>
		</div>
	);
};

export default LinkButton;