import { ModalLayoutProps } from "@/types";
import React, { useState } from "react";
import { createPortal } from "react-dom";

export default function LgModalLayout({ isShow, children }: ModalLayoutProps) {
	const [isShowModal, setIsShowModal] = useState<boolean>(isShow);
	return (
		isShowModal &&
		createPortal(
			<div className='w-80 h-96 rounded-lg bg-white p-3'>
        
      </div>,
			document.querySelector(".modals-container") as Element
		)
	);
}
