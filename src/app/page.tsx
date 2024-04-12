import HeaderSlider from "@/components/HeaderSlider";
import ContainerSlider from "@/components/ContainerSlider";
import CategoriesWithImages from "@/components/CategoriesWithImages";
import Brands from "@/components/Brands";
import LastArticles from "@/components/LastArticles";
import HomeLayout from "./HomeLayout";

export default function Home() {
	return (
		<HomeLayout>
			<HeaderSlider />
			<div className='w-full flex flex-col items-center justify-center gap-y-4 my-4'>
				<ContainerSlider type='promotion' />
				<CategoriesWithImages />
				<Brands />
				<ContainerSlider type='top-sales' />
				<LastArticles />
			</div>
		</HomeLayout>
	);
}
