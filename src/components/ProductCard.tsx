import Image from "next/image";
import React from "react";
import Link from "next/link";
import { LiaStarSolid } from "react-icons/lia";
import AddToCartButton from "./AddToCartButton";
import { Product } from "@/types/apiTypes";
import { calculateDiscountedPrice } from "@/functions";
export default function ProductCard({ name, enName, colors, productCover, _id }: Product) {
	return (
		<article className="overflow-hidden hover:shadow-md bg-white hover:-translate-y-1 transition-all p-4">
			<div className="flex gap-1 flex-col">
				<div className=""></div>
				<div className="flex flex-col p-0">
					<div className="image-wrapper h-60 w-full relative">
						<div className="absolute bottom-0 right-1 z-50">
							<AddToCartButton
								productId={_id}
								colorId={colors.sort((a, b) => a.price - b.price)[0]._id}
								count={0}
							/>
						</div>
						<Link href={`/product/${enName}`}>
							<picture className="h-full w-full block">
								<Image
									src={`http://localhost:4000/image/productCover/${productCover}`}
									width={300}
									height={300}
									alt=""
									className="w-[100%!important] h-[100%!important] max-h-96 object-contain hover:scale-105 transition-all"
								/>
							</picture>
						</Link>

						<div className="colors-wrapper w-fit absolute top-5 left-0 flex flex-col gap-1 px-2 *:rounded-full *:size-4">
							{colors.map((colorItem, index) => (
								<span
									key={index}
									style={{ background: colorItem.colorCode || "#fff" }}
									className="border-2"
									title={colorItem.colorName}
								/>
							))}
						</div>
					</div>
				</div>
				<Link href={`/product/${enName}`}>
					<div className="flex flex-col px-2 gap-2">
						<div className="mt-2 h-12">
							<h3 className="line-clamp-2 text-base font-semibold text-neutral-800">{name}</h3>
						</div>
						<div className="flex justify-between items-center">
							<div className="text-primary-700 text-xs">
								{colors.sort((a, b) => a.price - b.price)[0].available < 20 &&
									`موجودی کمتر از ${colors.sort((a, b) => a.price - b.price)[0].available} عدد `}
							</div>
							<div className="score-wrapper flex items-center gap-1">
								<span className="text-xs font-bold text-neutral-700">3.5</span>
								<span>
									<LiaStarSolid className="text-yellow-600 fill-yellow-500 stroke-yellow-500" />
								</span>
							</div>
						</div>
						<div className="flex flex-col">
							<div className="flex justify-between items-center">
								<div className="">
									<span className="inline-block px-2 py-1 rounded-full text-xs font-bold text-white bg-secondary-700">
										{colors.sort((a, b) => a.price - b.price)[0].off}%
									</span>
								</div>
								<div className="text-sm font-bold text-neutral-800">
									<span className="mx-1">
										{calculateDiscountedPrice(
											colors.sort((a, b) => a.price - b.price)[0].price,
											colors.sort((a, b) => a.price - b.price)[0].off
										).toLocaleString()}
									</span>
									<span>تومان</span>
								</div>
							</div>
							<div className="text-sm font-medium text-neutral-700 line-through text-end">
								{colors.sort((a, b) => a.price - b.price)[0].price.toLocaleString()}
							</div>
						</div>
					</div>
				</Link>
			</div>
		</article>
	);
}
