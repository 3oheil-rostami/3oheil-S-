"use client";

import { sortProducts } from "@/constants/sortProducts";
import { OptionalCategoryFilters, SearchParams, SortItems } from "@/types";
import { Brand, Product } from "@/types/apiTypes";
import { objectToSearchParams } from "@/utils/url";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type Props = {
  searchParams: SearchParams;
  uniqeBrands: Brand[];
  defaultValues: OptionalCategoryFilters
};

const RightPanelFilterControl = ({ defaultValues, uniqeBrands }: Props) => {
  console.log('defaultValues:', defaultValues)
  const router = useRouter()

  const { handleSubmit, register } = useForm<OptionalCategoryFilters>({ defaultValues });

  const onSubmit = (data: OptionalCategoryFilters) => {
    const createdSearchParams = objectToSearchParams(data)
    router.push(`${window.location.pathname}${createdSearchParams}`, { scroll: true })
  };

  return (
    <>
      <div className="daisy-collapse daisy-collapse-arrow">
        <input type="checkbox" name="filters" />
        <div className="daisy-collapse-title text-base font-medium">
          فیلتر ها
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="daisy-collapse-content">
          <span className="daisy-divider">محدوده قیمت</span>
          <div className="px-2">
            <div className="flex flex-col gap-2">
              <label className="daisy-form-control w-full max-w-xs">
                <div className="label">
                  <span className="daisy-label-text">حداقل قیمت</span>
                </div>
                <input
                  type="number"
                  inputMode="numeric"
                  className="daisy-input daisy-input-bordered w-full max-w-xs"
                  {...register("price.0", { valueAsNumber: true })}
                />
              </label>

              <label className="daisy-form-control w-full max-w-xs">
                <div className="label">
                  <span className="daisy-label-text">حداکثر قیمت</span>
                </div>
                <input
                  type="number"
                  inputMode="numeric"
                  className="daisy-input daisy-input-bordered w-full max-w-xs"
                  {...register("price.1", { valueAsNumber: true })}
                />
              </label>
            </div>
          </div>

          <span className="daisy-divider">برند ها</span>
          <div>
            <div className="flex flex-col gap-1">
              {uniqeBrands.map((brandItem) => (
                <div key={brandItem?._id}>
                  <label
                    className="p-0 flex items-center gap-1 w-fit cursor-pointer"
                    htmlFor={brandItem?.enName}
                  >
                    <input
                      type="checkbox"
                      value={brandItem?.enName}
                      className="daisy-checkbox daisy-checkbox-secondary"
                      {...register("brands")}
                    />
                    <span>{brandItem?.name}</span>
                  </label>
                </div>
              ))}

            </div>
          </div>

          <span className="daisy-divider">ترتیب بندی</span>
          <div>
            <div className="flex flex-col gap-1">
              {sortProducts.map((sortItem) => (
                <div key={sortItem?.id}>
                  <label
                    htmlFor={sortItem.enTitle}
                    className="p-0 flex items-center gap-1 w-fit cursor-pointer"
                  >
                    <input
                      type="radio"
                      value={sortItem?.enTitle}
                      id={sortItem?.enTitle}
                      className="daisy-radio daisy-radio-secondary"
                      {...register("sort")}
                    />
                    <span>{sortItem?.title}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <span className="daisy-divider">بیشتر</span>
          <div className="daisy-form-control">
            <label className="daisy-label cursor-pointer">
              <span className="daisy-input-bordered">فقط کالاهای موجود</span>
              <input
                type="checkbox"
                className="daisy-toggle daisy-toggle-secondary"
                {...register("isAvailable")}
              />
            </label>
          </div>
          <button className=" daisy-btn w-full daisy-btn-secondary daisy-btn-outline mt-7">اعمال تغییرات</button>
        </form>
      </div >
    </>
  );
};


export default RightPanelFilterControl
