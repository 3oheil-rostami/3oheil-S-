import { ColorsProductsProps } from "@/types";
import React from "react";

export default function ColorsProduct({ colors }: ColorsProductsProps) {
	return (
		<div className="w-full flex flex-wrap items-center gap-2">
			{colors.map((color, index) => (
				<span
					key={index}
					title={color.colorName}
					style={{ backgroundColor: "" + color.colorCode }}
					className={`size-12 rounded-full ring-2 ring-secondary-900`}
				/>
			))}
		</div>
	);
}
// TODO handle select color with redux
