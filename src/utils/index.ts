import { Color } from "@/types/apiTypes";

export function calculateDiscountedPrice(
	originalPrice: number,
	discountPercentage: number
): number {
	const discountAmount = originalPrice * (discountPercentage / 100);
	const finalPrice = originalPrice - discountAmount;
	return finalPrice;
}

export function takingProductFromOthers(products: Color[], basedOn: "off" | "price"): Color {
	const x = products.sort((a, b) => a[basedOn] - b[basedOn]).reverse();
	return x[0];
}
