import Image from "next/image";
import React from "react";
import productImg from "@/../public/images/image-product2.jpg";
import Link from "next/link";
import { LiaStarSolid } from "react-icons/lia";
import AddToCartButton from "./AddToCartButton";
export default function ProductCard() {
	return (
		<article className='overflow-hidden hover:shadow-md bg-white hover:-translate-y-1 transition-all p-4'>
			<div className='flex gap-1 flex-col'>
				<div className=''></div>
				<div className='flex flex-col p-0'>
					<div className='image-wrapper w-full h-60 relative'>
						<div className='absolute bottom-0 right-1'>
							<AddToCartButton count={0} />
						</div>
						<Link href={"#1"}>
							<picture className='h-full w-full block'>
								<Image
									src={productImg.src}
									width={300}
									height={300}
									alt=''
									className='w-[100%!important] h-[100%!important] max-h-96 object-cover'
								/>
							</picture>
						</Link>
						<div className='colors-wrapper w-fit absolute top-5 left-0 flex flex-col gap-1 px-2 *:rounded-full *:size-2'>
							<span className='bg-sky-500'></span>
							<span className='bg-red-500'></span>
							<span className='bg-lime-500'></span>
						</div>
					</div>
				</div>
				<Link href={"#2"}>
					<div className='flex flex-col px-2 gap-2'>
						<div className='mt-2 h-12'>
							<h3 className='line-clamp-2 text-base font-semibold text-neutral-800'>
								پنکیک اپتیموس مدل 05{" "}
							</h3>
						</div>
						<div className='flex justify-between items-center'>
							<div className='text-primary-700 text-xs'>فقط 5 عدد در انبار مونده</div>
							<div className='score-wrapper flex items-center gap-1'>
								<span className='text-xs font-bold text-neutral-700'>3.5</span>
								<span>
									<LiaStarSolid className='text-yellow-600 fill-yellow-500 stroke-yellow-500' />
								</span>
							</div>
						</div>
						<div className='flex flex-col'>
							<div className='flex justify-between items-center'>
								<div className=''>
									<span className='inline-block px-2 py-1 rounded-full text-xs font-bold text-white bg-secondary-700'>
										13%
									</span>
								</div>
								<div className='text-sm font-bold text-neutral-800'>
									<span className='mx-1'>120,220</span>
									<span>تومان</span>
								</div>
							</div>
							<div className='text-sm font-medium text-neutral-700 line-through text-end'>
								150,000
							</div>
						</div>
					</div>
				</Link>
			</div>
		</article>
	);
}
