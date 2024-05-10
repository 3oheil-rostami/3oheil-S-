"use client";
import { addToCart, removeToCart } from "@/services/cart";
import { AddToCartButtonProps, CartReducerStatesProps } from "@/types";
import React, { useEffect, useState } from "react";
import { MdDelete, MdDeleteOutline, MdOutlineAdd } from "react-icons/md";
import { toast } from "react-toastify";
import Button from "./form/Button";
import Link from "next/link";
import { TiDelete } from "react-icons/ti";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "@/app/store";
import {
	addProductToCart,
	removeProductFromCart,
	selectCountProductBasedOnCartContent,
} from "@/reducers/cart";

function AddToCartButton({
	incrementAction,
	decrementAction,
	colorId,
	accessToActions,
	product,
	size,
}: AddToCartButtonProps<HTMLButtonElement>) {
	const dispatch = useDispatch();
	const [canUseActions, setCanUseActions] = useState<boolean>(true);
	const availableQuantityOfThisProduct: number = useSelector((state: CartReducerStatesProps) =>
		selectCountProductBasedOnCartContent(state, colorId)
	);
	const [countNum, setCountNum] = useState<number>(availableQuantityOfThisProduct);
	useEffect(() => {
		setCountNum(availableQuantityOfThisProduct);
	}, [availableQuantityOfThisProduct]);

	const incrementHandler = async () => {
		if (!accessToActions) {
			toast.warning("ابتدا باید لاگین کنید!");
			return;
		}
		incrementAction && incrementAction();
		setCanUseActions(false);
		setCountNum(prevValue => prevValue + 1);
		const toastId = toast.loading("در حال اضافه کردن به سبد خرید ...");
		const response = await addToCart(product?._id || "", colorId);
		toast.update(toastId, {
			isLoading: false,
			autoClose: 3000,
			type: response.status === 201 ? "success" : "error",
			render() {
				if (response.status === 201) {
					dispatch(addProductToCart({ product, colorId }));
				} else {
					setCountNum(prevValue => prevValue - 1);
				}
				setTimeout(() => setCanUseActions(true), 2000);
				return response.status === 401 ? (
					<div className="flex justify-between items-center gap-2">
						<p>ابتدا لاگین کنید .</p>
						<Button colorScheme="secondary" variant="outline" size="2xs">
							<Link href={"/auth/login"}>لاگین</Link>
						</Button>
					</div>
				) : response.status === 400 ? (
					"شما بن شده اید ،با پشتیبانی تماس بگیرید ."
				) : response.status === 422 ? (
					"تعداد موجود کافی نیست ."
				) : response.status === 201 ? (
					"با موفقیت اضافه شد ."
				) : response.status === 500 ? (
					"سرور با مشکل مواجه شد"
				) : (
					"خطای ناشناس"
				);
			},
		});
	};
	const decrementHandler = async () => {
		if (!accessToActions) {
			toast.warning("ابتدا باید لاگین کنید!");
			return;
		}
		if (navigator.onLine) {
			decrementAction && decrementAction();
			setCanUseActions(false);
			const toastId = toast.loading("در حال حذف محصول از سبد خرید ...");
			const response = await removeToCart(product?._id || "", colorId);
			toast.update(toastId, {
				isLoading: false,
				autoClose: 3000,
				type: response.status === 200 ? "success" : "error",
				icon:
					response.status === 200 ? <MdDelete className="text-xl text-green-600" /> : <TiDelete />,
				render() {
					if (response.status === 200) {
						dispatch(removeProductFromCart({ colorId }));
						setCountNum(prevValue => prevValue - 1);
					}
					setTimeout(() => setCanUseActions(true), 2000);
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
			className={`flex justify-center items-center transition-all ${
				size === "sm"
					? countNum === 0
						? " *:hidden *:hover:hidden first:*:inline first:*:hover:inline "
						: " *:hidden *:hover:inline first:*:inline first:*:hover:hidden "
					: countNum === 0
					? " *:hidden *:hover:hidden first:*:inline first:*:hover:inline "
					: " *:inline first:*:hidden "
			} 
			${
				size === "sm"
					? " w-fit h-9 min-w-9 bg-white border border-primary-600 rounded-full text-primary-700 p-px  gap-2"
					: countNum === 0
					? " w-full h-11 bg-primary-600 text-white rounded-md  gap-4"
					: " w-full h-11 bg-white text-primary-700 rounded-md border-2 border-[rgb(246,0,33)!important] gap-4"
			}`}
			style={{ borderWidth: size === "lg" && countNum > 0 ? "2px" : "" }}>
			<button
				className="addToCard block w-full"
				onClick={incrementHandler}
				disabled={!canUseActions}>
				{countNum === 0 ? (size === "lg" ? "افزودن به سبد" : "+") : countNum}
			</button>
			{countNum > 0 && (
				<>
					<button
						className={`p-1 bg-neutral-50 border-2 border-transparent hover:border-neutral-200 transition-all ${
							size === "sm" ? "text-base rounded-full" : "text-2xl rounded-sm w-16"
						}`}
						type="button"
						disabled={!canUseActions}
						onClick={incrementHandler}>
						<MdOutlineAdd className="mx-auto" />
					</button>
					<span className="count font-bold text-lg">{countNum}</span>
					<button
						className={`p-1 bg-neutral-50 border-2 border-transparent hover:border-neutral-200 transition-all ${
							size === "sm" ? "text-base rounded-full" : "text-2xl rounded-sm w-16"
						}`}
						disabled={!canUseActions}
						onClick={decrementHandler}>
						<MdDeleteOutline className="mx-auto" />
					</button>
				</>
			)}
		</div>
	);
}

export default function MainAddToCart({ ...props }: AddToCartButtonProps<HTMLButtonElement>) {
	return (
		<Provider store={store}>
			<AddToCartButton {...props} />
		</Provider>
	);
}
