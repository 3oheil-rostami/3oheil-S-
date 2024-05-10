"use client";
import { store } from "@/app/store";
import React, { useCallback, useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ThemeProvider, Radio } from "@/app/Material-tailwind";
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
		[dispatch, currentSortItem]
	);
	useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);
		const currentSort = searchParams.get("sort") as SortItems;
		dispatch(productsSortBy(currentSort));
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
	}, [handleChangeCurrentSortItem]);
	return (
		<div className="my-5 flex items-center gap-5">
			<span className="text-base font-bold text-neutral-700">مرتب سازی بر اساس :</span>
			<div className="flex items-center gap-2">
				<Radio
					crossOrigin={() => undefined}
					name="sort"
					onClick={() => handleChangeCurrentSortItem("cheapest")}
					defaultChecked={currentSortItem === "cheapest"}
					label={<p>ارزانترین</p>}
				/>
				<Radio
					crossOrigin={() => undefined}
					name="sort"
					onClick={() => handleChangeCurrentSortItem("expensive")}
					defaultChecked={currentSortItem === "expensive"}
					label={<p>گرانترین</p>}
				/>
				<Radio
					crossOrigin={() => undefined}
					name="sort"
					onClick={() => handleChangeCurrentSortItem("new")}
					defaultChecked={currentSortItem === "new"}
					label={<p>تازه ترین</p>}
				/>
				<Radio
					crossOrigin={() => undefined}
					name="sort"
					onClick={() => handleChangeCurrentSortItem("popular")}
					defaultChecked={currentSortItem === "popular"}
					label={<p>محبوب ترین</p>}
				/>
				<Radio
					crossOrigin={() => undefined}
					name="sort"
					onClick={() => handleChangeCurrentSortItem("off")}
					defaultChecked={currentSortItem === "off"}
					label={<p>داغ ترین</p>}
				/>
				<Radio
					crossOrigin={() => undefined}
					name="sort"
					onClick={() => handleChangeCurrentSortItem("view")}
					defaultChecked={currentSortItem === "view"}
					label={<p>پر بازدید ترین</p>}
				/>
				<Radio
					crossOrigin={() => undefined}
					name="sort"
					onClick={() => handleChangeCurrentSortItem("mostBuy")}
					defaultChecked={currentSortItem === "mostBuy"}
					label={<p>پرفروش ترین</p>}
				/>
			</div>
		</div>
	);
};

const SortController = () => (
	<Provider store={store}>
		<ThemeProvider>
			<SortControllerContent />
		</ThemeProvider>
	</Provider>
);
export default SortController;
