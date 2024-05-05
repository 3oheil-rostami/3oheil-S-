import { httpService } from "../http-service";

const getAllComments = (productId: string) => httpService.get(`/comment/getComments/${productId}`);

export { getAllComments };
