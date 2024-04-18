"use client";
import { addToCart, removeToCart } from "@/services/product";
import { AddToCartButtonProps } from "@/types";
import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete, MdDeleteOutline, MdOutlineAdd } from "react-icons/md";
import { toast } from "react-toastify";
import Button from "./form/Button";
import Link from "next/link";
import { TiDelete } from "react-icons/ti";

export default function AddToCartButton({
	count = 0,
	incrementAction,
	decrementAction,
	productId,
	colorId,
}: AddToCartButtonProps<HTMLButtonElement>) {
	const [countNum, setCountNum] = useState<number>(0);
	useEffect(() => {
		setCountNum(count);
	}, [count]);

	const incrementHandler = async () => {
		incrementAction && incrementAction();
		setCountNum(prevValue => prevValue + 1);
		const toastId = toast.loading("در حال اضافه کردن به سبد خرید ...");
		const response = await addToCart(productId, colorId);
		toast.update(toastId, {
			isLoading: false,
			autoClose: 3000,
			type: response.status === 201 ? "success" : "error",
			render() {
				response.status !== 201 && setCountNum(prevValue => prevValue - 1);
				return response.status === 401 ? (
					<div className="flex justify-between items-center gap-2">
						<p>ابتدا لاگین کنید .</p>
						<Button colorScheme="secondary" variant="outline" size="2xs">
							<Link href={"/login"}>لاگین</Link>
						</Button>
					</div>
				) : response.status === 422 ? (
					<p>تعداد موجود کافی نیست .</p>
				) : response.status === 201 ? (
					<p>با موفقیت اضافه شد .</p>
				) : response.status === 500 ? (
					<p>سرور با مشکل مواجه شد</p>
				) : (
					<p>خطای ناشناس</p>
				);
			},
		});
	};
	const decrementHandler = async () => {
		if (navigator.onLine) {
			decrementAction && decrementAction();
			const toastId = toast.loading("در حال حذف محصول از سبد خرید ...");
			const response = await removeToCart(productId, colorId);
			toast.update(toastId, {
				isLoading: false,
				autoClose: 3000,
				type: response.status === 200 ? "success" : "error",
				icon:
					response.status === 200 ? <MdDelete className="text-xl text-green-600" /> : <TiDelete />,
				render() {
					response.status === 200 && setCountNum(prevValue => prevValue - 1);
					return response.status === 200
						? "از سبد حذف شد ."
						: response.status === 404
						? "همچین محصولی داخل سبد خریدتون موجود نیست ."
						: response.status === 500
						? "خطا سمت سرور رخ داد ."
						: "خطای ناشناس";
				},
			});
		} else {
			toast.warning("شما آنلاین نیستید .");
		}
	};

	return (
		<div
			className={`w-fit h-9 min-w-9 bg-white border border-primary-600 rounded-full flex justify-center gap-2 items-center text-primary-700 p-px transition-all ${
				countNum === 0
					? "*:hidden *:hover:hidden first:*:inline first:*:hover:inline"
					: "*:hidden *:hover:inline first:*:inline first:*:hover:hidden"
			}`}>
			<button className="addToCard" onClick={incrementHandler}>
				{countNum === 0 ? <MdOutlineAdd /> : countNum}
			</button>
			{countNum > 0 && (
				<>
					<button
						className="increment p-1 text-base rounded-full bg-neutral-50 border-2 border-transparent hover:border-neutral-200 transition-all"
						type="button"
						onClick={incrementHandler}>
						<MdOutlineAdd />
					</button>
					<span className="count font-bold text-lg">{countNum}</span>
					<button
						className="decrement p-1 text-base rounded-full bg-neutral-50 border-2 border-transparent hover:border-neutral-200 transition-all"
						onClick={decrementHandler}>
						<MdDeleteOutline />
					</button>
				</>
			)}
		</div>
	);
}
