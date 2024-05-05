"use server";
import React from "react";
import ProductCart from "@/components/ProductCard";
import { getCategory } from "@/services/category";
import { CategoryPage, ProductsInCart } from "@/types/apiTypes";
import { getAllProductsInCart } from "@/services/cart";

async function getData(href: string) {
	try {
		const categoriesResponse = await getCategory(href);
		const productsInCartResponse = await getAllProductsInCart();
		const categoriesData: CategoryPage = categoriesResponse.data;
		const productsInCartData: ProductsInCart = productsInCartResponse.data;
		if (productsInCartResponse.status === 497) return { categoriesData };
		return { categoriesData, productsInCartData };
	} catch (error) {
		const categoriesResponse = await getCategory(href);
		const categoriesData: CategoryPage = categoriesResponse.data;
		console.log("error is =>> ", error);
		return { categoriesData };
	}
}

export default async function page({
	params: { categoryName },
}: {
	params: { categoryName: string };
}) {
	const data:
		| {
				categoriesData: CategoryPage;
				productsInCartData?: undefined;
		  }
		| {
				categoriesData: CategoryPage;
				productsInCartData: ProductsInCart;
		  } = await getData(categoryName);

	return (
		<div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-1 bg-neutral-100 ">
			{!!data &&
				data.categoriesData.products.map(productItem => {
					console.log("productItem:", productItem);
					return (
						<ProductCart
							key={productItem._id}
							product={productItem}
							inCart={data.productsInCartData}
						/>
					);
				})}
		</div>
	);
}
