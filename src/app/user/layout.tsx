import React from "react";
import NavDraw from "@/components/user/NavDraw";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import NavbarMenu from "@/components/NavbarMenu";
import Footer from "@/components/Footer";

export default function UserLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Topbar srcImage="" />
			<div className="w-full flex flex-col items-center justify-center divide-y-2 divide-secondary-100">
				<Navbar />
				<NavbarMenu />
			</div>
			<div className="user-layout container-wrapper">
				<div className="flex gap-3 py-10">
					<div className="">
						<NavDraw />
					</div>
					<div className="grow p-5 border-2 rounded-xl">{children}</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
