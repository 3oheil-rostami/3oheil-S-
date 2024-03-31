"use client";
import Input from "@/components/form/Input";
import DropZone from "@/components/DropZone";
import KeyValueInput from "@/components/form/KeyValueInput";
import PropertyInput from "@/components/form/PropertyInput";
import brandLogo from "@/../public/images/brand5.jpg";
import { useEffect, useState } from "react";
import { calculateDiscountedPrice } from "@/functions";
import Image from "next/image";
import Button from "@/components/form/Button";

const NewProductContent = (brands: any) => {
	const [name, setName] = useState<string>("");
	const [enName, setEnName] = useState<string>("");
	const [information, setInformation] = useState<string>("");
	const [currentBrand, setCurrentBrand] = useState<string>("");
	const [properties, setProperties] = useState<string[]>([]);
	const [features, setFeatures] = useState<{ key: string; value: string }[]>([]);
	const [color, setColor] = useState<string>("#000");
	const [colorCode, setColorCode] = useState<string>("");
	const [basePrice, setBasePrice] = useState<string>("");
	const [discount, setDiscount] = useState<string>("");
	const [priceDiscount, setPriceDiscount] = useState<string | number>(0);
	const [amount, setAmount] = useState<string>("");
	const [productV, setProductV] = useState<
		{
			color: string;
			colorName: string;
			basePrice: number;
			discount: number;
			amount: number;
		}[]
	>([]);

	const addProductV = (): void => {
		const currentV = {
			color,
			colorName: colorCode,
			basePrice: parseInt(basePrice),
			discount: parseInt(discount),
			amount: parseInt(amount),
		};
		setProductV(prevValue => [...prevValue, currentV]);
		setColorCode("");
		setBasePrice("");
		setDiscount("");
	};

	useEffect(() => {
		if (parseInt(discount) < 0) {
			setDiscount("0");
		}
		if (parseInt(discount) > 100) {
			setDiscount("100");
		}
		setPriceDiscount(
			calculateDiscountedPrice(
				parseInt(basePrice === "" ? "0" : basePrice),
				parseInt(discount === "" ? "0" : discount)
			)
		);
	}, [basePrice, discount]);

	useEffect(() => {
		console.log(productV);
	}, [productV]);
	return (
		<div>
			<form className='flex items-start gap-3'>
				<div className='min-w-[1000px]'>
					<div className='border-2 p-6 rounded-lg flex flex-col gap-4 '>
						<h3 className='text-2xl font-bold text-neutral-800 mb-4'>اطلاعات محصول</h3>
						<div className='get-names flex gap-3'>
							<Input
								className='border'
								value={name}
								onChange={e => setName(e.target.value)}
								label='نام (فارسی)'
								placeholder='مثلا کرم صورت'
							/>
							<Input
								className='border *:text-left'
								label='نام (انگلیسی)'
								value={enName}
								onChange={e => setEnName(e.target.value)}
								placeholder='for example face cream'
							/>
						</div>
						<div className='textarea-wrapper'>
							<span className='text-slate-800 text-sm'>معرفی محصول</span>
							<textarea
								placeholder='برای اینکه مشتری محصول شما رو بشناسه ، لازمه که انرا معرفی کنید.'
								className='w-full min-h-40 text-base p-3 outline-none border rounded-lg'
								value={information}
								onChange={e => setInformation(e.target.value)}></textarea>
						</div>
						<div className='flex gap-2 h-60 border rounded-lg p-3'>
							<div className='p-3 w-1/2 rounded-lg'>
								<span className='text-slate-800 text-sm'>برند خود را انتخاب کنید </span>
								<select
									name='brandId'
									id='brandId'
									value={currentBrand}
									onChange={e => setCurrentBrand(e.target.value)}
									className='w-full border p-2 rounded-md outline-none'>
									<option value='-1'>برند محصول خود را انتخاب کنید.</option>
									{!!brands &&
										brands.length > 0 &&
										brands.map((brandItem: any, index: number) => {
											console.log(brandItem);
											return (
												<option key={index} value={brandItem.enName}>
													{brandItem.name}
												</option>
											);
										})}
								</select>
							</div>
							<div className='brand-image-wrapper h-full w-1/2 '>
								<Image
									src={brandLogo.src}
									alt='brand logo'
									className='size-full object-cover'
									width={500}
									height={400}
								/>
							</div>
						</div>
						<DropZone />
						<div className='flex'>
							<div className='w-1/2'></div>
						</div>
					</div>

					<div className='grow border-2 p-6 rounded-lg flex flex-col gap-4 mt-3'>
						<h3 className='text-2xl font-bold text-neutral-800 mb-4'>ویژگی و مشخصات </h3>
						<h3 className='text-xl font-bold text-neutral-800'>ویژگی محصول</h3>
						<div className=''>
							<span className='text-slate-800 text-sm'>افزودن ویژگی</span>
							<PropertyInput properties={properties} setProperties={setProperties} />
						</div>
						<br />
						<h3 className='text-xl font-bold text-neutral-800'>مشخصات محصول</h3>
						<KeyValueInput features={features} setFeatures={setFeatures} />
					</div>
				</div>
				<div className='grow flex flex-col gap-3'>
					<div className='border-2 p-6 rounded-lg flex flex-col gap-4'>
						<h3 className='text-2xl font-bold text-neutral-800 mb-4'>رنگبندی و قیمت محصول</h3>
						<Input
							className='p-[2px!important] border *:rounded-lg'
							type='color'
							value={color}
							onChange={e => setColor(e.target.value)}
							label='رنگ محصول'
						/>
						<Input
							className='border'
							type='text'
							value={colorCode}
							onChange={e => setColorCode(e.target.value)}
							label='نام یا کد رنگی'
							placeholder='مثلا صابونی کثیف'
						/>
						<Input
							className='border'
							type='number'
							value={basePrice}
							onChange={e => setBasePrice(e.target.value)}
							label='قیمت پایه'
							placeholder='مثلا 2457000'
						/>
						<Input
							className='border'
							min={0}
							max={100}
							type='number'
							value={discount}
							onChange={e => setDiscount(e.target.value)}
							label='درصد تخفیف'
							placeholder='مثلا 15'
						/>
						<div className='flex items-center gap-2'>
							<span className='text-lg text-neutral-900'>قیمت تخفیف خورده :</span>
							<span className='text-lg font-semibold text-neutral-900'>
								{priceDiscount.toLocaleString()}
							</span>
							<span className='text-sm text-neutral-900 font-bold'>تومان</span>
						</div>
						<Input
							className='border'
							type='number'
							label='تعداد موجودی در انبار'
							placeholder='مثلا 250'
						/>
						<Button
							colorScheme='primary'
							variant='fill'
							className='w-full mt-3'
							size='md'
							onClick={addProductV}>
							افزودن رنگ با جزئیات قیمت و موجودی
						</Button>
					</div>
					<div className='border-2'>
						<div>
							<span className='text-lg font-bold text-neutral-800'>
								دسته بندی های محصول رو انتخاب کنید.
							</span>
							<section id='category'>
								<option value='-1'>هیچکدام</option>
							</section>
							<section id='sub-category'>
								<option value='-1'>هیچکدام</option>
							</section>
							<section id='subcategory-2'>
								<option value='-1'>هیچکدام</option>
							</section>
							<section id='sub-category3'>
								<option value='-1'>هیچکدام</option>
							</section>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default NewProductContent;
