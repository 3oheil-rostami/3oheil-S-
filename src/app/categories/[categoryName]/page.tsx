"use server";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import LinkAccordion from "@/components/LinkAccordion";
import Navbar from "@/components/Navbar";
import NavbarMenu from "@/components/NavbarMenu";
import ProductCard from "@/components/ProductCard";
import Topbar from "@/components/Topbar";
import NavDrawLink from "@/components/dashboard/NavDrawLink";
import { getCategory } from "@/services/category";
import { LuGalleryVerticalEnd } from "react-icons/lu";
import RightPanelFilterControl from "./components/RightPanelFilterControl";
import SortController from "./components/SortController";

type Props = {
  params: { categoryName: string; sort: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

async function getData(href: string, searchParams: string) {
  try {
    const response = await getCategory(href, searchParams);
    const data = response.data;
    return data;
  } catch (error) {
    return undefined;
  }
}

export default async function CategoryLayout({
  params: { categoryName },
  searchParams,
}: Props) {
  const searchParamsUrl = Object.entries(searchParams)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  const data = await getData(categoryName, searchParamsUrl);

  return (
    <>
      <Topbar srcImage="" />
      <div className="w-full flex flex-col items-center justify-center divide-y-2 divide-secondary-100">
        <Navbar />
        <NavbarMenu />
      </div>

      {/* category layout */}
      <div className="container-wrapper bg-gray-50 ">
        <div className=" inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8">
          <div className="flex items-center py-4">
            <Breadcrumb
              links={
                data?.address?.map((breadcrumbItem, index) => ({
                  id: index,
                  title: breadcrumbItem?.key,
                  href: "" + breadcrumbItem?.value,
                })) || []
              }
            />
          </div>
        </div>
        <div className="flex">
          <ul
            id="application-sidebar"
            className="transition-all duration-300 hidden z-[60] w-64 h-full min-w-64 bg-red-50/50 backdrop-blur-sm border-e border-neutral-200 rounded-xl pt-7 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 sticky top-0"
          >
            <NavDrawLink
              link="#"
              title="همه محصولات"
              icon={<LuGalleryVerticalEnd />}
              aria-label="Products"
              className="p-px m-2"
            />
            <li className="w-full flex flex-col flex-wrap">
              <ul className="space-y-1">
                <LinkAccordion
                  title="دسته بندی های مربوطه"
                  links={[
                    ...(data?.categories || [])?.map((categoryItem) => ({
                      id: categoryItem?._id,
                      title: categoryItem?.name,
                      href: categoryItem?.href,
                    })),
                  ]}
                />
              </ul>
            </li>
            <RightPanelFilterControl products={data?.products || []} />
          </ul>
          <div className="w-full pt-5 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-2">
              <SortController />
              <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-1 bg-neutral-100 ">
                {!!data &&
                  data.products.map((productItem) => {
                    return (
                      <ProductCard
                        key={productItem._id}
                        product={productItem}
                        // inCart={data.productsInCartData}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
