import React from "react";
import Link from "./Link";
import Image from "next/image";

import ProductImage from "@/../public/images/sub-menu-navbarjpg.jpg";

import { PiEyedropperSampleDuotone } from "react-icons/pi";

export default function NavbarMenu() {
	return (
		<nav className='container h-12 w-full flex justify-start items-center '>
			<ul className='flex gap-7 px-3'>
				{Array(5)
					.fill(9)
					.map((_, index) => (
						<li key={index} className='group z-50 text-slate-800 hover:text-slate-950'>
							<Link href={"/"} icon={<PiEyedropperSampleDuotone />}>
								متن لینک
							</Link>
							<div className='sub-menu absolute inset-x-0 w-screen transition-all duration-300 -translate-y-1/2 scale-y-0 group-hover:scale-100 group-hover:translate-y-0 h-96 '>
								<nav className='w-full h-full p-8 bg-primary-50 rounded-b-2xl flex justify-between'>
									<ul className='flex flex-wrap flex-col gap-2 max-h-80 content-start items-start'>
										{Array(30)
											.fill(9)
											.map((_, i) => (
												<li
													key={i}
													className='w-48 relative after:transition-all after:absolute after:right-0 after:w-0 after:h-0.5 after:rounded-full after:bg-secondary-500 after:hover:w-1/2 '>
													<Link href={"/"}>لینک شماره {i}</Link>
												</li>
											))}
									</ul>
									<div className='image-wrapper h-fit self-end'>
										<Image
											src={ProductImage.src}
											width={250}
											height={250}
											alt='product image'
											className='object-cover mix-blend-darken'
										/>
									</div>
								</nav>
							</div>
						</li>
					))}
			</ul>
		</nav>
	);
}
