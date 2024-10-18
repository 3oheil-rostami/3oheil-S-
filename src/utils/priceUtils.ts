import { Color, Product } from "@/types/apiTypes";
import { takingProductFromOthers } from ".";

export const getMostExpensvieProduct = (products: Product[]): Color => {
  const colors = products.map((productItem) => productItem.colors).flat();
  return takingProductFromOthers({
    products: colors,
    basedOn: "off",
    type: "inexpensive",
  });
};
