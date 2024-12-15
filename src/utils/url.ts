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


export const parseSearchParams = <T = Record<string, unknown>>(searchParamsString: string): T => {
  const searchParams = new URLSearchParams(searchParamsString);
  const paramsObject: Record<string, unknown> = {};

  searchParams.forEach((value, key) => {
    try {
      paramsObject[key] = JSON.parse(decodeURIComponent(value));
    } catch {
      paramsObject[key] = decodeURIComponent(value);
    }
  });

  return paramsObject as T;
}


export const objectToSearchParams = (paramsObject: Record<string, unknown>): string => {
  const searchParams = new URLSearchParams();

  Object.entries(paramsObject).forEach(([key, value]) => {
    if (typeof value === "object") {
      searchParams.append(key, JSON.stringify(value));
    } else {
      searchParams.append(key, String(value));
    }
  });

  return `?${searchParams.toString()}`;
}

