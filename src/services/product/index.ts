import { Product, ProductPage } from "@/types/apiTypes";
import { httpService, responseInterceptor } from "../http-service";

const getProducts = () => httpService.get<Product[]>(`/product/etall`);

const getProduct = (enName: string) =>
  httpService.get<ProductPage>(`/product/get/${enName}`);

const getMoreDiscount = () => httpService.get("product/moreDiscount");

const handleLikeProduct = (productId: string) =>
  responseInterceptor.post("/like/", { productId });

const checkProductLiked = async (productId: string): Promise<boolean> => {
  const response = await responseInterceptor.post("/like/check", { productId });
  const data: boolean = response.data as boolean;
  return data;
};

const getFavoriteProducts = () => responseInterceptor.get("/like/user");

export {
  getProduct,
  getProducts,
  getMoreDiscount,
  handleLikeProduct,
  checkProductLiked,
  getFavoriteProducts,
};
