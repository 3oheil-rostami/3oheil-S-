import HomeLayout from "../HomeLayout";

export default function ProductLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<HomeLayout>
			<div className="container-wrapper">{children}</div>
		</HomeLayout>
	);
}
