"use client";
import Image from "next/image";
import { useState } from "react";
import { ProductImageSliderProps } from "@/types";

export default function ProductImages(images: ProductImageSliderProps) {
	const [currentImage, setCurrentImage] = useState<string>(
		typeof images.images?.[0] === "string" ? images.images?.[0] : images.images?.[0].src
	);
	return (
		<div className="hidden lg:flex flex-col-reverse 2xl:flex-row lg:size-96 xl:size-[500px] gap-2 ">
			<div className="w-full h-16 2xl:w-16 2xl:h-full flex gap-2 2xl:flex-col ">
				<ul className="size-full flex gap-2 2xl:flex-col items-center *:size-14 hover:*:*:brightness-75 *:*:transition-all *:*:cursor-pointer *:*:rounded-sm">
					{images?.images?.map((imageItem, index) => {
						return (
							<li
								key={index}
								onClick={() =>
									setCurrentImage(typeof imageItem === "string" ? imageItem : imageItem.src)
								}
								className="rounded-sm overflow-hidden border border-neutral-300">
								<Image
									src={typeof imageItem === "string" ? imageItem : imageItem.src}
									width={64}
									height={64}
									alt="more images product"
								/>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="size-full overflow-hidden rounded-lg border-2  ">
				{/* cover image wrapper */}
				<Image
					src={currentImage}
					width={500}
					height={500}
					alt="product image"
					className="size-[100%!important] object-contain hover:scale-105 transition-all cursor-pointer"
				/>
			</div>
			{/* TODO fix bug */}
			{/* TODO Why is it not displayed? */}
			{/* <ShowProductImageModal isShow={isShowModal} images={images} /> */}
		</div>
	);
}
