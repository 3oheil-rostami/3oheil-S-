"use server";
import React from "react";
import DashboardLayout from "./DashboardLayout";
import { httpService } from "@/services/http-service";
import CategoriesTable from "@/components/CategoriesTable";

export default async function page() {
	return (
		<DashboardLayout>
			<div></div>
		</DashboardLayout>
	);
}
