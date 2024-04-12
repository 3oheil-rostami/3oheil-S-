"use client";
import Image from "next/image";
import { ProductImageSliderProps } from "@/types";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

export default function ImageSlider({ images, autoPlay }: ProductImageSliderProps) {
	return (
		<div className=" h-96 p-4 lg:[display:none!important]">
			<Swiper
				pagination={{
					dynamicBullets: true,
				}}
				autoplay={autoPlay}
				modules={[Pagination]}
				className="mySwiper h-full w-full">
				{images.map((imageItem, index) => (
					<SwiperSlide key={index} className="overflow-hidden py-2">
						<Image
							src={typeof imageItem === "string" ? imageItem : imageItem.src}
							width={600}
							height={600}
							alt={typeof imageItem !== "string" ? imageItem.src : "product image"}
							className="block mx-auto h-[100%!important] w-[auto!important] object-cover"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
