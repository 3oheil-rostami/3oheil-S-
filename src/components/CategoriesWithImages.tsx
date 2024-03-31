import Image from "next/image";
import Link from "next/link";
import React from "react";
import image01 from "@/../public/images/category01.jpg";
import image02 from "@/../public/images/category02.jpg";
import image03 from "@/../public/images/category03.jpg";
import image04 from "@/../public/images/category04.jpg";
import image05 from "@/../public/images/category05jpg.jpg";
import image06 from "@/../public/images/category06.jpg";
import HomeSection from "./HomeSection";
export default function CategoriesWithImages() {
	const images = [image01, image02, image03, image04, image05, image06];
	return (
		<HomeSection
			title='دسته بندی‌های لوازم آرایشی'
			className='categories-wrapper grid grid-cols-3 gap-y-5 gap-x-4'>
			{Array(6)
				.fill(9)
				.map((_, index) => (
					<div key={index} className='h-44 rounded-lg overflow-hidden'>
						<Link href={"/"} className='block max-h-full w-full h-full'>
							<Image
								src={images[index].src}
								height={176}
								width={500}
								alt='category image'
								className='block w-[100%!important] max-h-44 object-cover'
							/>
						</Link>
					</div>
				))}
		</HomeSection>
	);
}
