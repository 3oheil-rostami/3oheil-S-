import React from "react";
import MainLayout from "./MainLayout";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import NavbarMenu from "@/components/NavbarMenu";
import Footer from "@/components/Footer";

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<MainLayout>
			<Topbar />
			<div className='w-full flex flex-col items-center justify-center divide-y-2 divide-secondary-100'>
				<Navbar />
				<NavbarMenu />
			</div>
			{children}
			<Footer />
		</MainLayout>
	);
}
