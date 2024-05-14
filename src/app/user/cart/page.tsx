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
		// console.log(error);
		return {} as ProductsInCart;
	}
}

const Cart = async () => {
	const data: ProductsInCart = await getData();
	// console.log("data:", data);
	return (
		<>
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
							alt="سبد خرید خالی است !"
							className="illustration-image-filter select-none"
						/>
						<h4 className="text-neutral-700 text-2xl font-bold">سبد خرید خالی است .</h4>
					</div>
				)}
			</div>
		</>
	);
};

export default Cart;
