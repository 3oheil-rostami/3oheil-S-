"use server";
import React from "react";
import CategoryLayout from "./CategoryLayout";
import ProductCart from "@/components/ProductCard";
import { getCategory } from "@/services/category";
import { CategoryPage } from "@/types/apiTypes";

async function getData(href: string) {
	try {
		const response = await getCategory(href);
		const data: CategoryPage = response.data;
		return data;
	} catch (error) {
		console.error(":( error is  =>", error);
		return undefined;
	}
}

export default async function page({
	params: { categoryName },
}: {
	params: { categoryName: string };
}) {
	const data: undefined | CategoryPage = await getData(categoryName);
	// console.log("data:", data);
	return (
		<CategoryLayout breadcrumb={data?.address || []} categories={data?.categories || []}>
			<div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-1 bg-neutral-100 ">
				{!!data &&
					data.products.map(productItem => <ProductCart {...productItem} key={productItem._id} />)}
			</div>
		</CategoryLayout>
	);
}
