import React from "react";
import Logo from "@/../public/images/images.jpeg";
import Input from "./form/Input";
import Button from "./form/Button";

import { IoSearch } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";
export default function Navbar() {
	return (
		<div id='top' className='container-wrapper w-full h-24 px-2 flex items-center'>
			<div className='right-sec w-1/2 h-full flex justify-start items-center gap-3'>
				<div className='logo-wrapper bg-white h-full '>
					<Image
						src={Logo.src}
						alt='Logo Cosmatic'
						width={1200}
						height={96}
						className='h-full w-auto object-cover'
					/>
				</div>
				<div className='search-wrapper w-full'>
					<Input
						placeholder='کالا مورد نظرت رو اینجا بنویس ...'
						leftIcon={<IoSearch />}
						type='search'
						className='bg-pink-50 h-12 shadow-lg '
					/>
				</div>
			</div>
			<div className='left-sec w-1/2 flex justify-end items-center gap-2'>
				<Button colorScheme='primary' variant='outline' size='md' typeBtn='text'>
					<span className='flex items-center gap-2'>
						ورود / ثبت نام <IoIosLogIn />
					</span>
				</Button>
				<Button typeBtn='icon' variant='fill' colorScheme='primary' size='md'>
					<IoCartOutline />
				</Button>
			</div>
		</div>
	);
}
