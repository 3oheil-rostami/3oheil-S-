"use client";
import Button from "@/components/form/Button";
import { ModalLayoutProps } from "@/types";
import React, { useState } from "react";
import { createPortal } from "react-dom";

// icons
import { MdClose } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { FaInfo } from "react-icons/fa6";
import { IoWarningOutline } from "react-icons/io5";

export default function MdModalLayout({
	isShow,
	confirmButtonText,
	title,
	size,
	typeModal,
	cancelButtonText,
	description,
	onCancelClick,
	onConfirmCLick,
}: ModalLayoutProps) {
	const [isShowModal, setIsShowModal] = useState<boolean>(isShow);

	const confirmHandler = () => {
		onConfirmCLick && onConfirmCLick();
		setIsShowModal(false);
	};
	const cancelHandler = () => {
		onCancelClick && onCancelClick();
		setIsShowModal(false);
	};

	return (
		isShowModal &&
		createPortal(
			<div className='modal-container'>
				<div className={`modal ${size}`}>
					<div className={`close-btn-wrapper`}>
						<button className='close-btn' onClick={() => setIsShowModal(false)}>
							<MdClose />
						</button>
					</div>
					<div className='modal-content min-h-[248px]'>
						<span className={`icon-wrapper ${typeModal}`}>
							{typeModal === "success" ? (
								<MdDone />
							) : typeModal === "info" ? (
								<FaInfo />
							) : typeModal === "warning" ? (
								<IoWarningOutline />
							) : (
								<MdClose />
							)}
						</span>
						<h4 className='modal-title-text'>{title}</h4>
						{!!description && <p className='modal-desc-text '>{description}</p>}
						<Button
							colorScheme='primary'
							typeBtn='text'
							variant='outline'
							className='w-[100%!important] mb-2'
							onClick={cancelHandler}>
							{cancelButtonText ? cancelButtonText : "انصراف"}
						</Button>
						<Button
							colorScheme='primary'
							className='w-[100%!important] mb-2'
							typeBtn='text'
							variant='fill'
							onClick={confirmHandler}>
							{confirmButtonText}
						</Button>
					</div>
				</div>
			</div>,
			window.document.body
		)
	);
}
