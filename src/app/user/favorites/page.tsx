import ProductListItem from "@/components/ProductListItem";
import { getFavoriteProducts } from "@/services/product";
import { Color, FavoritesPageData, Product } from "@/types/apiTypes";
import { takingProductFromOthers } from "@/utils";
import React from "react";

async function getData() {
  try {
    const response = await getFavoriteProducts();
    const data: FavoritesPageData = response.data as FavoritesPageData;
    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

const page = async () => {
  const data = await getData();
  return (
    <div>
      <ul className="list-none">
        {data?.productId.map((productItem) => {
          const currentColorProduct: Color = takingProductFromOthers({
            products: productItem.colors,
            basedOn: "off",
          });
          return (
            <ProductListItem
              productId={productItem}
              key={productItem._id}
              quantity={currentColorProduct.available}
              colorId={currentColorProduct}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default page;
