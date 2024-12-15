'use client'

import { sortProducts } from '@/constants/sortProducts'
import { OptionalCategoryFilters } from '@/types'
import React, { FC } from 'react'

type Props = {
    filters: OptionalCategoryFilters
}

const FilterGenerator = ({ filters }: Props) => {
    const filteritems = { sort, price, isAvailable, brands };

    return (
        <div className='flex items-center gap-2'>
            {Object.entries(filteritems).map(([componentName, Component]) => {
                const CurrentComponent = withFilterData(Component);
                return <CurrentComponent key={componentName} filters={filters} />;
            })}
        </div>
    );
};
export default FilterGenerator


const sort = ({ sort }: OptionalCategoryFilters) => {
    const currentSort = sortProducts.find(item => item.enTitle === sort)

    return sort && currentSort ? (
        <span>{currentSort.title}</span>
    ) : null
}

const price = ({ price }: OptionalCategoryFilters) => {
    if (!price) return null
    const [fromPrice, untilPrice] = price
    return (
        <div>
            <span>{fromPrice}</span>
            <span>{untilPrice}</span>
        </div>
    )
}

const isAvailable = ({ isAvailable }: OptionalCategoryFilters) => {
    return isAvailable ? (
        <span>فقط کالاهای موجود</span>
    ) : null
}

const brands = ({ brands }: OptionalCategoryFilters) => {
    return Array.isArray(brands) ? (
        <div>{brands?.map(item => (
            <span key={item}>{item}</span>
        ))}</div>
    ) : null
}


const withFilterData = (Component: FC<OptionalCategoryFilters>) => {
    const WrappedComponent = ({ filters }: { filters: OptionalCategoryFilters }) => {
        return <Component {...filters} />;
    };

    // Set the display name for easier debugging
    WrappedComponent.displayName = `withFilterData(${Component.displayName || Component.name || 'Component'})`;

    return WrappedComponent;
};
