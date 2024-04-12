import { httpService } from "../http-service";

const getProduct = (enName: string) => httpService.get(`/product/get/${enName}`);

export { getProduct };
