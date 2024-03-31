"use client";
import React, { useEffect, useState } from "react";
import Link from "./Link";
import Image from "next/image";

import ProductImage from "@/../public/images/sub-menu-navbarjpg.jpg";

import { PiEyedropperSampleDuotone } from "react-icons/pi";
import { Category } from "@/types/apiTypes";

export default function NavbarMenu() {
	const [data, setData] = useState<Category[]>();

	useEffect(() => {
		fetch("http://localhost:4000/categorie")
			.then(res => {
				if (res.ok) {
					return res.json();
				}
			})
			.then(response => {
				console.log(response);
				setData(response);
			});
	}, []);
	useEffect(() => {}, [data]);
	return (
		<nav className='container h-12 w-full flex justify-start items-center z-50 '>
			{" "}
			{/* TODO how bug (hover)*/}
			<ul className='flex gap-7 px-3'>
				{data &&
					data.map((item, index) => (
						<li key={index} className='group z-50 text-slate-800 hover:text-slate-950 '>
							<Link href={"/"} icon={<PiEyedropperSampleDuotone />}>
								{item.name}
							</Link>
							<div className='sub-menu absolute inset-x-0 w-screen transition-all duration-300 -translate-y-1/2 scale-y-0 group-hover:scale-100 group-hover:translate-y-0 h-96 z-50'>
								<nav className='w-full h-full p-8 bg-primary-50 rounded-b-2xl flex justify-between'>
									<ul className='flex flex-wrap flex-col gap-2 max-h-80 content-start items-start'>
										{item.subs &&
											item.subs.map((subItem, i) => (
												<li
													key={i}
													className='w-48 relative after:transition-all after:absolute after:right-0 after:bottom-0 after:w-0 after:h-0.5 after:rounded-full after:bg-secondary-500 after:hover:w-1/2 '>
													<Link href={"/"}> {subItem.name}</Link>
												</li>
											))}
									</ul>
									<div className='image-wrapper h-fit self-end'>
										{/*  eslint-disable-next-line @next/next/no-img-element */}
										<img
											src={`http://localhost:4000/image/${item.pic}`}
											width={250}
											height={250}
											alt='product image'
											className='object-cover mix-blend-darken select-none'
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
