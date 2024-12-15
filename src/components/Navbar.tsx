"use client";
import Logo from "@/../public/images/images.jpeg";
import { store } from "@/app/store";
import { fetchProductsInCart } from "@/reducers/cart";
import { fetchUserInformation, getUserInformation, isUserLoggedIn } from "@/reducers/user";
import Image from "next/image";
import Link from "next/link";
import { memo, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { TbLogin2 } from "react-icons/tb";
import { Provider, useSelector } from "react-redux";
import CartButton from "./CartButton";
import Input2 from "./form/Input2";

const NavbarContent = () => {
	const isLoggedIn: boolean = useSelector(isUserLoggedIn);
	const userInfo = useSelector(getUserInformation);
	useEffect(() => {
		store.dispatch(fetchProductsInCart());
		store.dispatch(fetchUserInformation());
	}, []);
	return (
		<div id="top" className="container-wrapper w-full h-24 px-2 flex items-center z-[99999999]">
			<div className="right-sec w-1/2 h-full flex justify-start items-center gap-3">
				<div className="logo-wrapper bg-white h-full ">
					<Image
						src={Logo.src}
						alt="Logo Cosmatic"
						width={1200}
						height={96}
						className="h-full w-auto object-cover"
					/>
				</div>
				<div className="search-wrapper w-full">
					<Input2
						placeholder="کالا مورد نظرت رو اینجا بنویس ..."
						button={<button className="btn btn-square h-full min-h-full btn-outline btn-secondary glass"><IoSearch /></button>}
						type="search"
						className="grow"
						containerClassName="*:!pl-0"
					/>
				</div>
			</div>
			<div className="left-sec w-1/2 flex justify-end items-center gap-2">
				{isLoggedIn ? (
					<Link className="btn btn-outline btn-primary" href={"/user"}>
						<FaUser className="text-2xl" />
						<span>{userInfo?.name + " " + userInfo?.family}</span>
					</Link>
				) : (
					<Link href={"/auth/login"} className="btn btn-outline btn-primary">
						<span>ورود / ثبت نام</span>
						<TbLogin2 className="text-2xl" />
					</Link>
				)}
				<CartButton />
			</div>
		</div>
	);
};

const Navbar = () => (
	<Provider store={store}>
		<NavbarContent />
	</Provider>
);

export default memo(Navbar);
