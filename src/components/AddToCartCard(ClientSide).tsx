"use client";
import React, { useState } from "react";
import Button from "./form/Button";
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { handleLinkProduct } from "@/services/product";

const AddToCartCard = ({
	isLiked,
	productId,
	axis,
	toggleShowButtonsActions,
}: {
	isLiked: boolean;
	productId: string;
	axis: "horizontal" | "vertical";
	toggleShowButtonsActions?: boolean;
}) => {
	console.log(isLiked);
	const [like, setLike] = useState<boolean>(!!isLiked);
	const handleToggleLike = async () => {
		const { status } = await handleLinkProduct(productId);
		status === 200 ? setLike(true) : status === 201 ? setLike(false) : "";
	};
	return (
		<>
			{axis === "horizontal" && (
				<Button
					colorScheme="primary"
					typeBtn="text"
					variant="fill"
					type="button"
					size="lg"
					className="w-[40%!important] min-w-fit lg:w-[100%!important] h-[44px!important] text-sm sm:text-base lg:text-lg lg:mt-5 ">
					افزودن به سبد
				</Button>
			)}
			<div
				className={`gap-x-9 gap-y-2 mt-3 pt-2 ${axis === "vertical" ? " flex-col " : ""}
                ${toggleShowButtonsActions ? " hidden lg:flex " : " flex "}`}>
				<Button colorScheme="secondary" typeBtn="icon" variant="text" onClick={handleToggleLike}>
					{like ? <FcLike /> : <FaRegHeart />}
				</Button>
				<Button
					colorScheme="secondary"
					typeBtn="icon"
					variant="text"
					onClick={() => navigator.clipboard.writeText(window.location.href)}>
					<MdContentCopy />
				</Button>
			</div>
		</>
	);
};

export default AddToCartCard;
