"use client";

import { store } from "@/app/store";
import { selectCartItems } from "@/reducers/cart";
import { ProductsInCart } from "@/types/apiTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Provider, useSelector } from "react-redux";

const PricingCardContent = () => {
	const pathname = usePathname();
	const allProductsInCart = useSelector(selectCartItems);
	const data: ProductsInCart | undefined | null = allProductsInCart.data;

	return (
		<div className="border-r-2 w-72 pr-4 min-w-72">
			<ul className="list-none flex flex-col gap-5 bg-neutral-50 p-5 rounded-xl">
				<li className="flex justify-between items-center">
					<span className="text-sm font-medium text-neutral-800">قیمت کالاها:</span>
					<span className="text-base font-semibold text-neutral-800">
						{parseInt((data?.sumPrice || 0)?.toFixed(0))?.toLocaleString()} تومان
					</span>
				</li>
				<li className="flex justify-between items-center">
					<span className="text-sm font-semibold text-neutral-800">جمع سبد خرید :</span>
					<span className="text-base font-bold text-neutral-800">
						{parseInt((data?.finalPrice || 0)?.toFixed(0))?.toLocaleString()} تومان
					</span>
				</li>
				<li className="flex justify-between items-center">
					<span className="text-sm font-semibold text-primary-800">سود شما از خرید :</span>
					<span className="text-base font-bold text-primary-800">
						{" "}
						{parseInt(
							((data?.sumPrice || 0) - (data?.finalPrice || 0))?.toFixed(0)
						)?.toLocaleString()}{" "}
						تومان
					</span>
				</li>
				{!pathname.endsWith("/cart/order") && (
					<Link
						href={!data?.items?.length ? "" : "/user/cart/order"}
						aria-disabled={!data?.items?.length}>
						تائید و تکمیل سفارش
					</Link>
				)}
			</ul>
			{!!data?.items?.length && (
				<p className=" text-xs text-neutral-700 text-justify mt-3 px-2">
					هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام موجودی، کالاها از سبد حذف می‌شوند.
				</p>
			)}
		</div>
	);
};

const PricingCard = () => (
	<Provider store={store}>
		<PricingCardContent />
	</Provider>
);
export default PricingCard;
