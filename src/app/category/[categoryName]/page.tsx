import RightPanelFilterControl from "@/app/categories/[categoryName]/components/RightPanelFilterControl";
import SortController from "@/app/categories/[categoryName]/components/SortController";
import Breadcrumb from "@/components/Breadcrumb";
import LinkAccordion from "@/components/LinkAccordion";
import ProductCard from "@/components/ProductCard";
import NavDrawLink from "@/components/dashboard/NavDrawLink";
import { getCategory } from "@/services/category";
import { SearchParams } from "@/types";
import { uniqueArray } from "@/utils";
import { parseSearchParams } from "@/utils/url";
import { headers } from "next/headers";
import { LuGalleryVerticalEnd } from "react-icons/lu";

interface Props {
  params: { categoryName: string };
  searchParams: SearchParams;
}

export default async function CategoryPage({
  params: { categoryName },
  searchParams,
}: Props) {
  const headerList = headers();
  const fullUrl = headerList.get('referer');
  const searchParamsString = fullUrl ? new URL(fullUrl).search : '';

  const data = await getCategory(categoryName, searchParamsString)

  if (data === null) return <p>خطایی رخ داد  .</p>

  const uniqeBrands = uniqueArray(data?.products.map(product => product.brand))
  const defaultValueRightPanel = parseSearchParams(searchParamsString)

  return (
    <div className="container-wrapper bg-gray-50 ">
      <div className=" inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8">
        <div className="flex items-center py-4">
          <Breadcrumb
            links={
              data.address?.map((breadcrumbItem, index) => ({
                id: index,
                title: breadcrumbItem?.key,
                href: "" + breadcrumbItem?.value,
              })) || []
            }
          />
        </div >
      </div >
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
          <li className="w-full flex flex-col flex-wrap p-2">
            <ul className="space-y-1">
              <LinkAccordion
                title="دسته بندی های مربوطه"
                links={[]}
              />
            </ul>
          </li>
          <RightPanelFilterControl searchParams={searchParams} uniqeBrands={uniqeBrands} defaultValues={defaultValueRightPanel} />
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
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
