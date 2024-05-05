import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavbarMenu from "@/components/NavbarMenu";
import Topbar from "@/components/Topbar";

export default function ProductLayout({
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
			<div className="container-wrapper py-[40px!important]">{children}</div>
			<Footer />
		</>
	);
}
