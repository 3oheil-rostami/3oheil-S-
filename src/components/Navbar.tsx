"use client";
import React, { memo, useEffect, useState } from "react";
import Logo from "@/../public/images/images.jpeg";
import Input from "./form/Input";
import Button from "./form/Button";

import { IoSearch } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { Provider, useSelector } from "react-redux";
import { store } from "@/app/store";
import CartButton from "./CartButton";
import { fetchProductsInCart } from "@/reducers/cart";

const Navbar = () => {
	useEffect(() => {
		store.dispatch(fetchProductsInCart());
	}, []);
	return (
		<Provider store={store}>
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
						<Input
							placeholder="کالا مورد نظرت رو اینجا بنویس ..."
							leftIcon={<IoSearch />}
							type="search"
							className="bg-pink-50 h-12 shadow-lg "
						/>
					</div>
				</div>
				<div className="left-sec w-1/2 flex justify-end items-center gap-2">
					<Button colorScheme="primary" variant="outline" size="lg" typeBtn="text">
						<Link href={"/auth/login"} className="flex items-center gap-2">
							ورود / ثبت نام <IoIosLogIn />
						</Link>
					</Button>
					<CartButton />
				</div>
			</div>
		</Provider>
	);
};

export default memo(Navbar);
