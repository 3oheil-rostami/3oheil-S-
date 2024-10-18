import { Color } from "@/types/apiTypes";

export function calculateDiscountedPrice(
  originalPrice: number,
  discountPercentage: number
): number {
  const discountAmount = originalPrice * (discountPercentage / 100);
  const finalPrice = originalPrice - discountAmount;
  return finalPrice;
}

export function takingProductFromOthers({
  basedOn,
  products,
  type = "inexpensive",
}: {
  products: Color[];
  basedOn: "off" | "price";
  type?: "expensive" | "inexpensive";
}): Color {
  const sortedColors = products?.sort((a, b) => a?.[basedOn] - b?.[basedOn]);
  return type === "inexpensive"
    ? sortedColors[sortedColors.length - 1]
    : sortedColors[0];
}

export const uniqueArray = (array: any[]) =>
  array.filter(
    (item, index, self) => index === self.findIndex((t) => t?._id === item?._id)
  );
