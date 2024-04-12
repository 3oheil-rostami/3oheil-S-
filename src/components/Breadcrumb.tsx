import { BreadcrumbLinks } from "@/types";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
// The Breadcrumb component takes in a list of links and renders a breadcrumb navigation

export default function Breadcrumb({ links = [] }: BreadcrumbLinks) {
	return (
		<section>
			{/* Wrapper div with bg-color, rounded corners, and padding */}
			<div className="px-3 py-1 rounded-md w-full">
				{/* Navigation section with the list of links */}
				<nav>
					<ul className="flex text-sm items-center flex-wrap">
						{/* First list item contains a link to the home page */}
						{/* <li className='flex gap-1 items-center'>
							<Link href={"/"} className='flex gap-1 items-center'>
								<span className='font-bold text-indigo-700 '>خانه</span>
							</Link>
							{links.length !== 0 && <IoIosArrowBack className='text-black ' />}
						</li> */}
						{/* Map over the list of links and create a list item for each one */}
						{links.map((linkItem, index) => (
							<li key={linkItem.title} className="flex gap-1 items-center mr-1">
								<Link href={!Boolean(linkItem.href) ? "/" : linkItem.href}>
									<span className="text-secondary-700 text-nowrap last:text-wrap">
										{linkItem.title}
									</span>
								</Link>
								{/* If this is not the last link in the list, add a left arrow icon */}
								{index + 1 !== links.length && <IoIosArrowBack className="text-neutral-800 " />}
							</li>
						))}
					</ul>
				</nav>
			</div>
		</section>
	);
}
