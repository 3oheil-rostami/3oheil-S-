import { Color } from "@/types/apiTypes";
import ColorsProduct from "./ColorsProduct";
import { FaRegStar, FaStar } from "react-icons/fa";

export default function DetailsProduct({
	properties,
	colors,
	score,
}: {
	properties: string[];
	colors: Color[];
	score: number;
}) {
	return (
		<div className="w-full lg:w-1/2  border-t-2 border-neutral-300 pt-4 px-3 lg:order-none grow">
			{/* <h2 className='text-lg font-bold text-neutral-700 mb-3 uppercase'>LONG MASCARA CITRAY</h2> */}
			<div className="flex gap-2 py-2">
				<div className="flex gap-1">
					<span className="text-sm text-neutral-800 font-bold">امتیازات:</span>
					{Array(Math.round(score))
						.fill(score)
						.map((_, index) => (
							<FaStar key={index} className="text-yellow-600" />
						))}
					{Array(5 - Math.round(score))
						.fill(5 - score)
						.map((_, index) => (
							<FaRegStar key={index} className="text-neutral-700" />
						))}
				</div>
				<span>|</span>
				<span className="text-sm text-neutral-800 font-bold"> نظرات : 56 نظر</span>
			</div>
			<div>
				<h2 className="text-lg font-bold text-neutral-700">ویژگی های محصول </h2>
				<ul className="marker:text-primary-600 list-disc pr-7 pt-2 mb-4 max-h-48 overflow-hidden relative after:h-14 after:w-full after:absolute after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-t after:from-neutral-300 after:to-transparent after:hidden">
					{properties.map((property, index) => (
						<li key={index}>{property}</li>
					))}
				</ul>
			</div>
			<div className="mt-2">
				<h3 className="text-lg font-bold text-neutral-700 mb-3">رنگبندی محصول</h3>
				<ColorsProduct colors={colors} />
			</div>
		</div>
	);
}
