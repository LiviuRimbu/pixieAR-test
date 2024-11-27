import { useTranslations } from 'next-intl';
import {Button} from '@/components/ui/button';

interface CameraInstrModalProps {
	isModalOpen: boolean;
	modalMessage?: string;
	setIsModalOpen: (open: boolean) => void;
}


export default function CameraInstrModal({ isModalOpen, modalMessage, setIsModalOpen }: CameraInstrModalProps) {

	const t = useTranslations('camera-access-instr');
	if (!isModalOpen) {
		return null; // Do not render the modal if it's not open
	}
	const closeModal =()	=> {
		setIsModalOpen(false);
	}
	return (
		<div className="fixed flex flex-col items-center justify-center w-[100vw] h-[100vh] bg-black bg-opacity-50 z-9999 ">
			<div
				className="fixed flex flex-col items-center justify-center w-[60vw] h-[60vh]  rounded-lg bg-red-800 ">
				<p>{t('instruction')}</p>
				<p>{modalMessage}</p>

				<Button
					onClick={closeModal}
					variant="webar"
					className="w-[100px] h-[45px] text-[23px] mt-[3rem]"
				>
					OK
				</Button>
			</div>
		</div>

	);
}
