import React from "react";
import HomeLayout from "../HomeLayout";
import NavDraw from "@/components/user/NavDraw";

export default function UserLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<HomeLayout>
			<div className='user-layout container-wrapper'>
				<div className='flex gap-3 py-10'>
					<div className=''>
						<NavDraw />
					</div>
					<div className='grow p-5 border-2 rounded-xl'>{children}</div>
				</div>
			</div>
		</HomeLayout>
	);
}
