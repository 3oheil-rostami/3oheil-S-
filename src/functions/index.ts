export function calculateDiscountedPrice(
	originalPrice: number,
	discountPercentage: number
): number {
	const discountAmount = originalPrice * (discountPercentage / 100);
	const finalPrice = originalPrice - discountAmount;
	return finalPrice;
}
