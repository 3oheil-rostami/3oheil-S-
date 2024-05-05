import { httpService, responseInterceptor } from "../http-service";

const getProduct = (enName: string) => httpService.get(`/product/get/${enName}`);

const getMoreDiscount = () => httpService.get("product/moreDiscount");

const handleLinkProduct = (productId: string) => responseInterceptor.post("/like/", { productId });

const checkProductLiked = async (productId: string): Promise<boolean> => {
	const response = await responseInterceptor.post("/like/check", { productId });
	const data: boolean = response.data as boolean;
	return data;
};

export { getProduct, getMoreDiscount, handleLinkProduct, checkProductLiked };
