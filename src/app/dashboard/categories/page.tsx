"use server";

import CategoriesTable from "@/components/CategoriesTable";
import React from "react";
import DashboardLayout from "../DashboardLayout";
import { httpService } from "@/services/http-service";

async function getData() {
	"use server";
	try {
		const response = await httpService.get("Category/", {
			headers: { Accept: "application/json", "Content-Type": "*/*" },
		});
		const data = response.data;
		// console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
	// const res = await fetch("https://localhost:4000/Category");
	// // The return value is *not* serialized
	// // You can return Date, Map, Set, etc.

	// if (!res.ok) {
	// 	// This will activate the closest `error.js` Error Bou ndary
	// 	console.log("erorrrrrrrrrrr");
	// 	throw new Error("Failed to fetch data");
	// }

	// console.log("res.json():", res.json());
	// return res.json();
}
export default async function page() {
	const data = await getData();
	return (
		<DashboardLayout>
			<div>
				<CategoriesTable data={data} />
			</div>
		</DashboardLayout>
	);
}
