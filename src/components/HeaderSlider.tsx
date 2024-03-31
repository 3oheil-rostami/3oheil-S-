"use client";
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
import Image from "next/image";
export default function HeaderSlider() {
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
							<Image
								src={index === 0 ? image0.src : index === 2 ? image2.src : image3.src}
								alt='ad image'
								className='w-full h-full object-cover'
								width={1200}
								height={400}
							/>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
// swiper-pagination-bullet swiper-pagination-bullet-active
