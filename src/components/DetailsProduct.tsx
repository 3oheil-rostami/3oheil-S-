import ColorsProduct from "./ColorsProduct";

export default function DetailsProduct() {
	return (
		<div className='w-full lg:w-1/2  border-t-2 border-neutral-300 pt-4 px-3  lg:order-none grow'>
			{/* <h2 className='text-lg font-bold text-neutral-700 mb-3 uppercase'>LONG MASCARA CITRAY</h2> */}
			<div className='flex flex-wrap gap-x-4 gap-y-2 items-center mt-3'>
				<span className='text-base font-normal text-neutral-800'>دسته بندی : </span>
				<ul className='flex items-center gap-1 text-sm font-medium text-neutral-900'>
					<li className=''>آرایشی ،</li>
					<li className=''>آرایشی صورت،</li>
					<li className=''>کرم صفید کننده</li>
				</ul>
			</div>
			<div className='mt-5'>
				<h2 className='text-lg font-bold text-neutral-700'>ویژگی های محصول </h2>
				<ul className='marker:text-primary-600 list-disc pr-7 pt-2 mb-4 max-h-48 overflow-hidden relative after:h-14 after:w-full after:absolute after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-t after:from-neutral-300 after:to-transparent after:hidden'>
					<li className=''>ترکیبات گیاهی</li>
					<li className=''>حجم دهنده</li>
					<li className=''>حالت دهنده</li>
				</ul>
			</div>
			<div className='mt-2'>
				<ColorsProduct colors={["#840C22", "#510111", "#f97954"]} />
			</div>
		</div>
	);
}
