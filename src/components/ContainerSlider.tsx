"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay} from "swiper/modules";

interface Props {
	type: "news-products" | "promotion" | "top-sales";
}

export default function ContainerSlider({ type }: Props) {
	return (
		<div
			className={`container-slider container w-full h-96 rounded-lg flex px-3 bg-no-repeat bg-cover bg-[80%] ${type}`}>
			<div className='control-wrapper flex flex-col items-center justify-end w-[225px] pb-8'>
				<h3 className='font-bold text-xl text-white'>تخفیفات ما</h3>
				<Button
					colorScheme='primary'
					size='sm'
					title={"مشاهده همه "}
					variant='fill'
					typeBtn='text'
				/>
			</div>
			<Swiper
				spaceBetween={10}
				centeredSlides={false}
				slidesPerView={"auto"}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
				// onAutoplayTimeLeft={onAutoplayTimeLeft}
				className='h-full w-full grid-rows-[200px]'>
				{Array(10)
					.fill(0)
					.map((_, index) => (
						<SwiperSlide key={index} className='w-[200px] py-8'>
							<div className='bg-white h-full w-full py-1 rounded-md'>
								<div className='image-wrapper h-[200px]'>
									<Image
										src={
											"data:image/jpeg;base64,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"
										}
										width={200}
										height={200}
										alt='Product image'
									/>
								</div>
								<div className='details-wrapper px-2 mt-1'>
									<h5 className='line-clamp-2 font-medium text-md'>
										اسپری خوش بو کننده مارک فلانی مناسب خانوما 220 میلی مدل 5454
									</h5>
									<span className='flex items-center justify-between pt-2 px-2 text-xs'>
										<span className='price-org text-slate-800 line-through'>22,500 ت</span>
										<span className='price-off text-bold'>20,000 ت</span>
									</span>
								</div>
							</div>
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
}
