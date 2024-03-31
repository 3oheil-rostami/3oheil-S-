import React from "react";
import CategoryLayout from "./CategoryLayout";
import ProductCart from "@/components/ProductCard";

export default function page() {
	return (
		<CategoryLayout>
			<div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-1 bg-neutral-100 '>
				{Array(20)
					.fill(9)
					.map((_, index) => (
						<ProductCart key={index} />
					))}
			</div>
		</CategoryLayout>
	);
}
