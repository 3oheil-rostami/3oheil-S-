import { httpService } from "@/services/http-service";
import DashboardLayout from "../DashboardLayout";
import NewProductContent from "./NewProductContent";
import { getBrands, getCategories } from "@/services/getData";
import { Brand, Category } from "@/types/apiTypes";

const NewProduct = () => {
	return (
		<DashboardLayout>
			{/* @ts-ignore */}
			<NewProductContent />
		</DashboardLayout>
	);
};
export default NewProduct;
