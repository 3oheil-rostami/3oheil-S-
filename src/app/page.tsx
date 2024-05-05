"use server";
import HeaderSlider from "@/components/HeaderSlider";
import ContainerSlider from "@/components/ContainerSlider";
import CategoriesWithImages from "@/components/CategoriesWithImages";
import Brands from "@/components/Brands";
import { getMoreDiscount } from "@/services/product";
import { AxiosResponse } from "axios";
import Navbar from "@/components/Navbar";
import NavbarMenu from "@/components/NavbarMenu";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";
import { Metadata } from "next";
import { Product } from "@/types/apiTypes";
async function getData(): Promise<{
	moreDiscountData: Product[];
}> {
	const moreDiscountResponse = await getMoreDiscount();
	const moreDiscountData: Product[] = moreDiscountResponse.data;
	return { moreDiscountData };
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "cosmetic online shop | Home ",
	};
}
export default async function Home() {
	const data = await getData();
	return (
		<>
			<Topbar srcImage="" />
			<div className="w-full flex flex-col items-center justify-center divide-y-2 divide-secondary-100">
				<Navbar />
				<NavbarMenu />
			</div>
			{/* home layout */}
			<HeaderSlider />
			<div className="w-full flex flex-col items-center justify-center gap-y-20 my-16">
				<ContainerSlider type="moreDiscount" products={data.moreDiscountData} />
				<CategoriesWithImages />
				<Brands />
				<ContainerSlider type="moreSale" products={data.moreDiscountData} />
			</div>
			{/* finish home layout */}
			<Footer />
		</>
	);
}
