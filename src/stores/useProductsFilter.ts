'use client'
import useLocalStorage from "@/hooks/useLoacalStorage";
import { CategorySearchParams } from "@/types";
import { create } from "zustand";

type CategoriesStore = {
    searchParams: CategorySearchParams | null;
    setSearchParams: (generatedSearchParams: string) => void;
};

const useProductsFilter = () => {
    const [, setFilterProducts] = useLocalStorage('filterProducts', {})

    return create<CategoriesStore>()((set) => {
        return {
            searchParams: null,
            setSearchParams: (generatedSearchParams: string) => set(({ searchParams }) => {
                setFilterProducts(generatedSearchParams)
                window.history.replaceState({}, '', `${window.location.pathname}?${generatedSearchParams}`);
                console.log('setted searchPatams' : generatedSearchParams)
                return { searchParams }
            }),
        }
    })()
};

export default useProductsFilter