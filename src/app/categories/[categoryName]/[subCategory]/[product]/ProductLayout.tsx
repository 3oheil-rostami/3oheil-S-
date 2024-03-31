import React from "react";
import MainLayout from "@/app/MainLayout";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";

export default function ProductLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<MainLayout>
			<Topbar />
			<Navbar />
			<div className='container-wrapper'>{children}</div>
		</MainLayout>
	);
}
