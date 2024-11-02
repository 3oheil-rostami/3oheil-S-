import { CategorySearchParams } from "@/types"

const defualtValuesFilterProducts = (searchParams: CategorySearchParams | null) => {
    return !!searchParams ? {
        from_price: searchParams.prices?.[0] ?? '',
        till_price: searchParams.prices?.[1] ?? "",
        isAvailable: searchParams.isAvailable ?? false,
        brands: searchParams.brands ?? [],
        sort: searchParams.sort
    } : {}
}
export default defualtValuesFilterProducts