import { Category, KeyValue, Product } from "@/types/apiTypes";
import { httpService } from "../http-service";

const getAllCategories = () => httpService.get<Category[]>("/category");

const getCategory = (href: string, searchParams: string) =>
  httpService.get<{
    products: Product[];
    categories: Category[];
    address: KeyValue[];
  }>(`/category/${href}?${searchParams}`);

export { getAllCategories, getCategory };
