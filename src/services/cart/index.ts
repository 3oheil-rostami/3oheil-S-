import { responseInterceptor } from "../http-service";

const getAllProductsInCart = () => responseInterceptor.get("/cart/getAll");

const addToCart = (productId: string | number, colorId: string | number) =>
	responseInterceptor.put(`/cart/new/${productId}`, { colorId });

const removeToCart = (productId: string | number, colorId: string | number) =>
	responseInterceptor.delete(`/cart/delete/${productId}`, { data: { colorId } });

const clearCart = () => responseInterceptor.delete("/cart/deleteAll");

export { getAllProductsInCart, addToCart, removeToCart, clearCart };
