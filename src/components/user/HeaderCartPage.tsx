"use client";
import { store } from "@/app/store";
import { ProductsInCart } from "@/types/apiTypes";
import React, { useCallback, useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import Button from "../form/Button";
import { MdDelete } from "react-icons/md";
import { clearCartContent, selectCartItems } from "@/reducers/cart";

const HeaderCartPageContent = ({ data }: Props) => {
	const dispatch = useDispatch();
	const cartData = useSelector(selectCartItems);
	const [allQuantityProduct, setAllQuantityProduct] = useState<number>(0);

	const sumProductsCount = useCallback((): number => {
		let sumProducts: number = 0;
		cartData.data?.items?.forEach(productItem => (sumProducts += productItem.quantity));
		return sumProducts;
	}, [cartData.data?.items]);

	useEffect(() => {
		setAllQuantityProduct(sumProductsCount());
	}, [sumProductsCount]);

	const clearCartHandler = () => {
		dispatch(clearCartContent(data));
	};

	return (
		<div className="flex justify-between items-center border-b-2 pb-2">
			<h3 className="text-lg text-neutral-700 font-bold">
				سبد خرید شما : ( {allQuantityProduct} کالا)
			</h3>
			{!!data.items?.length && (
				<Button colorScheme="secondary" size="2xs" variant="text" onClick={clearCartHandler}>
					خالی کردن سبد
					<MdDelete className="text-xl" />
				</Button>
			)}
		</div>
	);
};

interface Props {
	data: ProductsInCart;
}

const HeaderCartPage = ({ ...props }: Props) => (
	<Provider store={store}>
		<HeaderCartPageContent {...props} />
	</Provider>
);

export default HeaderCartPage;
