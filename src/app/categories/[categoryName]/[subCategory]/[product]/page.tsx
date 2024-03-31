import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ProductImages from "@/components/ProductImages";
import DetailsProduct from "@/components/DetailsProduct";
import CardAddToCart from "@/components/CardAddToCart";
import ImageSlider from "@/components/ImageSlider";
import product1 from "@/../public/images/6261156501979-1.jpg";
import product2 from "@/../public/images/image-product2.jpg";
import ProductLayout from "./ProductLayout";
import Button from "@/components/form/Button";
import { FcLike } from "react-icons/fc";
import { MdContentCopy } from "react-icons/md";
import MdModalLayout from "@/modals/MdModalLayout";

export default function page() {
	const productsImage = [product1, product2, product1, product2, product1, product2];
	return (
		<ProductLayout>
			<div className='lg:hidden'>
				<Breadcrumb
					links={[
						{ id: 1, title: "لوازم آرایشی", href: "#" },
						{ id: 2, title: "آرایش لب ", href: "#" },
						{ id: 3, title: "رژ لب فلان ", href: "#" },
					]}
				/>
			</div>
			<div className=' mx-auto justify-evenly md:flex-wrap lg:flex-wrap'>
				<div className='flex flex-col lg:flex-row justify-center gap-4'>
					<div className='relative'>
						<ImageSlider images={productsImage} />
						<div className='absolute top-5 right-0 z-50 lg:hidden'>
							<Button colorScheme='secondary' typeBtn='icon' variant='text'>
								<FcLike />
							</Button>
							<Button colorScheme='secondary' typeBtn='icon' variant='text'>
								<MdContentCopy />
							</Button>
						</div>
					</div>
					<ProductImages />
					<div className='grow'>
						<div className='hidden lg:block'>
							<Breadcrumb links={[{ title: "لوازم خانکی", href: "sdf", id: "dsf" }]} />
						</div>
						<h1 className='text-2xl font-semibold text-neutral-800 mb-2'>
							کرم سفید کننده شبانه شیوا مدل 14562{" "}
						</h1>
						<div className='flex gap-10 flex-col lg:flex-row lg:gap-3'>
							<DetailsProduct />
							<CardAddToCart brandId='1654164164164165' price={250200} off={12} />
						</div>
					</div>
				</div>
				<MdModalLayout
					size='sm'
					confirmButtonText='حذف'
					title='حذف کالا'
					typeModal='success'
					isShow={false}
				/>
			</div>
		</ProductLayout>
	);
}
