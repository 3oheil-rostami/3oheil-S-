import Button from "@/components/form/Button";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import { getAllProductsInCart } from "@/services/cart";
import { ProductsInCart } from "@/types/apiTypes";
import emptyCartImg from "@/../public/images/empty-cart.webp";
import ProductListItem from "@/components/ProductListItem";
import HeaderCartPage from "@/components/user/HeaderCartPage";

async function getData() {
	try {
		const response = await getAllProductsInCart();
		const data: ProductsInCart = response.data as ProductsInCart;
		if (response.status === 404) return {} as ProductsInCart;
		return data;
	} catch (error) {
		console.log(error);
		return {} as ProductsInCart;
	}
}

const Cart = async () => {
	const data: ProductsInCart = await getData();
	// console.log("data:", data);
	return (
		<div className="flex gap-3">
			<div className="grow">
				<HeaderCartPage data={data} />
				<div className="cart-content">
					{!!data.items?.length ? (
						// check for design
						<nav>
							<ul>
								{data.items?.map((productItem, index) => (
									<ProductListItem key={index} {...productItem} />
								))}
							</ul>
						</nav>
					) : (
						<div className="flex flex-col items-center justify-center ">
							<Image
								src={emptyCartImg.src}
								width={400}
								height={400}
								alt="cart is empty !"
								className="illustration-image-filter select-none"
							/>
							<h4 className="text-neutral-700 text-2xl font-bold">سبد خرید خالی است .</h4>
						</div>
					)}
				</div>
			</div>
			{/* FORLETTER use redux and change to client component */}
			<div className="border-r-2 w-72 pr-4">
				<ul className="list-none flex flex-col gap-5 bg-neutral-50 p-5 rounded-xl">
					<li className="flex justify-between items-center">
						<span className="text-sm font-medium text-neutral-800">قیمت کالاها:</span>
						<span className="text-base font-semibold text-neutral-800">
							{parseInt((data.sumPrice || 0)?.toFixed(0))?.toLocaleString()} تومان
						</span>
					</li>
					<li className="flex justify-between items-center">
						<span className="text-sm font-semibold text-neutral-800">جمع سبد خرید :</span>
						<span className="text-base font-bold text-neutral-800">
							{parseInt((data.finalPrice || 0)?.toFixed(0))?.toLocaleString()} تومان
						</span>
					</li>
					<li className="flex justify-between items-center">
						<span className="text-sm font-semibold text-primary-800">سود شما از خرید :</span>
						<span className="text-base font-bold text-primary-800">
							{" "}
							{parseInt((data.sumPrice - data.finalPrice || 0)?.toFixed(0))?.toLocaleString()} تومان
						</span>
					</li>
					<Button
						colorScheme="primary"
						variant="fill"
						size="xs"
						className="mt-3"
						// onClick={}
						isDisabled={!data.items?.length}>
						تائید و تکمیل سفارش
					</Button>
				</ul>
				{!!data.items?.length && (
					<p className=" text-xs text-neutral-700 text-justify mt-3 px-2">
						هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام موجودی، کالاها از سبد حذف می‌شوند.
					</p>
				)}
			</div>
		</div>
	);
};

export default Cart;
