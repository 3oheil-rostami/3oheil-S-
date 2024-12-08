import { getCategory } from "@/services/category";
import { SearchParams } from "@/types";
import { Category, KeyValue, Product } from "@/types/apiTypes";
import { generateURLSearchParams } from "@/utils/url";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

type useCategoryProps = {
  categoryName: string;
  searchParams: SearchParams;
};

const useFetchCategory = ({ categoryName }: useCategoryProps) => {
  const searchParams = useSearchParams()

  return useQuery<AxiosResponse<
    {
      products: Product[];
      categories: Category[];
      address: KeyValue[];
    },
    any
  > | null>({
    retry: false,
    queryKey: ["category", categoryName, searchParams.toString()],
    queryFn: () => {
      try {
        return getCategory(categoryName, searchParams.toString());
      } catch (error) {
        console.error(error);
        return null;
      }
    },
  });
};

export default useFetchCategory;
