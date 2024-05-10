import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/reducers/cart";
import userReducer from "@/reducers/user";
import productReducer from "@/reducers/product";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		user: userReducer,
		product: productReducer,
	},
});
