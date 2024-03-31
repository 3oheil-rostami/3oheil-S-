import React from "react";
import MainLayout from "@/app/MainLayout";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import LinkAccordion from "@/components/LinkAccordion";

export default function CategoryLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<MainLayout>
			<Topbar />
			<Navbar />
			<div className='container-wrapper bg-gray-50 '>
				{/* <!-- ========== MAIN CONTENT ========== --> */}
				{/* <!-- Sidebar Toggle --> */}
				<div className=' inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8'>
					<div className='flex items-center py-4'>
						{/* <!-- Navigation Toggle --> */}

						{/* <!-- End Navigation Toggle --> */}
						{/* <!-- Breadcrumb --> */}
						<Breadcrumb
							links={[
								{ id: "ds", href: "#", title: "دسته بندی" },
								{ id: "asdfsa", title: "لوازم آرایشی", href: "#" },
							]}
						/>
						{/* <!-- End Breadcrumb --> */}
					</div>
				</div>
				{/* <!-- End Sidebar Toggle --> */}
				<div className='flex'>
					{/* <!-- Sidebar --> */}
					<div
						id='application-sidebar'
						className='transition-all duration-300 hidden z-[60] w-64 h-full min-w-64 bg-red-50/50 backdrop-blur-sm border-e border-neutral-200 rounded-xl pt-7 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 sticky top-0'>
						<div className='px-6'>
							<a className='flex-none text-xl font-semibold' href='#' aria-label='Products'>
								همه محصولات
							</a>
						</div>
						<nav className=' p-6 w-full flex flex-col flex-wrap'>
							<ul className='space-y-1.5'>
								<LinkAccordion
									title='لوازم آرایشی'
									subAccordions={[
										{
											title: "آرایش صورت",
											href: "#",
											subLinks: [
												{ id: "ds", title: "لینک 1", href: "#" },
												{ id: "dss", title: "لینک 2", href: "#" },
												{ id: "dsa", title: "لینک 3", href: "#" },
												{ id: "dfs", title: "لینک 4", href: "#" },
											],
										},
										{
											title: "آرایش چشم",
											href: "#",
											subLinks: [
												{ id: "ds", title: "لینک 1", href: "#" },
												{ id: "dss", title: "لینک 2", href: "#" },
												{ id: "dsa", title: "لینک 3", href: "#" },
												{ id: "dfs", title: "لینک 4", href: "#" },
											],
										},
									]}
								/>
							</ul>
						</nav>
					</div>
					{/* <!-- End Sidebar --> */}

					{/* <!-- Content --> */}
					<div className='w-full pt-5 px-4 sm:px-6 lg:px-8'>
						{/* <!-- Page Heading --> */}
						{children}
						{/* <!-- End Page Heading --> */}
					</div>
					{/* <!-- End Content --> */}
					{/* <!-- ========== END MAIN CONTENT ========== --> */}
				</div>
			</div>
		</MainLayout>
	);
}
