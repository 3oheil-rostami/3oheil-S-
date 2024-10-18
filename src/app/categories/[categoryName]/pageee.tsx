// "use server";
// import React from "react";
// import ProductCart from "@/components/ProductCard";
// import { getCategory } from "@/services/category";
// import { CategoryPage, Product, ProductsInCart } from "@/types/apiTypes";
// import { getAllProductsInCart } from "@/services/cart";
// import SortController from "./components/SortController";
// import { getProduct, getProducts } from "@/services/product";

// type DataType =
//   | {
//       products: Product[];
//       productsInCartData?: undefined;
//     }
//   | {
//       products: CategoryPage;
//       productsInCartData: ProductsInCart;
//     }
//   | undefined;

// type Props = {
//   params: { categoryName: string; sort: string };
//   searchParams: { [key: string]: string | string[] | undefined };
// };

// async function getData(href: string, searchParams?: string) {
//   try {
//     const categoriesResponse = await getProducts();
//     const productsInCartResponse = await getAllProductsInCart();
//     const products: CategoryPage = categoriesResponse.data;
//     const productsInCartData: ProductsInCart = productsInCartResponse.data;
//     if (productsInCartResponse.status === 497) return { products };
//     return { products, productsInCartData };
//   } catch (error) {
//     console.error("error is : ", error);
//   }
// }

// export default async function page({
//   params: { categoryName },
//   searchParams,
// }: Props) {
//   const searchParamsUrl = Object.entries(searchParams)
//     .map(([key, value]) => `${key}=${value}`)
//     .join("&");

//   const data: DataType = await getData(categoryName, searchParamsUrl);

//   return (
//     <div className="flex flex-col gap-2">
//       <SortController />
//       <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-1 bg-neutral-100 ">
//         {!!data &&
//           data.products?.subs?.map((productItem) => {
//             return (
//               <ProductCart
//                 key={productItem._id}
//                 product={productItem}
//               />
//             );
//           })}
//       </div>
//     </div>
//   );
// }
