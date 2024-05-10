"use client";
import React, { useEffect, useState } from "react";
import {
	Accordion,
	AccordionBody,
	AccordionHeader,
	List,
	ListItem,
	Checkbox,
	Switch,
	Slider,
	Input,
	ThemeProvider,
} from "@/app/Material-tailwind";
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

	// const handleRangePriceInUrl = () => {
	// 	dispatch(productsFilterByPrice(rangePrice));
	// };

	// useEffect(() => {
	// 	setRangePrice(currentRangePrice);
	// }, []);
	// useEffect(() => {
	// 	handleRangePriceInUrl();
	// }, [rangePrice]);

	return (
		<>
			<ListItem>
				<Switch
					label="فقط کالاهای موجود"
					containerProps={{ className: "ml-5" }}
					onChange={handleIsAvailableProductsInUrl}
				/>
			</ListItem>

			<Accordion open={open === 0} icon={<Icon id={0} open={open} />}>
				<AccordionHeader onClick={() => handleOpen(0)}>محدوده قیمت</AccordionHeader>
				<AccordionBody>
					<div className="flex flex-col gap-2">
						<Input
							label="حداقل قیمت "
							type="number"
							inputMode="numeric"
							value={rangePrice?.[0]}
							onChange={e =>
								setRangePrice(prev => (!!prev ? [Number(e.target.value), prev[1]] : undefined))
							}
						/>
						<Input
							label="حداکثر قیمت"
							type="number"
							inputMode="numeric"
							value={rangePrice?.[1]}
							onChange={e =>
								setRangePrice(prev => (!!prev ? [prev[0], Number(e.target.value)] : undefined))
							}
						/>
					</div>
				</AccordionBody>
			</Accordion>
			<Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
				<AccordionHeader onClick={() => handleOpen(1)}>برند ها</AccordionHeader>
				<AccordionBody>
					<List>
						<ListItem className="p-0">
							<Checkbox label="شون " />
						</ListItem>
						<ListItem className="p-0">
							<Checkbox label="سریتا " />
						</ListItem>
						<ListItem className="p-0">
							<Checkbox label="صخر" value={"data"} />
						</ListItem>
					</List>
				</AccordionBody>
			</Accordion>
		</>
	);
};

function Icon({ id, open }: { id: number; open: number }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={2}
			stroke="currentColor"
			className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
		</svg>
	);
}

const RightPanelFilterControl = () => (
	<Provider store={store}>
		<ThemeProvider>
			<RightPanelFilterControlContent />
		</ThemeProvider>
	</Provider>
);

export default RightPanelFilterControl;
