import { SearchParams } from "@/types";

export const generateURLSearchParams = (
  params: SearchParams
): URLSearchParams => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => searchParams.append(key, item));
    } else if (typeof value === 'boolean') {
      searchParams.append(key, value.toString());
    } else if (value !== undefined) {
      searchParams.append(key, value);
    }
  });

  return searchParams;
};
