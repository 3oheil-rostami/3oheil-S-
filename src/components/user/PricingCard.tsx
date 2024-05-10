"use client";
import { store } from "@/app/store";
import React from "react";
import { Provider } from "react-redux";
import Button from "../form/Button";
import { useSelector } from "react-redux";
import { selectCartItems } from "@/reducers/cart";
import { ProductsInCart } from "@/types/apiTypes";
import { usePathname, useRouter } from "next/navigation";

const PricingCardContent = () => {
	const pathname = usePathname();
	const router = useRouter();
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
					<Button
						colorScheme="primary"
						variant="fill"
						size="xs"
						className="mt-3"
						onClick={() => router.push("/user/cart/order")}
						isDisabled={!data?.items?.length}>
						تائید و تکمیل سفارش
					</Button>
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
