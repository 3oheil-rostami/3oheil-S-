export default function SliderBanner() {
	return (
		<div className='w-full h-full bg-primary-400 flex flex-col items-center justify-center'>
			<div className='h-28 flex items-center'>
				<h6 className='text-4xl leading-[64px] font-bold text-white'>تخفیفاتمون</h6>
			</div>
			<div className='grow text-white'>
				<span className='block text-center mb-2 font-bold'>تا</span>
				<span className='wrapper relative'>
					<span
						style={{ textShadow: "10px 5px 0px black" }}
						className='block text-center text-9xl leading-[147px] '>
						50
					</span>
					<span className='flex justify-center items-center rounded-full font-extrabold text-2xl font-sans size-10 bg-yellow-400 text-neutral-950 absolute top-0 right-0 left-auto'>
						%
					</span>
				</span>
				<span className='block text-center text-2xl font-bold -translate-y-1/2'>
					به مناسبت نوروز
				</span>
			</div>
		</div>
	);
}
