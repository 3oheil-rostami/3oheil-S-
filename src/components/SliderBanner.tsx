export default function SliderBanner({
	type,
	topOff,
}: {
	type: "moreDiscount" | "moreSale";
	topOff?: number;
}) {
	return (
		<div
			className={`w-full h-full flex flex-col items-center justify-center ${
				type === "moreSale" ? "bg-[rgb(190,24,93)!important]" : "bg-[rgb(255,26,64)!important]"
			}`}>
			{type === "moreDiscount" ? (
				<>
					<div className="h-28 flex items-center">
						<h6 className="text-4xl leading-[64px] font-bold text-white">تخفیفاتمون</h6>
					</div>
					<div className="grow text-white">
						<span className="block text-center mb-2 font-bold">تا</span>
						<span className="wrapper relative">
							<span
								style={{ textShadow: "10px 5px 0px black" }}
								className="block text-center text-9xl leading-[147px] ">
								{topOff}
							</span>
							<span className="flex justify-center items-center rounded-full font-extrabold text-2xl font-sans size-10 bg-yellow-400 text-neutral-950 absolute top-0 right-0 left-auto">
								%
							</span>
						</span>
						<span className="block text-center text-2xl font-bold -translate-y-1/2">
							به مناسبت نوروز
						</span>
					</div>
				</>
			) : (
				<>
					<div className="">
						<h3
							className="text-3xl font-bold text-white text-center"
							style={{ textShadow: "2px 2px 0px black" }}>
							پر فروش ترین محصولاتمون
						</h3>
					</div>
				</>
			)}
		</div>
	);
}
