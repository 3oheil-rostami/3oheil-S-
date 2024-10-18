"use client";
import { store } from "@/app/store";
import { sortProducts } from "@/constants/sortProducts";
import {
  productsFilterByPrice,
  selectCurrentIsAvailable,
  selectCurrentRangePrice,
} from "@/reducers/product";
import { RangeNumber } from "@/types";
import { Product } from "@/types/apiTypes";
import { uniqueArray } from "@/utils";
import { getMostExpensvieProduct } from "@/utils/priceUtils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

type Props = { products: Product[] };

const RightPanelFilterControlContent = ({ products }: Props) => {
  "use client";
  const currentBrandsInPage = products.map((productItem) => productItem.brand);
  const uniqeCurrentBrands = uniqueArray(currentBrandsInPage || []);
  const maximumPrice = getMostExpensvieProduct(products)?.price;

  const router = useRouter();
  const dispatch = useDispatch();

  const [rangePrice, setRangePrice] = useState<RangeNumber | undefined>(
    undefined
  );

  const currentIsAvailableValue = useSelector(selectCurrentIsAvailable);
  const currentRangePrice = useSelector(selectCurrentRangePrice);
  const searchParams = new URLSearchParams(window.location.search);

  const handleRangePriceInUrl = () => {
    dispatch(productsFilterByPrice(rangePrice));
  };

  useEffect(() => {
    setRangePrice(currentRangePrice);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    handleRangePriceInUrl();
  }, [rangePrice]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="daisy-collapse daisy-collapse-arrow">
        <input type="checkbox" name="filters" />
        <div className="daisy-collapse-title text-base font-medium">
          فیلتر ها
        </div>
        <div className="daisy-collapse-content">
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
                  value={rangePrice?.from}
                  onChange={(e) =>
                    setRangePrice((prev) => ({
                      until: prev?.until ?? 0,
                      from: +e.target.value,
                    }))
                  }
                  className="daisy-input daisy-input-bordered w-full max-w-xs"
                />
              </label>
              <label className="daisy-form-control w-full max-w-xs">
                <div className="label">
                  <span className="daisy-label-text">حداکثر قیمت</span>
                </div>
                <input
                  type="number"
                  inputMode="numeric"
                  max={maximumPrice}
                  value={rangePrice?.until}
                  onChange={(e) =>
                    setRangePrice((prev) => ({
                      from: prev?.from ?? 0,
                      until: +e.target.value,
                    }))
                  }
                  className="daisy-input daisy-input-bordered w-full max-w-xs"
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
                      id={brandItem?.enName}
                      name="brand"
                      className="daisy-checkbox daisy-checkbox-secondary"
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
                      name="sort"
                      className="daisy-radio daisy-radio-secondary"
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
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

const RightPanelFilterControl = ({ products }: Props) => (
  <Provider store={store}>
    <RightPanelFilterControlContent products={products} />
  </Provider>
);

export default RightPanelFilterControl;
