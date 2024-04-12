import React, { memo } from "react";
import UserLayout from "../UserLayout";
import Button from "@/components/form/Button";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import productImage from "@/../public/images/images.jpeg";
import AddToCartButton from "@/components/AddToCartButton";
import Timer from "@/components/Timer";

const page = () => {
	return (
		<UserLayout>
			<div className='flex gap-3'>
				<div className='grow'>
					<div className='flex justify-between items-center border-b-2 pb-2'>
						<h3 className='text-xl text-neutral-700 font-bold'>سبد خرید شما : (4 کالا)</h3>
						<Button colorScheme='secondary' size='xs' variant='text'>
							خالی کردن سبد
							<MdDelete className='text-xl' />
						</Button>
					</div>
					<div className='cart-content'>
						<ul>
							<nav>
								{Array(4)
									.fill(9)
									.map((_, index) => (
										<li className='border-b py-3 last:border-none' key={index}>
											<div className='details-wrapper flex gap-3'>
												<div className='image-area flex flex-col gap-2 items-center'>
													<div className='image-wrapper size-24 overflow-hidden'>
														<Image src={productImage.src} width={100} height={100} alt='' />
													</div>
													<AddToCartButton count={5} />
													{/* <Timer initialSeconds={7 * 60 * 60 * 24} /> */}
												</div>
												<div className='py-3'>
													<h4 className='text-base font-bold text-neutral-800'>
														شامپو ضد ريزش مو سریتا حاوی عصاره کافئین ظرفیت 200 میلی لیتر
													</h4>
													<div className='colors flex gap-2 items-center mt-1'>
														<div className='flex items-center gap-1'>
															<div className='size-5 bg-teal-500 rounded-full border' />
															<span className='text-sm font-medium text-neutral-800'>تیلی</span>
														</div>
													</div>
													<div className='button-control-wrapper py-3 px-2 pt-5 flex flex-col gap-3 items-start'>
														<div className='flex items-center gap-3'>
															<span className='line-through text-sm font-bold text-neutral-700'>
																124,0000 تومان
															</span>
															<span className='px-1 rounded-md  bg-primary-500 text-white text-sm font-normal'>
																12%
															</span>
														</div>
														<span className='text-base font-bold text-primary-800'>
															123,500 تومان
														</span>
													</div>
												</div>
											</div>
										</li>
									))}
							</nav>
						</ul>
					</div>
				</div>
				<div className='border-r-2 w-72 pr-4'>
					<ul className='list-none flex flex-col gap-5 bg-neutral-50 p-5 rounded-xl'>
						<li className='flex justify-between items-center'>
							<span className='text-sm font-medium text-neutral-800'>قیمت کالاها (4) :</span>
							<span className='text-base font-semibold text-neutral-800'>۱۷۱,۸۰۰ تومان</span>
						</li>
						<li className='flex justify-between items-center'>
							<span className='text-sm font-semibold text-neutral-800'>جمع سبد خرید :</span>
							<span className='text-base font-bold text-neutral-800'>۱۰۶,۹۰۰ تومان</span>
						</li>
						<li className='flex justify-between items-center'>
							<span className='text-sm font-semibold text-primary-800'>سود شما از خرید :</span>
							<span className='text-base font-bold text-primary-800'> ۶۴,۹۰۰ تومان</span>
						</li>
						<Button colorScheme='primary' variant='fill' size='xs' className='mt-3'>
							تائید و تکمیل سفارش
						</Button>
					</ul>
					<p className=' text-xs text-neutral-700 text-justify mt-3 px-2'>
						هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام موجودی، کالاها از سبد حذف می‌شوند.
					</p>
				</div>
			</div>
		</UserLayout>
	);
};

export default memo(page);
