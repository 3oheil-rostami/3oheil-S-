"use client";
import { store } from "@/app/store";
import React, { useCallback, useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { productsSortBy, selectCurrentSortItem } from "@/reducers/product";
import { SortItems } from "@/types";
import { useRouter } from "next/navigation";

const SortControllerContent = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const currentSortItem = useSelector(selectCurrentSortItem);
	const handleChangeCurrentSortItem = useCallback(
		(sortBy: SortItems) => {
			dispatch(productsSortBy(sortBy));
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[dispatch, currentSortItem]
	);

	useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);
		const currentSort = searchParams.get("sort") as SortItems;
		dispatch(productsSortBy(currentSort));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);
		if (currentSortItem) {
			searchParams.set("sort", currentSortItem);
			router.push(`${window.location.pathname}?${searchParams}`);
		} else {
			searchParams.delete("sort");
			router.push(window.location.pathname);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleChangeCurrentSortItem]);
	
	return (
		<div className="my-5 flex items-center gap-5">
			<span className="text-base font-bold text-neutral-700">مرتب سازی بر اساس :</span>
			<div className="flex items-center gap-2">
				<label htmlFor="" className="flex items-center gap-1">
					<input
						type="radio"
						name="sort"
						onClick={() => handleChangeCurrentSortItem("cheapest")}
						defaultChecked={currentSortItem === "cheapest"}
					/>
					<span>ارزانترین</span>
				</label>
				<label htmlFor="" className="flex items-center gap-1">
					<input
						type="radio"
						name="sort"
						onClick={() => handleChangeCurrentSortItem("expensive")}
						defaultChecked={currentSortItem === "expensive"}
					/>
					<span>گرانترین</span>
				</label>
				<label htmlFor="" className="flex items-center gap-1">
					<input
						type="radio"
						name="sort"
						onClick={() => handleChangeCurrentSortItem("new")}
						defaultChecked={currentSortItem === "new"}
					/>
					<span>تازه ترین</span>
				</label>
				<label htmlFor="" className="flex items-center gap-1">
					<input
						type="radio"
						name="sort"
						onClick={() => handleChangeCurrentSortItem("popular")}
						defaultChecked={currentSortItem === "popular"}
					/>
					<span>محبوب ترین</span>
				</label>
				<label htmlFor="" className="flex items-center gap-1">
					<input
						type="radio"
						name="sort"
						onClick={() => handleChangeCurrentSortItem("off")}
						defaultChecked={currentSortItem === "off"}
					/>
					<span>داغ ترین</span>
				</label>
				<label htmlFor="" className="flex items-center gap-1">
					<input
						type="radio"
						name="sort"
						onClick={() => handleChangeCurrentSortItem("view")}
						defaultChecked={currentSortItem === "view"}
					/>
					<span>پر بازدید ترین</span>
				</label>
				<label htmlFor="" className="flex items-center gap-1">
					<input
						type="radio"
						name="sort"
						onClick={() => handleChangeCurrentSortItem("mostBuy")}
						defaultChecked={currentSortItem === "mostBuy"}
					/>
					<span>پر فروش ترین</span>
				</label>
			</div>
		</div>
	);
};

const SortController = () => (
	<Provider store={store}>
		<SortControllerContent />
	</Provider>
);
export default SortController;
