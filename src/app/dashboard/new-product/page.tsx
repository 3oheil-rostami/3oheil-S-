"use server";
import DashboardLayout from "../DashboardLayout";
import Input from "@/components/form/Input";
import DropZone from "@/components/DropZone";
import PropertyInput from "@/components/form/PropertyInput";
import KeyValueInput from "@/components/form/KeyValueInput";
import brandLogo from "@/../public/images/brand5.jpg";
import { httpService } from "@/core/http-service";
import NewProductContent from "./NewProductContent";

// از اینجا باید ادامه داده شود و بخاطر اینکه سرور کلاینت قاطی پاتی  شده باید همه اونارو باز درست کنم
const NewProduct = async () => {
	async function getBrands() {
		"use server";
		const response = await httpService.get("brand/getall", {
			headers: {
				Accept: "*/*",
				"Content-Type": "application/json",
			},
		});
		if (response.status === 200) {
			const data = await response.data;
			console.log("data:", data);
			return await data;
		} else {
			throw new Error("xata darim :(");
		}
	}
	return (
		<DashboardLayout>
			<NewProductContent brands={getBrands()} />
		</DashboardLayout>
	);
};
export default NewProduct;
