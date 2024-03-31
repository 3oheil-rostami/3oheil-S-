import React from "react";
import HomeSection from "./HomeSection";
import Button from "./form/Button";
import Image from "next/image";
import article from "@/../public/images/article1.jpeg";
export default function LastArticles() {
	return (
		<HomeSection
			className='flex justify-center gap-4 border-2 border-neutral-300 rounded-lg px-4 py-8'
			title='مقالات'
			leftBtn={
				<Button colorScheme='primary' typeBtn='text' variant='text'>
					مقالات بیشتر
				</Button>
			}>
			{Array(6)
				.fill(5)
				.map(
					(_, index) =>
						index < 4 && (
							<div key={index} className='article-item w-1/4 rounded-lg overflow-hidden relative'>
								<Image
									src={article.src}
									width={article.width}
									height={article.height}
									alt='article'
									className='w-[100%!important] h-[100%!important] object-cover'
								/>
								<div className='overlay absolute inset-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent flex flex-col items-center justify-end p-3'>
									<h3 className='font-bold text-lg text-white shadow-black'>
										اطلاعاتی که باید در مورد همه لوازم آرایشی بدونید!
									</h3>
									<span className='text-xs font-semibold text-white self-end'>توسط ابولفضل</span>
								</div>
							</div>
						)
				)}
		</HomeSection>
	);
}
