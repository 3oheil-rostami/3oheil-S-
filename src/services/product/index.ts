import { httpService, responseInterceptor } from "../http-service";

const getProduct = (enName: string) => httpService.get(`/product/get/${enName}`);

const getMoreDiscount = () => httpService.get("product/moreDiscount");

const handleLikeProduct = (productId: string) => responseInterceptor.post("/like/", { productId });

const checkProductLiked = async (productId: string): Promise<boolean> => {
	const response = await responseInterceptor.post("/like/check", { productId });
	const data: boolean = response.data as boolean;
	return data;
};

const getFavoriteProducts = () => responseInterceptor.get("/like/user");

export { getProduct, getMoreDiscount, handleLikeProduct, checkProductLiked, getFavoriteProducts };
