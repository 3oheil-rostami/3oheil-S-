"use client";
import React from "react";
import Button from "./form/Button";
import SliderBanner from "./SliderBanner";
import CardSide from "./CardSide";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

interface Props {
	type: "news-products" | "promotion" | "top-sales";
}

export default function ContainerSlider({ type }: Props) {
	const swiper = useSwiper();
	return (
		<div
			className={`container-slider container-wrapper rounded-lg flex px-3 overflow-hidden bg-[rgb(255,26,64)!important]`}>
			<div className='w-72 relative'>
				<SliderBanner />
				<div className='absolute inset-0 w-full h-full flex flex-col items-center justify-end py-3'>
					<Button
						colorScheme='secondary'
						typeBtn='text'
						variant='fill'
						className='text-white shadow-none'>
						مشاهده همه
					</Button>
				</div>
			</div>
			<Swiper
				spaceBetween={10}
				centeredSlides={false}
				slidesPerView={"auto"}
				loop={false}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
				// onAutoplayTimeLeft={onAutoplayTimeLeft}
				className='slides-wrapper h-full w-full grid-rows-[200px] relative after:absolute after:left-0 after:top-0 after:bottom-0 after:h-full after:w-1 after:-translate-x-2 after:z-50'>
				{Array(10)
					.fill(0)
					.map((_, index) => (
						<SwiperSlide key={index} className='w-[200px] py-8'>
							<CardSide />
						</SwiperSlide>
					))}
				<div className='absolute w-28 h-12 bottom-2 left-0 z-[60] flex gap-2 items-center *:bg-white *:rounded-md *:*:text-[rgb(255,26,64)!important]'>
					<span>
						<Button
							colorScheme='primary'
							typeBtn='icon'
							variant='outline'
							className='text-[24px] text-primary-400'
							onClick={() => swiper?.slidePrev()}>
							<FaArrowCircleRight />
						</Button>
					</span>
					<span>
						<Button
							colorScheme='primary'
							typeBtn='icon'
							variant='outline'
							className='text-[24px]'
							onClick={() => swiper?.slideNext()}>
							<FaArrowCircleLeft />
						</Button>
					</span>
				</div>
			</Swiper>
		</div>
	);
}
