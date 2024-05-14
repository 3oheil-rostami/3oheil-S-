"use server";
import Breadcrumb from "@/components/Breadcrumb";
import CardAddToCart from "@/components/CardAddToCart";
import DetailsProduct from "@/components/DetailsProduct";
import ImageSlider from "@/components/ImageSlider";
import ProductImages from "@/components/ProductImages";
import { checkProductLiked, getProduct } from "@/services/product";
import { Comment, ProductPage } from "@/types/apiTypes";
import CommentsSection from "@/components/Comments";
import { getAllComments } from "@/services/comment";
import AddToCartCard from "@/components/AddToCartCard(ClientSide)";

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
async function getOtherData(productId: string): Promise<
	| {
			commentsData: Comment[];
			checkLickedProductResponse: boolean;
	  }
	| undefined
> {
	try {
		const commentsResponse = await getAllComments(productId);
		const checkLickedProductResponse = await checkProductLiked(productId);
		const commentsData: Comment[] = commentsResponse.data;
		return { commentsData, checkLickedProductResponse };
	} catch (error) {
		console.error(":( error is  =>", error);
		return undefined;
	}
}

const page = async ({ params: { productId } }: { params: { productId: string } }) => {
	const data = await getDataProduct(productId);
	const otherData = await getOtherData(data?.product._id || "null");
	const comments: Comment[] | undefined = otherData?.commentsData;

	console.log(otherData?.commentsData);
	return (
		<>
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
									src: `https://demon.liara.run/images/productCover/${data?.product.productCover}`,
									alt: "product image",
								},
								...(data?.product.productPics.map(picItem => ({
									src: `https://demon.liara.run/image/productPic/${picItem}`,
									alt: `product image`,
								})) || []),
							]}
						/>
						<div className="absolute top-5 right-0 z-50 lg:hidden">
							<AddToCartCard
								axis="vertical"
								product={data?.product}
								isLiked={!!otherData?.checkLickedProductResponse}
							/>
						</div>
					</div>
					<ProductImages
						images={[
							{
								src: `https://demon.liara.run/image/productCover/${data?.product.productCover}`,
								alt: "product image",
							},
							...(data?.product.productPics.map(picItem => ({
								src: `https://demon.liara.run/image/productPic/${picItem}`,
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
								product={data?.product}
								brand={
									data?.brand || { _id: "", brandPic: "", enName: "unknown", name: "برند ناشناس" }
								}
								price={data?.product.colors.sort((a, b) => a.price - b.price)[0].price || 0}
								off={data?.product.colors.sort((a, b) => a.off - b.off)[0].off || 0}
								isLiked={!!otherData?.checkLickedProductResponse}
							/>
						</div>
					</div>
				</div>
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
						<p className="text-base font-medium text-neutral-90">{data?.product.howUse}</p>
					</div>
				</section>
				<section>
					<h4 className="text-xl font-bold text-neutral-700">نظرات :</h4>
					<div className=" mr-3 mt-2">
						<CommentsSection comments={comments || []} />
					</div>
				</section>
			</div>
		</>
	);
};

export default page;
