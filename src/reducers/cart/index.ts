import { getAllProductsInCart } from "@/services/cart";
import { cartReducerStatesProps } from "@/types";
import { Color, Product, ProductItemInCart } from "@/types/apiTypes";
import { calculateDiscountedPrice } from "@/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProductsInCart = createAsyncThunk("products/fetchProductsInCart", async () => {
	console.log("fetchProductsInCart is called !!");
	try {
		const response = await getAllProductsInCart();
		return response.data;
	} catch (error) {
		console.error(error);
	}
});

const initialState: cartReducerStatesProps = {
	data: null,
	error: null,
	status: "idle",
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProductToCart: {
			reducer(state, { payload: { product, colorId } }) {
				const itAlreadyAvailable = state.data?.items?.find(
					productItem => productItem.colorId._id === (colorId as string)
				);
				const currentColorProduct =
					(product as Product).colors?.find(
						(colorItem: Color) => colorItem._id === (colorId as string)
					) || ({} as Color);
				const currentQuantityProduct = state.data?.items?.find(
					(productItem: { productId: Product; colorId: Color; quantity: number; _id?: string }) =>
						productItem.productId._id === (product as Product)._id
				)?.quantity;

				if (!!itAlreadyAvailable) {
					itAlreadyAvailable.quantity += 1;
					if (state.data?.finalPrice) {
						const currentProductPrice: number = itAlreadyAvailable.colorId.price;
						const currentProductOff: number = itAlreadyAvailable.colorId.off;
						state.data.finalPrice += currentProductPrice;
						state.data.sumPrice += calculateDiscountedPrice(currentProductPrice, currentProductOff);
					}
				} else {
					state.data?.items?.push({
						colorId: currentColorProduct,
						productId: product as Product,
						quantity: currentQuantityProduct || 1,
					});
				}
			},
			prepare(payload) {
				return { payload };
			},
		},
		removeProductFromCart: {
			reducer(state, { payload: { colorId } }) {
				const currentProduct: ProductItemInCart | undefined = state.data?.items?.find(
					productItem => productItem.colorId._id === (colorId as string)
				);
				if (currentProduct && currentProduct.quantity > 0) {
					currentProduct.quantity -= 1;
				}
			},
			prepare(payload) {
				return { payload };
			},
		},
		clearCartContent: {
			reducer(state) {
				if (state.data?.items) {
					state.data.items = [];
					state.data.finalPrice = 0;
					state.data.sumPrice = 0;
				}
			},
			prepare(payload) {
				return { payload };
			},
		},
	},
	extraReducers(builder) {
		builder.addCase(fetchProductsInCart.pending, state => {
			state.status = "pending";
		});
		builder.addCase(fetchProductsInCart.fulfilled, (state, action) => {
			state.status = "successfully";
			state.data = action.payload;
		});
		builder.addCase(fetchProductsInCart.rejected, (state, action) => {
			state.status = "failed";
			state.error = action.error.message;
			console.log(state, action);
		});
	},
});

export const selectCartItems = (state: cartReducerStatesProps) => state;
export const selectCountProductBasedOnCartContent = (
	state: cartReducerStatesProps,
	colorId: string
) => state.data?.items?.find(productItem => productItem.colorId._id === colorId)?.quantity || 0;

export const { addProductToCart, removeProductFromCart, clearCartContent } = cartSlice.actions;
export default cartSlice.reducer;
