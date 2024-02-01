import React from "react";
import Link from "./Link";
import Image from "next/image";

import ProductImage from "@/../public/images/sub-menu-navbarjpg.jpg";

import { PiEyedropperSampleDuotone } from "react-icons/pi";

export default function NavbarMenu() {
	return (
		<nav className='container h-12 w-full flex justify-start items-center '>
			<ul className='flex gap-7 px-3'>
				<li className='group z-50'>
					<Link href={"/"} icon={<PiEyedropperSampleDuotone />}>
						متن لینک
					</Link>
					<div className='sub-menu absolute inset-x-0 w-screen transition-all duration-300 -translate-y-1/2 scale-y-0 group-hover:scale-100 group-hover:translate-y-0 h-96 '>
						<nav className='w-full h-full p-8 bg-slate-50 rounded-b-2xl flex justify-between'>
							<ul className='flex flex-wrap flex-col gap-2 max-h-80 content-start items-start'>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
							</ul>
							<div className='image-wrapper h-fit self-end'>
								<Image
									src={ProductImage.src}
									width={250}
									height={250}
									alt='product image'
									className='object-cover'
								/>
							</div>
						</nav>
					</div>
				</li>
				<li className='group z-50'>
					<Link href={"/"} icon={<PiEyedropperSampleDuotone />}>
						متن لینک
					</Link>
					<div className='sub-menu absolute inset-x-0 w-screen transition-all -translate-y-1/2 scale-y-0 group-hover:scale-100 group-hover:translate-y-0 h-96 bg-slate-500 '>
						<nav className='w-full h-full p-8 bg-slate-50 rounded-b-2xl flex justify-between'>
							<ul className='flex flex-wrap flex-col gap-2 max-h-80 content-start items-start'>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
							</ul>
							<div className='image-wrapper h-fit self-end'>
								<Image
									src={ProductImage.src}
									width={250}
									height={250}
									alt='product image'
									className='object-cover'
								/>
							</div>
						</nav>
					</div>
				</li>
				<li className='group z-50'>
					<Link href={"/"} icon={<PiEyedropperSampleDuotone />}>
						متن لینک
					</Link>
					<div className='sub-menu absolute inset-x-0 w-screen transition-all -translate-y-1/2 scale-y-0 group-hover:scale-100 group-hover:translate-y-3 h-96 bg-slate-500 '>
						<nav className='w-full h-full p-8 bg-slate-50 rounded-b-2xl flex justify-between'>
							<ul className='flex flex-wrap flex-col gap-2 max-h-80 content-start items-start'>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
							</ul>
							<div className='image-wrapper h-fit self-end'>
								<Image
									src={ProductImage.src}
									width={250}
									height={250}
									alt='product image'
									className='object-cover'
								/>
							</div>
						</nav>
					</div>
				</li>
				<li className='group z-50'>
					<Link href={"/"} icon={<PiEyedropperSampleDuotone />}>
						متن لینک
					</Link>
					<div className='sub-menu absolute inset-x-0 w-screen transition-all -translate-y-1/2 scale-y-0 group-hover:scale-100 group-hover:translate-y-0 h-96 bg-slate-500 '>
						<nav className='w-full h-full p-8 bg-slate-50 rounded-b-2xl flex justify-between'>
							<ul className='flex flex-wrap flex-col gap-2 max-h-80 content-start items-start'>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
								<li className='w-48'>
									<Link href={"/"}>link </Link>
								</li>
							</ul>
							<div className='image-wrapper h-fit self-end'>
								<Image
									src={ProductImage.src}
									width={250}
									height={250}
									alt='product image'
									className='object-cover'
								/>
							</div>
						</nav>
					</div>
				</li>
			</ul>
		</nav>
	);
}
