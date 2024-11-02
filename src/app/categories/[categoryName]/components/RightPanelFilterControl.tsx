"use client";

import { sortProducts } from "@/constants/sortProducts";
import defualtValuesFilterProducts from "@/services/defualtValues/FilterProducts";
import useProductsFilter from "@/stores/useProductsFilter";
import { SearchParams } from "@/types";
import { Product } from "@/types/apiTypes";
import { uniqueArray } from "@/utils";
import { getMostExpensvieProduct } from "@/utils/priceUtils";
import { generateURLSearchParams } from "@/utils/url";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

type Props = { products: Product[] };
const RightPanelFilterControl = ({ products }: Props) => {
  const searchParams = useSearchParams();

  const { searchParams: setedSearchParams, setSearchParams } = useProductsFilter()
  console.log('setedSearchParams: changed ##', setedSearchParams)

  const defaultValues = defualtValuesFilterProducts(setedSearchParams)

  const { register } = useForm({ defaultValues })

  const currentBrandsInPage = products.map((productItem) => productItem.brand);
  const uniqeCurrentBrands = uniqueArray(currentBrandsInPage || []);

  const maximumPrice = getMostExpensvieProduct(products)?.price;
  const selectedBrandsRef = useRef<string[]>(defaultValues.brands || [])

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      selectedBrandsRef.current.push(value);
    } else {
      selectedBrandsRef.current = selectedBrandsRef.current.filter(
        (item) => item !== value
      );
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const { from_price, till_price, isAvailable, ...dataForm } = Object.fromEntries(formData)
    const prices = [from_price, till_price] as string[]
    const payload: SearchParams = { ...dataForm, brands: selectedBrandsRef.current, prices, isAvailable: isAvailable === 'on' }
    const generatedSearchParams = generateURLSearchParams(payload)
    setSearchParams(generatedSearchParams.toString())
  }

  useEffect(() => {
    setSearchParams(searchParams.toString())
  }, [])

  return (
    <>
      <div className="daisy-collapse daisy-collapse-arrow">
        <input type="checkbox" name="filters" />
        <div className="daisy-collapse-title text-base font-medium">
          فیلتر ها
        </div>
        <form onSubmit={handleSubmit} className="daisy-collapse-content">
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
                  {...register('from_price', { min: 0 })}
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
                  {...register('till_price', { min: 0, max: maximumPrice })}
                />
              </label>
            </div>
          </div>

          <span className="daisy-divider">برند ها</span>
          <div>
            <div className="flex flex-col gap-1">
              {uniqeCurrentBrands.map((brandItem) => (
                <div key={brandItem?._id}>
                  <label
                    className="p-0 flex items-center gap-1 w-fit cursor-pointer"
                    htmlFor={brandItem?.enName}
                  >
                    <input
                      type="checkbox"
                      value={brandItem?.enName}
                      className="daisy-checkbox daisy-checkbox-secondary"
                      onChange={handleCheckboxChange}
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
                      {...register('sort')}
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
                name="isAvailable"
                className="daisy-toggle daisy-toggle-secondary"
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


// const [rangePrice, setRangePrice] = useState<RangeNumber | undefined>(
//   undefined
// );

// const searchParams = new URLSearchParams(window.location.search);

// const handleRangePriceInUrl = () => {
// };


// useEffect(() => {
//   handleRangePriceInUrl();
// }, [rangePrice]); // eslint-disable-line react-hooks/exhaustive-deps

