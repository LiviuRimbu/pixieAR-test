import React from "react";
import { Button } from "./ui/button";
interface ModalProps {
	isOpen: boolean;
	onClose: () => void; // Callback for closing the modal
	children?: React.ReactNode; // Content to render inside the modal
	className?: string; // Optional additional class for styling
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
	if (!isOpen) {
		return null;
	}

	return (
		<div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999] ${className}`}>

				{children}
			<Button
				onClick={onClose}
				variant="webar"
				className="absolute left-[2rem] top-[2rem] z-[1000]"
			>
				Back
			</Button>
		</div>
	);
};

export default Modal;
