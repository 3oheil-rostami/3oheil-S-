import { httpService } from "../http-service";

const getAllBrands = () => httpService.get("brand");

export { getAllBrands };
