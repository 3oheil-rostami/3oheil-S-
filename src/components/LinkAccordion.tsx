"use client";
import { LinkAccordionProps } from "@/types";
import React from "react";
import Link from "./Link";
import AccordionContent from "./AccordionContent";

export default function LinkAccordion({
	title,
	links = [],
	subAccordions = [],
}: LinkAccordionProps) {
	return (
		<li className='accordion'>
			<button
				type='button'
				onClick={e => e.currentTarget.parentElement?.classList.toggle("is-accordion-open")}
				className='accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-base text-neutral-800 hover:text-neutral-950 rounded-lg hover:bg-gray-100 border'>
				<svg
					className='flex-shrink-0 size-4'
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'>
					<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
					<circle cx='9' cy='7' r='4' />
					<path d='M22 21v-2a4 4 0 0 0-3-3.87' />
					<path d='M16 3.13a4 4 0 0 1 0 7.75' />
				</svg>
				{title}
				<svg
					className='ms-auto size-4'
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'>
					<path d='m18 15-6-6-6 6' />
				</svg>
			</button>
			<div className='accordion-content w-full overflow-hidden transition-[height] duration-300 '>
				{!!subAccordions.length ? (
					<ul className=' ps-3 pt-2'>
						{subAccordions.map((accordionItem, index) => (
							<li className='accordion transition-all' key={index}>
								<span
									onClick={e =>
										e.currentTarget.parentElement?.classList.toggle("is-accordion-open")
									}
									className='accordion-toggle cursor-pointer w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100'>
									<Link href={accordionItem.href}>{accordionItem.title}</Link>
									<svg
										className='ms-auto transition-transform size-4'
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'>
										<path d='m18 15-6-6-6 6' />
									</svg>
								</span>
								<div className='accordion-content w-full overflow-hidden transition-all duration-300 '>
									<AccordionContent links={accordionItem.subLinks} />
								</div>
							</li>
						))}
					</ul>
				) : (
					<AccordionContent links={links} />
				)}
			</div>
		</li>
	);
}
