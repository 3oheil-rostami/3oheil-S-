"use client";
import React, { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "@/app/store";
import {
	productsFilterByIsAvailable,
	productsFilterByPrice,
	selectCurrentIsAvailable,
	selectCurrentRangePrice,
} from "@/reducers/product";
import { useRouter } from "next/navigation";

const RightPanelFilterControlContent = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [open, setOpen] = React.useState<number>(0);
	const [rangePrice, setRangePrice] = useState<[number, number] | undefined>([0, 0]);
	const currentIsAvailableValue = useSelector(selectCurrentIsAvailable);
	const currentRangePrice = useSelector(selectCurrentRangePrice);
	const searchParams = new URLSearchParams(window.location.search);

	const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

	const handleIsAvailableProductsInUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(productsFilterByIsAvailable(e.target.checked));
		if (currentIsAvailableValue !== undefined) {
			searchParams.set("isAvailable", JSON.stringify(currentIsAvailableValue));
			router.push(`${window.location.pathname}?${searchParams}`);
		} else {
			searchParams.delete("isAvailable");
			router.push(`${window.location.pathname}?${searchParams}`);
		}
	};

	const handleRangePriceInUrl = () => {
		dispatch(productsFilterByPrice(rangePrice));
	};

	useEffect(() => {
		setRangePrice(currentRangePrice);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		handleRangePriceInUrl();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rangePrice]);

	return (
		<>
			<label className="flex items-center gap-1">
				<input type="checkbox" onChange={handleIsAvailableProductsInUrl} />
				<span>فقط کالاهای موجود</span>
			</label>

			<div>
				<div>محدوده قیمت</div>
				<div>
					<div className="flex flex-col gap-2">
						<label htmlFor="">
							<input
								type="number"
								inputMode="numeric"
								value={rangePrice?.[0]}
								onChange={e =>
									setRangePrice(prev => (!!prev ? [Number(e.target.value), prev[1]] : undefined))
								}
							/>
							<span>حداقل قیمت</span>
						</label>
						<label htmlFor="" className="flex flex-col gap-2">
							<input
								type="number"
								inputMode="numeric"
								value={rangePrice?.[1]}
								onChange={e =>
									setRangePrice(prev => (!!prev ? [prev[0], Number(e.target.value)] : undefined))
								}
							/>
							<span>حداکثر قیمت</span>
						</label>
					</div>
				</div>
			</div>
			<div>
				<div>برند ها</div>
				<div>
					<div>
						<div className="p-0 flex items-center gap-1">
							<input type="checkbox" />
							<span>شون</span>
						</div>
						<div className="p-0 flex items-center gap-1">
							<input type="checkbox" />
							<span>سریتا</span>
						</div>
						<div className="p-0 flex items-center gap-1">
							<input type="checkbox" />
							<span>فلانی</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const RightPanelFilterControl = () => (
	<Provider store={store}>
		<RightPanelFilterControlContent />
	</Provider>
);

export default RightPanelFilterControl;
