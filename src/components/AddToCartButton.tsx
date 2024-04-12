"use client";
import { AddToCartButtonProps } from "@/types";
import React, { useEffect, useState } from "react";
import { MdDeleteOutline, MdOutlineAdd } from "react-icons/md";

export default function AddToCartButton({
	count = 0,
	incrementAction,
	decrementAction,
}: AddToCartButtonProps<HTMLButtonElement>) {
	const [countNum, setCountNum] = useState<number>(0);
	useEffect(() => {
		setCountNum(count);
	}, [count]);

	const incrementHandler = () => {
		incrementAction && incrementAction();
		setCountNum(prevValue => prevValue + 1);
	};
	const decrementHandler = () => {
		decrementAction && decrementAction();
		setCountNum(prevValue => prevValue - 1);
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
