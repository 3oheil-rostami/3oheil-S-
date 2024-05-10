"use client";
import React, { useState } from "react";
import Button from "./form/Button";
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { handleLikeProduct } from "@/services/product";
import AddToCart from "./AddToCartButton";
import { Product } from "@/types/apiTypes";

const AddToCartCard = ({
	isLiked,
	product,
	colorId,
	axis,
	toggleShowButtonsActions,
}: {
	isLiked: boolean;
	product?: Product;
	colorId?: string;
	axis: "horizontal" | "vertical";
	toggleShowButtonsActions?: boolean;
}) => {
	const [like, setLike] = useState<boolean>(!!isLiked);
	const handleToggleLike = async () => {
		const { status } = await handleLikeProduct(product?._id || "");
		status === 200 ? setLike(true) : status === 201 ? setLike(false) : "";
	};
	return (
		<>
			{axis === "horizontal" && (
				<AddToCart
					size="lg"
					accessToActions
					colorId={colorId || ""}
					product={product}
					className="w-[40%!important] min-w-fit lg:w-[100%!important] h-[44px!important] text-sm sm:text-base lg:text-lg lg:mt-5 ">
					افزودن به سبد
				</AddToCart>
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
