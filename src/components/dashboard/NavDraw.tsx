import Image from "next/image";
import React from "react";
import logoImage from "@/../public/images/logo.svg";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import LinkAccordion from "../LinkAccordion";
import NavDrawLink from "./NavDrawLink";
import { BsPersonVideo3 } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import Button from "../form/Button";
import { RiHome3Fill, RiLogoutBoxLine } from "react-icons/ri";

export default function NavDraw() {
	return (
		<div className='h-dvh w-80 bg-neutral-100 py-5 px-2 linear-gradient-primary flex flex-col justify-between'>
			<div className=''>
				<div className='logo-wrapper mb-6'>
					<Image src={logoImage} width={200} height={100} alt='logo' className='block mx-auto' />
				</div>
				<ul className='px-2 flex flex-col gap-3'>
					<NavDrawLink icon={<IoHomeOutline />} title='خانه' link='/dashboard' />
					<LinkAccordion
						title='محصولات'
						links={[
							{ href: "/dashboard/new-product", id: "2", title: "ایجاد محصول جدید" },
							{ href: "/dashboard/categories", id: "1", title: "دسته بندی ها" },
							{ href: "/dashboard/products", id: "3", title: "همه محصولات" },
						]}
					/>
					<NavDrawLink title='مشتریان' icon={<BsPersonVideo3 />} link='/dashboard/customers' />
					<NavDrawLink title='سفارشات' icon={<FiShoppingCart />} link='/dashboard/orders' />
				</ul>
			</div>
			<div className='flex flex-col gap-3'>
				<Button colorScheme='secondary' variant='fill'>
					<Link href={"/"} className='flex items-center gap-2'>
						<RiHome3Fill className='text-xl' />
						بازگشت به وبسایت
					</Link>
				</Button>
				<Button colorScheme='secondary' variant='outline'>
					<RiLogoutBoxLine className='text-xl' />
					خروج از حساب کاربری
				</Button>
			</div>
		</div>
	);
}
