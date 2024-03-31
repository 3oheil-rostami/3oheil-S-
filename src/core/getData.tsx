import { httpService } from "./http-service";

export async function getBrands() {
	try {
		const response = await httpService.get("brand/getall", {
			headers: {
				Accept: "*/*",
				"Content-Type": "application/json",
			},
		});
		const data = response.data;
		console.log("data:", data);
		return data;
	} catch (error) {
		console.log(error);
	}
}
