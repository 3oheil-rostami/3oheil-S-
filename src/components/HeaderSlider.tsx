"use client";
import React, { useRef } from "react";
import Link from "next/link";
import data from "@/data/db.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import image0 from "@/../public/images/header-slider1.gif";
import image2 from "@/../public/images/header-slider2.jpg";
import image3 from "@/../public/images/header-slider3.jpg";
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
				{data.headerSlider.map(({ id, img, href }, index) => (
					<SwiperSlide key={id} className='bg-red-50'>
						<Link href={href} className='h-full w-full'>
							<img
								src={index === 0 ? image0.src : index === 2 ? image2.src : image3.src}
								alt='ad image'
								className='w-full h-full object-cover'
							/>
						</Link>
					</SwiperSlide>
				))}
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
