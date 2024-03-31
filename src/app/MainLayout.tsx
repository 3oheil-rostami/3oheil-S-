import React from "react";
import RootLayout from "./layout";

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<RootLayout>
			<div className='main-layout'>{children}</div>
		</RootLayout>
	);
}
