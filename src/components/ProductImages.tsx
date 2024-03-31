"use client";
import Image from "next/image";
import img from "@/../public/images/6261156501979-1.jpg";
import img2 from "@/../public/images/image-product2.jpg";
import ShowProductImageModal from "@/modals/ShowProductImageModal";
import { useState } from "react";

export default function ProductImages() {
	const images = [img, img2];
	const [currentImage, setCurrentImage] = useState(images[0]);
	return (
		<div className='hidden lg:flex flex-col-reverse 2xl:flex-row lg:size-96 xl:size-[500px] gap-2 '>
			<div className='w-full h-16 2xl:w-16 2xl:h-full flex gap-2 2xl:flex-col '>
				<ul className='size-full flex gap-2 2xl:flex-col items-center *:size-14 hover:*:*:brightness-75 *:*:transition-all *:*:cursor-pointer *:*:rounded-sm'>
					{images.map((image, index) => (
						<li
							key={index}
							onClick={() => setCurrentImage(image)}
							className='rounded-sm overflow-hidden border border-neutral-300'>
							<Image src={image.src} width={64} height={64} alt='more images product' />
						</li>
					))}
				</ul>
			</div>
			<div className='size-full overflow-hidden rounded-lg border-2  '>
				{/* cover image wrapper */}
				<Image
					src={currentImage.src}
					width={384}
					height={384}
					alt='product image'
					className='size-[100%!important] object-cover hover:scale-105 transition-all cursor-pointer'
				/>
			</div>
			{/* TODO fix bug */}
			{/* TODO Why is it not displayed? */}
			{/* <ShowProductImageModal isShow={isShowModal} images={images} /> */}
		</div>
	);
}
