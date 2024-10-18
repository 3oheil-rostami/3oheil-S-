import React from "react";
import Image from "next/image";
import Link from "next/link";
import Timer from "./Timer";
import { Product } from "@/types/apiTypes";
import { calculateDiscountedPrice, takingProductFromOthers } from "@/utils";
export default function CardSide({
  name,
  enName,
  colors,
  productCover,
  isHasTime,
}: Product & { isHasTime: boolean }) {
  return (
    <Link
      href={`/product/${enName}`}
      className={`${
        isHasTime ? " h-[400px]" : "h-80"
      } w-full flex flex-col justify-between  bg-white py-1 rounded-md overflow-hidden`}
    >
      <div className="">
        <div className="image-wrapper h-[200px]">
          <Image
            src={`${process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_BACKEND_URL}/image/productCover/${productCover}`}
            width={200}
            height={200}
            alt={name}
          />
        </div>
        <div className="details-wrapper px-2 mt-1">
          <h3 className="line-clamp-2 font-medium text-md">{name}</h3>
          <h4 className="sr-only">{enName}</h4>
          <span className="flex flex-col items-end justify-between pt-2 px-2 py-2 text-xs">
            <div className="flex items-center justify-between gap-2 mr-3 w-full">
              <span className="discount-percent px-2 py-px bg-primary-500 text-white text-sm font-bold rounded-md">
                {
                  takingProductFromOthers({ products: colors, basedOn: "off" })
                    .off
                }
                %
              </span>
              <span className="price-org text-neutral-800 line-through text-sm">
                {takingProductFromOthers({
                  products: colors,
                  basedOn: "off",
                }).price.toLocaleString()}{" "}
                ت
              </span>
            </div>
            <span className="price-off font-bold text-base">
              {parseInt(
                calculateDiscountedPrice(
                  takingProductFromOthers({ products: colors, basedOn: "off" })
                    .price,
                  takingProductFromOthers({ products: colors, basedOn: "off" })
                    .off
                ).toFixed(0)
              ).toLocaleString()}{" "}
              ت
            </span>
          </span>
        </div>
      </div>
      <div className="bg-white mx-auto max-w-fit p-2 shadow-inner">
        {isHasTime && <Timer initialSeconds={9 * 60 * 60 * 24} />}
      </div>
    </Link>
  );
}
