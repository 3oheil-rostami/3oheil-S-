"use server";
import Brands from "@/components/Brands";
import CategoriesWithImages from "@/components/CategoriesWithImages";
import ContainerSlider from "@/components/ContainerSlider";
import Footer from "@/components/Footer";
import HeaderSlider from "@/components/HeaderSlider";
import Navbar from "@/components/Navbar";
import NavbarMenu from "@/components/NavbarMenu";
import Topbar from "@/components/Topbar";
import { getMoreDiscount } from "@/services/product";
import { Product } from "@/types/apiTypes";
import { Metadata } from "next";
async function getData(): Promise<
  | {
      moreDiscountData: Product[];
    }
  | undefined
> {
  try {
    const moreDiscountResponse = await getMoreDiscount();
    const moreDiscountData: Product[] = moreDiscountResponse.data;
    return { moreDiscountData };
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "cosmetic online shop | Home ",
  };
}
export default async function Home() {
  const data = await getData();
  return (
    <>
      <Topbar srcImage="" />
      <div className="w-full flex flex-col items-center justify-center divide-y-2 divide-secondary-100">
        <Navbar />
        <NavbarMenu />
      </div>
      {/* home layout */}
      <HeaderSlider />
      <div className="w-full flex flex-col items-center justify-center gap-y-20 my-16">
        {data ? (
          <ContainerSlider
            type="moreDiscount"
            products={data.moreDiscountData}
          />
        ) : null}
        <CategoriesWithImages />
        <Brands />
        {data ? (
          <ContainerSlider type="moreSale" products={data.moreDiscountData} />
        ) : null}
      </div>
      {/* finish home layout */}
      <Footer />
    </>
  );
}
