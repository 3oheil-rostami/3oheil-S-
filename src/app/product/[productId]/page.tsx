"use server";
import Breadcrumb from "@/components/Breadcrumb";
import CardAddToCart from "@/components/CardAddToCart";
import DetailsProduct from "@/components/DetailsProduct";
import ImageSlider from "@/components/ImageSlider";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/form/Button";
import MdModalLayout from "@/modals/MdModalLayout";
import { getProduct } from "@/services/product";
import { FcLike } from "react-icons/fc";
import { MdContentCopy } from "react-icons/md";
import ProductLayout from "../ProductLayout";
import { ProductPage } from "@/types/apiTypes";
import CommentsSection from "@/components/Comments";
import { getAllComments } from "@/services/comment";

async function getDataProduct(enName: string) {
	try {
		const response = await getProduct(enName);
		const data: ProductPage = response.data;
		return data;
	} catch (error) {
		console.error(":( error is  =>", error);
		return undefined;
	}
}

const page = async ({ params: { productId } }: { params: { productId: string } }) => {
	// BUG دیتاها گرفته نمیشود
	const data = await getDataProduct(productId);
	// console.log("data:", productId, data);
	return (
		<ProductLayout>
			<div className="lg:hidden mb-5">
				<Breadcrumb
					links={
						data?.address.map((breadcrumbItem, index) => ({
							id: index,
							title: breadcrumbItem.key,
							href: "" + breadcrumbItem.value,
						})) || []
					}
				/>
			</div>
			<div className=" mx-auto justify-evenly md:flex-wrap lg:flex-wrap">
				<div className="flex flex-col lg:flex-row justify-center gap-4">
					<div className="relative">
						<ImageSlider
							images={[
								{
									src: `http://localhost:4000/image/productcover/${data?.product.productCover}`,
									alt: "product image",
								},
								...(data?.product.productPics.map(picItem => ({
									src: `http://localhost:4000/image/productpic/${picItem}`,
									alt: `product image`,
								})) || []),
							]}
						/>
						<div className="absolute top-5 right-0 z-50 lg:hidden">
							<Button colorScheme="secondary" typeBtn="icon" variant="text">
								<FcLike />
							</Button>
							<Button colorScheme="secondary" typeBtn="icon" variant="text">
								<MdContentCopy />
							</Button>
						</div>
					</div>
					<ProductImages
						images={[
							{
								src: `http://localhost:4000/image/productcover/${data?.product.productCover}`,
								alt: "product image",
							},
							...(data?.product.productPics.map(picItem => ({
								src: `http://localhost:4000/image/productpic/${picItem}`,
								alt: `product image`,
							})) || []),
						]}
					/>
					<div className="grow">
						<div className="hidden lg:block mb-5">
							<Breadcrumb
								links={
									data?.address.map((breadcrumbItem, index) => ({
										id: index,
										title: breadcrumbItem.key,
										href: "" + breadcrumbItem.value,
									})) || []
								}
							/>
						</div>
						<h1 className="text-2xl font-semibold text-neutral-800 mb-4">{data?.product.name}</h1>
						<div className="flex gap-10 flex-col lg:flex-row lg:gap-3">
							<DetailsProduct
								colors={data?.product.colors || []}
								properties={data?.product.property || []}
								score={data?.product.score || 0}
							/>
							<CardAddToCart
								brand={
									data?.brand || { _id: "", brandPic: "", enName: "unknown", name: "برند ناشناس" }
								}
								price={data?.product.colors.sort((a, b) => a.price - b.price)[0].price || 0}
								off={data?.product.colors.sort((a, b) => a.off - b.off)[0].off || 0}
							/>
						</div>
					</div>
				</div>
				<MdModalLayout
					size="sm"
					confirmButtonText="حذف"
					title="حذف کالا"
					typeModal="success"
					isShow={false}
				/>
			</div>
			<div className="flex flex-col gap-8 py-5 px-3 my-5 border-t-4 border-neutral-800/50">
				<section>
					<h4 className="text-xl font-bold text-neutral-700">معرفی محصول :</h4>
					<div className="border-r border-neutral-400 p-5 mr-3  mt-2  rounded-lg bg-neutral-100">
						<p className="text-base font-medium text-neutral-900">{data?.product.intro}</p>
					</div>
				</section>
				<section>
					<h4 className="text-xl font-bold text-neutral-800">مشخصات محصول :</h4>
					<ul className="mr-3 pr-3 mt-2 border-r border-neutral-400 p-5 rounded-lg bg-neutral-100">
						{data?.product.info.map((infoItem, index) => (
							<li key={index} className="flex gap-3 py-2 text-base font-bold text-neutral-700">
								<span>{infoItem.key} :</span>
								<span className="text-neutral-700">{infoItem.value}</span>
							</li>
						))}
					</ul>
				</section>
				<section>
					<h4 className="text-xl font-bold text-neutral-700">نحوه استفاده :</h4>
					<div className="border-r border-neutral-400 p-5 mr-3 mt-2 rounded-lg bg-neutral-100">
						<p className="text-base font-medium text-neutral-90">
							پس از استفاده از شامپو و خشک کردن نسبی تارهای مو، در زمانی که هنوز رطوبت مختصری بر روی
							تارهای مو باقی مانده، هیرتونیک لافارر را بر موضع دچار ریزش 7 مرتبه پاف نمائید و با نوک
							انگشتان به نرمی و به صورت دورانی ماساژ دهید تا خوب جذب گردد. طریقۀ مصرف برای ابرو: بر
							روی هر ابرو یک مرتبه پاف شود و از ماساژ اجتناب شود
						</p>
					</div>
				</section>
				<section>
					<h4 className="text-xl font-bold text-neutral-700">نظرات :</h4>
					<div className=" mr-3 mt-2">
						<CommentsSection productId={data?.product._id || ""} />
					</div>
				</section>
			</div>
		</ProductLayout>
	);
};

export default page;
