"use server";
import Link from "./Link";
import Image from "next/image";
import { Category } from "@/types/apiTypes";
import { getAllCategories } from "@/services/category";
import { PiEyedropperSampleDuotone } from "react-icons/pi";

async function getData() {
	try {
		const response = await getAllCategories();
		const data: Category[] = response.data;
		return data;
	} catch (error) {
		console.error("error is :( => :", error);
		return undefined;
	}
}

export default async function NavbarMenu() {
	const data: Category[] | undefined = await getData();
	return (
		<nav className="container-wrapper h-12 w-full flex justify-start items-center z-50 ">
			<ul className="flex gap-7 px-3">
				{!!data &&
					data.map((item, index) => (
						<li key={index} className="group z-50 text-slate-800 hover:text-slate-950 ">
							<Link href={`/categories/${item.href}`} icon={<PiEyedropperSampleDuotone />}>
								{item.name}
							</Link>
							<div className="sub-menu absolute inset-x-0 transition-all duration-300 -translate-y-1/2 scale-y-0 group-hover:scale-100 group-hover:translate-y-2 h-96 z-50">
								<nav className="container-wrapper mx-[auto!important] h-full p-[32px!important] bg-[rgb(255,232,237)!important] rounded-b-2xl flex flex-col justify-between">
									<h3 className="mb-4 pb-4 border-b-4 border-secondary-800/50">
										<Link
											className="font-bold text-xl text-neutral-800 hover:text-neutral-950 transition-all"
											href={`/categories/${item.href}`}>
											{item.name}
										</Link>
									</h3>
									<div className="flex justify-between">
										<div className="flex flex-wrap flex-col gap-2 max-h-80 content-start items-start">
											{item.subs &&
												item.subs.map((subItem, i) => (
													<ul key={i} className="group/categoryItem">
														<li className="w-48 h-8 relative">
															<span className="absolute transition-all duration-500 right-0 bottom-0 h-full rounded-[86%14%84%16%/25%83%17%75%] bg-secondary-500/25 opacity-30 group-hover/categoryItem:opacity-100 w-1/2"></span>
															<Link
																className="text-lg text-neutral-800 font-semibold absolute z-10 hover:underline"
																href={`/categories/${subItem.href}`}>
																{subItem.name}
															</Link>
														</li>
														{subItem.subs?.map((subSUbItem, index) => (
															<li
																key={subSUbItem._id}
																className={`mr-2 text-base text-neutral-700 font-medium last:mb-3 hover:text-neutral-900 ${
																	index === 0 ? "mt-3" : ""
																}`}>
																<Link className="w-fit" href={`/categories/${subSUbItem.href}`}>
																	{subSUbItem.name}
																</Link>
															</li>
														))}
													</ul>
												))}
										</div>
										<div className="image-wrapper self-end size-64 relative">
											<Image
												src={`http://localhost:4000/image/categoriepic/${item.pic}`}
												fill
												alt="product image"
												className="object-cover mix-blend-darken select-none"
											/>
										</div>
									</div>
								</nav>
							</div>
						</li>
					))}
			</ul>
		</nav>
	);
}
