import MainLayout from "./MainLayout";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import NavbarMenu from "@/components/NavbarMenu";
import HeaderSlider from "@/components/HeaderSlider";
import ContainerSlider from "@/components/ContainerSlider";

export default function Home() {
	return (
		<MainLayout>
			<Topbar />
			<div className='w-full flex flex-col items-center justify-center bg-red-200'>
				<Navbar />
				<NavbarMenu />
			</div>
			<HeaderSlider />
			<div className='w-full flex flex-col items-center justify-center gap-y-4 my-4'>
				<ContainerSlider type='news-products' />
				<ContainerSlider type='promotion' />
				<ContainerSlider type='top-sales' />
				<ContainerSlider type='news-products' />
			</div>
		</MainLayout>
	);
}
