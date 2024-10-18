import { getCategory } from "@/services/category";
import { SearchParams } from "@/types";
import { Category, KeyValue, Product } from "@/types/apiTypes";
import { generateURLSearchParams } from "@/utils/url";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useMemo } from "react";

type useCategoryProps = {
  categoryName: string;
  searchParams: SearchParams;
};

const useFetchCategory = ({ categoryName, searchParams }: useCategoryProps) => {
  const stringSearchParams = useMemo(
    () => generateURLSearchParams(searchParams),
    [searchParams]
  );

  return useQuery<AxiosResponse<
    {
      products: Product[];
      categories: Category[];
      address: KeyValue[];
    },
    any
  > | null>({
    retry: false,
    queryKey: ["category", categoryName, searchParams],
    queryFn: () => {
      try {
        return getCategory(categoryName, stringSearchParams.toString());
      } catch (error) {
        console.error(error);
        return null;
      }
    },
  });
};

export default useFetchCategory;
