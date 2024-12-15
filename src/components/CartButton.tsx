"use client";
import emptyCartImg from "@/../public/images/empty-cart2.png";
import { clearCartContent, selectCartItems } from "@/reducers/cart";
import { clearCart } from "@/services/cart";
import Image from "next/image";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ProductListItem from "./ProductListItem";

const CartButton = () => {
	const dispatch = useDispatch();
	const allCartItems = useSelector(selectCartItems);
	const allowedToOrder: boolean = (allCartItems.data?.items?.length || 0) > 0;
	const sumProducts = () => {
		let sumProducts: number = 0;
		allCartItems.data?.items?.map(item => (sumProducts += item.quantity));
		return sumProducts;
	};

	const handleClearCart = async () => {
		if (!navigator.onLine) {
			toast.warning("شما آنلاین نیستید !");
			return;
		}
		const toastId = toast.loading("در حال انجام درخواست ... ", { autoClose: 10000 });
		const response = await clearCart();
		const { status } = response;
		toast.update(toastId, {
			isLoading: false,
			autoClose: 3000,
			type: status === 200 ? "success" : "error",
			render() {
				if (status == 200) {
					dispatch(clearCartContent(null));
				}
				return status === 200 ? "سبد خرید خالی شد ." : " با خطا مواجه شدیم :/ ";
			},
		});
	};

	return (
		<div className="relative group">
			{allCartItems.status === "successfully" && (
				<span className="badge absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 aspect-square ">
					{sumProducts()}
				</span>
			)}
			<Link href={"/user/cart"} className="btn btn-square btn-primary text-lg">
				<FaCartShopping />
			</Link>
			<div className="absolute top-14 left-0 flex flex-col w-96 h-auto min-h-80 bg-neutral-100 shadow-xl rounded-xl opacity-0 scale-y-0 group-hover:scale-y-100 group-hover:opacity-100 overflow-hidden transition-all duration-500 -translate-y-full group-hover:translate-y-0 delay-100">
				<div className="header w-full flex items-center justify-between p-3 bg-neutral-200">
					<span className="text-base font-semibold text-neutral-900">{sumProducts()}عدد کالا </span>
					<button className="btn btn-outline btn-secondary min-h-fit h-fit py-2" onClick={handleClearCart}>
						خالی کردن سبد خرید
					</button>
				</div>
				<div className="content grow max-h-[500px] overflow-y-auto">
					{Number(allCartItems.data?.items?.length) > 0 ? (
						<ul className="p-3 my-2">
							{allCartItems.data?.items?.map((productItem, index) => (
								<ProductListItem key={index} {...productItem} />
							))}
						</ul>
					) : (
						<div className="relative">
							<Image
								src={emptyCartImg.src}
								width={400}
								height={400}
								className="size-full select-none"
								alt="سبد خالی است ."
							/>
							<p className="text-xl font-semibold text-neutral-800 absolute bottom-3 block w-full text-center">
								سبد خرید خالی است .
							</p>
						</div>
					)}
				</div>
				<div className="footer w-full flex items-center justify-between p-3 bg-neutral-200">
					<div className="prices-wrapper flex flex-col gap-2 text-base font-semibold">
						<span className="sum-price text-neutral-800  flex items-center justify-between">
							<span className="text-lg">جمع :</span>
							{Number((allCartItems.data?.finalPrice || 0)?.toFixed(0))?.toLocaleString()} ت
						</span>
						<span className="finally-price text-primary-700 text-lg flex items-center justify-between">
							<span> با تخفیف :</span>
							{Number((allCartItems.data?.sumPrice || 0)?.toFixed(0))?.toLocaleString()} ت
						</span>
					</div>
					<button className="btn btn-primary" disabled={!allowedToOrder}>
						نهایی کردن خرید
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartButton;
