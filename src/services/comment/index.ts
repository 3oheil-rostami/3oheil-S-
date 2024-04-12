import { httpService } from "../http-service";

const getAllComments = (productId: string) => httpService.get(`/getComments/${productId}`);

export { getAllComments };
