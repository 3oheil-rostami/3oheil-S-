import { Category, KeyValue, Product } from "@/types/apiTypes";
import { httpService } from "../http-service";

const getAllCategories = () => httpService.get<Category[]>("/category");

const getCategory = async (categoryName: string, searchParams: string) => {
  let data: {
    products: Product[];
    categories: Category[];
    address: KeyValue[];
  } | undefined | null = undefined;

  try {
    data = (await httpService.get<{
      products: Product[];
      categories: Category[];
      address: KeyValue[];
    }>(`/category/${categoryName}${searchParams}`)).data

  } catch (error) {
    data = null;
    console.error(error)
  }

  return data
};

export { getAllCategories, getCategory };
