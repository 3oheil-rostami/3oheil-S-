import { ProductReducerStatesProps, SortItems } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProductReducerStatesProps = {
	error: null,
	brands: [],
	sortBy: undefined,
	isAvailable: false,
	price: undefined,
};

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		productsSortBy(
			state,
			actions: {
				payload: SortItems;
				type: string;
			}
		) {
			state.sortBy = actions.payload;
		},
		productsFilterByPrice(
			state,
			action: {
				payload: [number, number] | undefined;
				type: string;
			}
		) {
			state.price = action.payload;
		},
		productsFilterByIsAvailable(state, action: { payload: boolean | undefined; type: any }) {
			state.isAvailable = action.payload;
		},
		setInitialStates(state) {
			state = initialState;
		},
	},
	extraReducers(builder) {},
});

export const selectCurrentSortItem = (state: any) =>
	(state.product as ProductReducerStatesProps).sortBy;
export const selectCurrentIsAvailable = (state: any) =>
	(state.product as ProductReducerStatesProps).isAvailable;
export const selectCurrentRangePrice = (state: any) =>
	(state.product as ProductReducerStatesProps).price;
export const {
	productsFilterByIsAvailable,
	productsFilterByPrice,
	productsSortBy,
	setInitialStates,
} = productSlice.actions;

export default productSlice.reducer;
