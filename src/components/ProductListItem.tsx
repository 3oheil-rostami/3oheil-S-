import { Color, ProductItemInCart } from "@/types/apiTypes";
import Image from "next/image";
import React from "react";
import AddToCartButton from "./AddToCartButton";
import { calculateDiscountedPrice } from "@/utils";
import Link from "next/link";

const ProductListItem = ({ colorId, productId }: ProductItemInCart) => {
	const currentProduct: Color =
		productId.colors.find(item => item._id === colorId._id) || ({} as Color);
	return (
		<li className="border-b py-3 last:border-none">
			<div className="details-wrapper flex gap-3">
				<div className="image-area flex flex-col gap-2 items-center">
					<div className="image-wrapper size-24 overflow-hidden">
						<Image
							src={`http://localhost:4000/image/productCover/${productId.productCover}`}
							width={100}
							height={100}
							alt=""
						/>
					</div>
					<AddToCartButton
						product={productId}
						accessToActions={true}
						colorId={colorId._id}
						size="sm"
					/>
					{/* <Timer initialSeconds={7 * 60 * 60 * 24} /> */}
				</div>
				<div className="py-3">
					<Link href={`/product/${productId.enName}`}>
						<h4 className="text-base font-bold text-neutral-800 hover:text-primary-700 transition-all duration-300">
							{productId.name}
						</h4>
					</Link>
					<div className="colors flex gap-2 items-center mt-1">
						<div className="flex items-center gap-1">
							<div
								className="size-5 rounded-full border"
								style={{ background: colorId.colorCode }}
							/>
							<span className="text-sm font-medium text-neutral-800">{colorId.colorName}</span>
						</div>
					</div>
					<div className="button-control-wrapper py-3 px-2 pt-5 flex flex-col gap-3 items-start">
						<div className="flex items-center gap-3">
							<span className="line-through text-sm font-bold text-neutral-700">
								{currentProduct?.price} تومان
							</span>
							<span className="px-1 rounded-md  bg-primary-500 text-white text-sm font-normal">
								{currentProduct?.off} %
							</span>
						</div>
						<span className="text-base font-bold text-primary-800">
							{parseInt(
								calculateDiscountedPrice(
									currentProduct?.price ?? 0,
									currentProduct?.off ?? 0
								).toFixed(0)
							).toLocaleString()}{" "}
							تومان
						</span>
					</div>
				</div>
			</div>
		</li>
	);
};

export default ProductListItem;
