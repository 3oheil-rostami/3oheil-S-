"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function HeaderSlider() {
	const progressCircle = useRef(null);
	const progressContent = useRef(null);
	// const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
	// 	// progressCircle?.current?.style?.setProperty("--progress", 1 - progress);
	// 	// progressContent?.current?.textContent = `${Math.ceil(time / 1000)}s`;
	// };
	return (
		<div className='h-96 w-full'>
			<Swiper
				spaceBetween={0}
				centeredSlides={true}
				autoplay={{
					delay: 3500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				loop
				modules={[Autoplay, Pagination]}
				// onAutoplayTimeLeft={onAutoplayTimeLeft}
				className='h-full w-full'>
				<SwiperSlide className='bg-red-50'>Slide 1</SwiperSlide>
				<SwiperSlide className='bg-red-100'>Slide 2</SwiperSlide>
				<SwiperSlide className='bg-red-200'>Slide 3</SwiperSlide>
				<SwiperSlide className='bg-red-300'>Slide 4</SwiperSlide>
				<SwiperSlide className='bg-red-400'>Slide 5</SwiperSlide>
				<SwiperSlide className='bg-red-500'>Slide 6</SwiperSlide>
				<SwiperSlide className='bg-red-600'>Slide 7</SwiperSlide>
				<SwiperSlide className='bg-red-700'>Slide 8</SwiperSlide>
				<SwiperSlide className='bg-red-900'>Slide 9</SwiperSlide>
				<div className='autoplay-progress' slot='container-end'>
					<svg viewBox='0 0 48 48' ref={progressCircle}>
						<circle cx='24' cy='24' r='20'></circle>
					</svg>
					<span ref={progressContent}></span>
				</div>
			</Swiper>
		</div>
	);
}
// swiper-pagination-bullet swiper-pagination-bullet-active
