import React from "react";
import HomeSection from "./HomeSection";
import brand1 from "@/../public/images/brand1.jpg";
import brand2 from "@/../public/images/brand2.jpg";
import brand3 from "@/../public/images/brand3.jpg";
import brand4 from "@/../public/images/brand4.jpg";
import brand5 from "@/../public/images/brand5.jpg";
import brand6 from "@/../public/images/brand6.jpg";
import brand7 from "@/../public/images/brand7.jpg";
import brand8 from "@/../public/images/brand8.jpg";
import brand9 from "@/../public/images/brand9.jpg";
import brand10 from "@/../public/images/brand10.jpg";
import brand11 from "@/../public/images/brand11.jpg";
import brand12 from "@/../public/images/brand12.jpg";
import Image from "next/image";
export default function Brands() {
	const brands = [
		brand1,
		brand2,
		brand3,
		brand4,
		brand5,
		brand6,
		brand7,
		brand8,
		brand9,
		brand10,
		brand11,
		brand12,
	];
	return (
		<HomeSection
			title="بهترین برندهای لوازم آرایشی"
			className="categories-wrapper grid grid-cols-6 gap-y-3 gap-x-2">
			{brands.map((image, index) => (
				<div key={index}>
					<figure className="flex flex-col justify-center items-center relative h-36">
						<Image src={image.src} fill sizes="200px" className="inset-0" alt="logo brand" />
						<figcaption className="block text-center absolute z-10 bottom-0 bg-white text-neutral-900 font-bold">
							برند فلانی{" "}
						</figcaption>
					</figure>
				</div>
			))}
		</HomeSection>
	);
}
