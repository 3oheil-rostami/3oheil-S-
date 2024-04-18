import { ProductImageModalProps } from "@/types";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

export default function ShowProductImageModal({ isShow, images }: ProductImageModalProps) {
	const [isShowAllowed, setIsShowAllowed] = useState<boolean>(isShow);
	return (
		isShowAllowed &&
		createPortal(
			<div className={`w-96 max-w-[600px] min-h-[500px] bg-white`}>
				<div className='header-modal flex justify-between items-center '>
					<span>تصاویر محصولات</span>
					<span onClick={() => setIsShowAllowed(false)}>
						<IoMdClose />
					</span>
				</div>
			</div>,
			document.body
		)
	);
}
