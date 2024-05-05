"use server";
import Breadcrumb from "@/components/Breadcrumb";
import LinkAccordion from "@/components/LinkAccordion";
import { CategoryPage } from "@/types/apiTypes";
import NavDrawLink from "@/components/dashboard/NavDrawLink";
import { LuGalleryVerticalEnd } from "react-icons/lu";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import NavbarMenu from "@/components/NavbarMenu";
import Footer from "@/components/Footer";
import { getCategory } from "@/services/category";

async function getData(href: string) {
	try {
		const response = await getCategory(href);
		const data: CategoryPage = response.data;
		return data;
	} catch (error) {
		console.error(":( error is  =>", error);
		return undefined;
	}
}

export default async function CategoryLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: { categoryName: string };
}>) {
	const data = await getData(params.categoryName);
	return (
		<>
			<Topbar srcImage="" />
			<div className="w-full flex flex-col items-center justify-center divide-y-2 divide-secondary-100">
				<Navbar />
				<NavbarMenu />
			</div>

			{/* category layout */}
			<div className="container-wrapper bg-gray-50 ">
				<div className=" inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8">
					<div className="flex items-center py-4">
						<Breadcrumb
							links={
								data?.address?.map((breadcrumbItem, index) => ({
									id: index,
									title: breadcrumbItem?.key,
									href: "" + breadcrumbItem?.value,
								})) || []
							}
						/>
					</div>
				</div>
				<div className="flex">
					<ul
						id="application-sidebar"
						className="transition-all duration-300 hidden z-[60] w-64 h-full min-w-64 bg-red-50/50 backdrop-blur-sm border-e border-neutral-200 rounded-xl pt-7 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 sticky top-0">
						<NavDrawLink
							link="#"
							title="همه محصولات"
							icon={<LuGalleryVerticalEnd />}
							aria-label="Products"
							className="p-px m-2"
						/>
						<li className="w-full flex flex-col flex-wrap p-2">
							<ul className="space-y-1">
								<LinkAccordion
									title="دسته بندی های مربوطه"
									links={[
										...(data?.categories || [])?.map(categoryItem => ({
											id: categoryItem?._id,
											title: categoryItem?.name,
											href: categoryItem?.href,
										})),
									]}
								/>
							</ul>
						</li>
					</ul>
					<div className="w-full pt-5 px-4 sm:px-6 lg:px-8">{children}</div>
				</div>
			</div>
			{/* finish category layout */}

			<Footer />
		</>
	);
}
