import { httpService, responseInterceptor } from "../http-service";

const getProduct = (enName: string) => httpService.get(`/product/get/${enName}`);

const addToCart = (productId: string | number, colorId: string | number) =>
	responseInterceptor.post(`/cart/new/${productId}`, { colorId });

const removeToCart = (productId: string | number, colorId: string | number) =>
	responseInterceptor.delete(`/cart/delete/${productId}`, { data: { colorId } });

const getAllProductsInCart = () => responseInterceptor.get("/product/getAll");

export { getProduct, addToCart, removeToCart, getAllProductsInCart };
