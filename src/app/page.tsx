import MainLayout from "./MainLayout";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import NavbarMenu from "@/components/NavbarMenu";
import HeaderSlider from "@/components/HeaderSlider";
import ContainerSlider from "@/components/ContainerSlider";
import CategoriesWithImages from "@/components/CategoriesWithImages";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import LastArticles from "@/components/LastArticles";

export default function Home() {
	
	return (
		<MainLayout>
			<Topbar />
			<div className='w-full flex flex-col items-center justify-center divide-y-2 divide-secondary-100'>
				<Navbar />
				<NavbarMenu />
			</div>
			<HeaderSlider />
			<div className='w-full flex flex-col items-center justify-center gap-y-4 my-4'>
				<ContainerSlider type='promotion' />
				<CategoriesWithImages />
				<Brands />
				<ContainerSlider type='top-sales' />
				<LastArticles />
			</div>
			<Footer />
		</MainLayout>
	);
}
