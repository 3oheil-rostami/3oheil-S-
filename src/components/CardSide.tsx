import React from "react";
import Image from "next/image";
import Link from "next/link";
import Timer from "./Timer";

import image from "@/../public/images/images.jpeg";
export default function CardSide() {
	return (
		<Link href={"/"} className='block bg-white h-full w-full py-1 rounded-md overflow-hidden'>
			<div className='image-wrapper h-[200px]'>
				<Image
					src={image.src}
					width={image.width}
					height={image.height}
					alt='Product image'
					className='w-auto h-auto'
				/>
			</div>
			<div className='details-wrapper px-2 mt-1'>
				<h5 className='line-clamp-2 font-medium text-md'>
					اسپری خوش بو کننده مارک فلانی مناسب خانوما 220 میلی مدل 5454
				</h5>
				<span className='flex flex-col items-end justify-between pt-2 px-2 py-2 text-xs'>
					<div className='flex items-center justify-between gap-2 mr-3 w-full'>
						<span className='discount-percent px-2 py-px bg-primary-500 text-white text-sm font-bold rounded-md'>
							15%
						</span>
						<span className='price-org text-neutral-800 line-through text-sm'>22,500 ت</span>
					</div>
					<span className='price-off font-bold text-base'>20,000 ت</span>
				</span>
			</div>
			<div className='bg-white mx-auto max-w-fit p-2 shadow-inner'>
				<Timer initialSeconds={9 * 60 * 60 * 24} />
			</div>
		</Link>
	);
}
