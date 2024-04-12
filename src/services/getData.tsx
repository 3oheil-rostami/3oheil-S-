import { Brand, Category } from "@/types/apiTypes";
import { httpService } from "./http-service";

export async function getBrands() {
	"use server";
	const response = await httpService.get("brand/getall", {
		headers: {
			Accept: "*/*",
			"Content-Type": "application/json",
		},
	});
	if (response.status === 200) {
		const brands: Brand[] = await response.data;
		console.log("brands:", brands);
		return brands;
	} else {
		throw new Error("The data related to the brand was not taken :(");
	}
}

export async function getCategories() {
	"use server";
	const response = await httpService.get("category");
	try {
		const categories: Category[] = await response.data;
		console.log("categories===>", categories);
		return categories;
	} catch (error) {
		console.log(error);
		throw new Error("The data related to the categories was not taken :(");
	}
}

export async function getStaticProps() {
	try {
		const categories: Category[] = await getCategories();
		const brands: Brand[] = await getBrands(); // Assuming Brand data is needed
		return {
			props: {
				categories,
				brands, // Add brand data here if needed
			},
		};
	} catch (error) {
		console.log(error);
		throw new Error("The data related to the categories was not taken :(");
	}
}
