import React from "react";
import NavDraw from "@/components/dashboard/NavDraw";
import TopBar from "@/components/dashboard/TopBar";
import MainLayout from "../MainLayout";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<MainLayout>
			<div className='flex h-full w-full'>
				<NavDraw />
				<div className='w-full h-screen overflow-y-auto relative'>
					<TopBar />
					<div className='container-wrapper mx-auto '>
						<div className='dashboard-content'>{children}</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
