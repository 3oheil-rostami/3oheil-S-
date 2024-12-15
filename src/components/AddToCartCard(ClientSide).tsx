"use client";
import { handleLikeProduct } from "@/services/product";
import { Product } from "@/types/apiTypes";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { MdContentCopy } from "react-icons/md";
import AddToCart from "./AddToCartButton";

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
					className="!w-2/5 min-w-fit !lg:w-full !h-11 text-sm sm:text-base lg:text-lg lg:mt-5 ">
					افزودن به سبد
				</AddToCart>
			)}
			<div
				className={`gap-x-9 gap-y-2 mt-3 pt-2 ${axis === "vertical" ? " flex-col " : ""}
                ${toggleShowButtonsActions ? " hidden lg:flex " : " flex "}`}>
				<button className="btn btn-square btn-outline btn-primary" onClick={handleToggleLike}>
					{like ? <FcLike /> : <FaRegHeart />}
				</button>
				<button className="btn btn-square btn-outline btn-primary"
					onClick={() => navigator.clipboard.writeText(window.location.href)}>
					<MdContentCopy />
				</button>
			</div>
		</>
	);
};

export default AddToCartCard;
