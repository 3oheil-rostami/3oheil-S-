import Image from "next/image";
import Link from "./Link";
import { CardAddToCartProps } from "@/types";
import Button from "./form/Button";
import { FaRegHeart } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { calculateDiscountedPrice } from "@/functions";

export default function CardAddToCart({ brand, off, price, isLiked }: CardAddToCartProps) {
	return (
		<div
			className="h-fit flex items-center flex-row-reverse lg:flex-col justify-between lg:justify-normal z-30 border-2 bg-neutral-100 rounded-lg shadow-inner lg:divide-y-2 divide-neutral-200 px-3 py-5 overflow-hidden
		 ">
			<div className="brand-wrapper flex-col gap-2 items-center h-40 w-full hidden lg:flex ">
				<Image
					src={`http://localhost:4000/brandPic/${brand.brandPic}`}
					width={384}
					height={150}
					alt="brand image"
					className="h-full lg:w-full lg:h-40 object-cover rounded-md"
				/>
				<span className="text-neutral-700 hover:text-neutral-900 text-xs">
					<Link href={brand.enName === "unknown" ? "/brands" : `/brands/${brand.enName}`}>
						برای مشاهده همه محسولات برند {brand.name}
					</Link>
				</span>
			</div>
			<div className="lg:w-full lg:mt-10 flex items-center justify-between sm:px-5 py-3">
				<span className="hidden lg:inline">قیمت :</span>
				<div className="flex flex-col sm:flex-row items-center gap-4">
					{price > 0 && (
						<span className="px-3 py-0 h-fit  rounded-full inline-block bg-secondary-500 text-white text-base font-semibold">
							{off}%
						</span>
					)}
					<div className="flex flex-col gap-2">
						{price === 0 ? (
							<span className="text-secondary-700 font-bold">رایگان</span>
						) : (
							<>
								{price > 0 && !off && (
									<span className="text-sm sm:text-base xl:text-lg font-bold">
										{Math.floor(price)}
									</span>
								)}
								{price > 0 && off && (
									<span className="line-through text-sm sm:text-base xl:text-lg font-bold text-neutral-700">
										{Math.floor(price).toLocaleString()} تومان
									</span>
								)}
								{off && off > 0 && (
									<span className="text-sm sm:text-base xl:text-lg font-bold text-secondary-700">
										{Math.floor(calculateDiscountedPrice(price, off)).toLocaleString()} تومان
									</span>
								)}
							</>
						)}
					</div>
				</div>
			</div>
			<Button
				colorScheme="primary"
				typeBtn="text"
				variant="fill"
				type="button"
				size="lg"
				className="w-[40%!important] min-w-fit lg:w-[100%!important] h-[44px!important] text-sm sm:text-base lg:text-lg lg:mt-5 ">
				افزودن به سبد
			</Button>
			<div className="hidden lg:flex items-center justify-center gap-9 mt-3 pt-2">
				<Button colorScheme="secondary" typeBtn="icon" variant="text">
					{isLiked ? <FcLike /> : <FaRegHeart />}
				</Button>
				<ContentCopyBtn />
			</div>
		</div>
	);
}

const ContentCopyBtn = () => {
	"use client";
	return (
		<Button
			colorScheme="secondary"
			typeBtn="icon"
			variant="text"
			// onClick={() => navigator.clipboard.writeText(window.location.href)}
		>
			<MdContentCopy />
		</Button>
	);
};
