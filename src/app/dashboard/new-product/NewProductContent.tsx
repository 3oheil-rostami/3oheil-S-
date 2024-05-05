"use client";
import Input from "@/components/form/Input";
import DropZone from "@/components/DropZone";
import KeyValueInput from "@/components/form/KeyValueInput";
import PropertyInput from "@/components/form/PropertyInput";
import brandLogo from "@/../public/images/brand5.jpg";
import { ChangeEvent, useEffect, useState } from "react";
import { calculateDiscountedPrice } from "@/utils";
import Image from "next/image";
import Button from "@/components/form/Button";
import { MdClose } from "react-icons/md";
import { useDropzone } from "react-dropzone";
import ProductVersionsTable from "@/components/dashboard/ProductVersionsTable";
import { Brand, Category, SubCategory } from "@/types/apiTypes";
import { httpService } from "@/services/http-service";
import { getAllCategories } from "@/services/category";
import { getAllBrands } from "@/services/brand";

type FormFields = {
	name: string;
	enName: string;
	information: string;
	brand: string;
};

const NewProductContent = ({ categories, brands }: { categories: any; brands: any }) => {
	const [categoriesData, setCategoriesData] = useState<Promise<Category[]>>();
	const [brandsData, setBrandsData] = useState<Promise<Brand[]>>();
	const [currentCategory, setCurrentCategory] = useState<string>("-1");
	const [currentCategory2, setCurrentCategory2] = useState<string>("-1");
	const [currentCategory3, setCurrentCategory3] = useState<string>("-1");
	const [currentCategory4, setCurrentCategory4] = useState<string>("-1");
	const [form, setForm] = useState<FormFields>({
		name: "",
		enName: "",
		brand: "",
		information: "",
	});
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
	const [properties, setProperties] = useState<string[]>([]);
	const [features, setFeatures] = useState<{ key: string; value: string }[]>([]);
	const [color, setColor] = useState<string>("#000");
	const [colorCode, setColorCode] = useState<string>("");
	const [basePrice, setBasePrice] = useState<string>("");
	const [discount, setDiscount] = useState<string>("0");
	const [priceDiscount, setPriceDiscount] = useState<string | number>(0);
	const [amount, setAmount] = useState<string>("0");
	const [images, setImages] = useState<File[]>([]);
	const [productV, setProductV] = useState<
		{
			colorCode: string;
			colorName: string;
			basePrice: number;
			discount: number;
			available: number;
		}[]
	>([]);

	const addProductV = (): void => {
		const currentV = {
			colorCode: color,
			colorName: colorCode,
			basePrice: parseInt(basePrice),
			discount: parseInt(discount),
			available: parseInt(amount === "" ? "0" : amount),
		};
		setProductV(prevValue => [...prevValue, currentV]);
		setColorCode("");
		setBasePrice("");
		setDiscount("");
	};

	const handleFormChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	// async function getBrands(): Promise<Brand[]> {
	// 	// "use client";
	// 	const response = await httpService.get("brand/getall", {
	// 		headers: {
	// 			Accept: "*/*",
	// 			"Content-Type": "application/json",
	// 		},
	// 	});
	// 	if (response.status === 200) {
	// 		const brands: Brand[] = await response.data;
	// 		console.log("brands:", brands);
	// 		return brands;
	// 	} else {
	// 		throw new Error("The data related to the brand was not taken :(");
	// 	}
	// }

	// async function getCategories(): Promise<Category[]> {
	// 	// "use client";
	// 	const response = await httpService.get("category");
	// 	try {
	// 		const categories: Category[] = await response.data;
	// 		console.log("categories===>", categories);
	// 		return categories;
	// 	} catch (error) {
	// 		console.log(error);
	// 		throw new Error("The data related to the categories was not taken :(");
	// 	}
	// }

	useEffect(() => {
		// setCategoriesData(getCategories());
		// setBrandsData(getBrands());
		console.log("categories", categories);
		console.log("brands", brands);
	}, []);
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

	return (
		<div>
			<form className="flex items-start gap-3">
				<div className="min-w-[1000px]">
					<div className="border-2 p-6 rounded-lg flex flex-col gap-4 ">
						<h3 className="text-2xl font-bold text-neutral-800 mb-4">اطلاعات محصول</h3>
						<div className="get-names flex gap-3">
							<Input
								className="border"
								name="name"
								id="name"
								label="نام (فارسی)"
								placeholder="مثلا کرم صورت"
								onChange={handleFormChange}
							/>
							<Input
								className="border *:text-left"
								label="نام (انگلیسی)"
								name="enName"
								onChange={handleFormChange}
								placeholder="for example face cream"
							/>
						</div>
						<div className="textarea-wrapper">
							<span className="text-slate-800 text-sm">معرفی محصول</span>
							<textarea
								placeholder="برای اینکه مشتری محصول شما رو بشناسه ، لازمه که انرا معرفی کنید."
								className="w-full min-h-40 text-base p-3 outline-none border rounded-lg"
								name="information"
								onChange={handleFormChange}
							/>
						</div>
						<div className="flex gap-2 h-60 border rounded-lg p-3">
							<div className="p-3 w-1/2 rounded-lg">
								<span className="text-slate-800 text-sm">برند خود را انتخاب کنید </span>
								<select
									name="brand"
									id="brand"
									onChange={handleFormChange}
									className="w-full border p-2 rounded-md outline-none">
									<option value="-1">برند محصول خود را انتخاب کنید.</option>
									{!!brandsData &&
										brandsData.then(data =>
											data.map((brandItem, index) => (
												<option key={index} value={brandItem.enName}>
													{brandItem.name}
												</option>
											))
										)}
								</select>
							</div>
							<div className="brand-image-wrapper h-full w-1/2 ">
								<Image
									src={brandLogo.src}
									alt="brand logo"
									className="size-full object-cover"
									width={500}
									height={400}
								/>
							</div>
						</div>
						<div className="grow border-2 p-6 rounded-lg flex flex-col gap-4 mt-3 ">
							<h3 className="text-xl font-bold text-neutral-800">ویژگی محصول</h3>
							<div className="">
								<span className="text-slate-800 text-sm">افزودن ویژگی</span>
								<PropertyInput properties={properties} setProperties={setProperties} />
							</div>
							<br />
							<h3 className="text-xl font-bold text-neutral-800">مشخصات محصول</h3>
							<KeyValueInput features={features} setFeatures={setFeatures} />
							<ul className="mt-3 mx-4">
								{features.map((featureItem, index) => (
									<li key={index} className="flex items-center gap-2 border p-2 rounded-lg mb-1">
										<button
											type="button"
											onClick={() => {
												setFeatures(prevValue => {
													return prevValue.filter(
														({ key, value }) =>
															key !== featureItem.key && value !== featureItem.value
													);
												});
											}}
											className="p-1 rounded-full bg-neutral-800 text-neutral-50 ml-3">
											<MdClose />
										</button>
										<span className="text-lg font-semibold text-neutral-900">
											{featureItem.key}
										</span>
										<span>:</span>
										<span className="text-lg font-semibold text-neutral-900 underline">
											{featureItem.value}
										</span>
									</li>
								))}
							</ul>
						</div>
						<div className="flex">
							<div
								{...getRootProps({
									className:
										"h-24 bg-primary-100 w-1/2 rounded-lg flex justify-center items-center cursor-pointer",
								})}>
								<input type="file" {...getInputProps({})} />
								<span className="text-xl font-bold text-neutral-800">
									کاور محصول را اینجا آپلود کنید
								</span>
							</div>
							<div className="w-1/2 h-24 flex justify-center items-center">
								{acceptedFiles.length > 0 ? (
									acceptedFiles.slice(0, 1).map((imageItem: any, index) => (
										<span key={index} className="text-lg font-bold">
											{imageItem.path} - {imageItem.size} بایت
										</span>
									))
								) : (
									<>کاوری آپلود نشده</>
								)}
							</div>
						</div>
						<DropZone setImages={setImages} />
						<div className="flex">
							<div className="w-1/2"></div>
						</div>
					</div>
				</div>
				<div className="grow flex flex-col gap-3 sticky top-20">
					<div className="border-2 p-6 rounded-lg flex flex-col gap-4">
						<h3 className="text-2xl font-bold text-neutral-800 mb-4">رنگبندی و قیمت محصول</h3>
						<Input
							className="p-[2px!important] border *:rounded-lg"
							type="color"
							value={color}
							onChange={e => setColor(e.target.value)}
							label="رنگ محصول"
						/>
						<Input
							className="border"
							type="text"
							value={colorCode}
							onChange={e => setColorCode(e.target.value)}
							label="نام یا کد رنگی"
							placeholder="مثلا صابونی کثیف"
						/>
						<Input
							className="border"
							type="number"
							value={basePrice}
							onChange={e => setBasePrice(e.target.value)}
							label="قیمت پایه"
							placeholder="مثلا 2457000"
						/>
						<Input
							className="border"
							min={0}
							max={100}
							type="number"
							value={discount}
							onChange={e => setDiscount(e.target.value)}
							label="درصد تخفیف"
							placeholder="مثلا 15"
						/>
						<div className="flex items-center gap-2">
							<span className="text-lg text-neutral-900">قیمت تخفیف خورده :</span>
							<span className="text-lg font-semibold text-neutral-900">
								{priceDiscount.toLocaleString()}
							</span>
							<span className="text-sm text-neutral-900 font-bold">تومان</span>
						</div>
						<Input
							className="border"
							type="number"
							value={amount}
							onChange={e => setAmount(e.target.value)}
							label="تعداد موجودی در انبار"
							placeholder="مثلا 250"
						/>
						<Button
							colorScheme="primary"
							variant="fill"
							className="w-full mt-3"
							size="md"
							onClick={addProductV}>
							افزودن رنگ با جزئیات قیمت و موجودی
						</Button>
					</div>
					<div className="border-2 p-6 rounded-lg flex flex-col gap-4">
						<div className="flex flex-col gap-2">
							<span className="text-lg font-bold text-neutral-800">
								دسته بندی های محصول رو انتخاب کنید.
							</span>
							<div className="p-3 rounded-lg">
								<span className="text-slate-800 text-sm">دسته بندی های پایه</span>
								<select
									id="categoryBase"
									name="categoryBase"
									value={currentCategory}
									onChange={e => setCurrentCategory(e.target.value)}
									className="w-full border p-2 rounded-md outline-none">
									<option value="-1">هیچکدام</option>
									{!!categoriesData &&
										categoriesData.then(data =>
											data.map(categoryItem => (
												<option key={categoryItem._id} value={categoryItem._id}>
													{categoryItem.name}
												</option>
											))
										)}
								</select>
							</div>
							<div className="p-3 rounded-lg">
								<span className="text-slate-800 text-sm">زیر دسته بندی های پایه</span>
								<select
									id="category"
									name="category"
									className="w-full border p-2 rounded-md outline-none">
									<option value="-1">هیچکدام</option>
									{!!categoriesData &&
										categoriesData.then(data =>
											data
												.filter(categoryItem => categoryItem._id === currentCategory)[0]
												.subs?.map(categoryItem => (
													<option key={categoryItem._id} value={categoryItem._id}>
														{categoryItem.name}
													</option>
												))
										)}
								</select>
							</div>
							<div className="p-3 rounded-lg">
								<span className="text-slate-800 text-sm">زیر مجموعه دسته بندی ها</span>
								<select
									id="subcategory"
									name="subcategory"
									className="w-full border p-2 rounded-md outline-none">
									<option value="-1">هیچکدام</option>
								</select>
							</div>
							<div className="p-3 rounded-lg">
								<span className="text-slate-800 text-sm">زیر زیر دسته بندیها</span>
								<select
									id="subCategory2"
									name="subCategory2"
									className="w-full border p-2 rounded-md outline-none ">
									<option value="-1">هیچکدام</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</form>
			<div className="mt-3">
				<ProductVersionsTable data={[...productV]} />
			</div>
		</div>
	);
};

export default NewProductContent;

async function getServerSideProps() {
	const categoriesData = (await getAllCategories()).data;
	const brandData = await getAllBrands();
	console.log("categoryData", categoriesData);
	console.log("brandData", brandData);
	return {
		props: {
			categories: categoriesData,
			brands: brandData,
		},
	};
}
