import { httpService } from "../http-service";

const getAllCategories = () => httpService.get("/category");
const getCategory = (href: string) => httpService.get(`/category/${href}`);

export { getAllCategories, getCategory };
