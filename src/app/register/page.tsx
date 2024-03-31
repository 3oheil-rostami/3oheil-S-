// "use client";
import React from "react";
import LoginLayout from "../LoginLayout";
import GetPhoneNumber from "./GetPhoneNumber";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import Button from "@/components/form/Button";
import Link from "next/link";
import { httpService } from "@/core/http-service";

export default function Register() {
	let registerStep: "getPhoneNumber" | "getCode" | "getAllData" = "getPhoneNumber";

	return (
		<LoginLayout>
			{/* {registerStep === "getPhoneNumber" ? (
				<GetPhoneNumber />
				) : registerStep === "getCode" ? (
					<></>
					) : (
						<></>
					)} */}
			{/* <GetPhoneNumber /> */}
			<form className='bg-white px-5 py-10 rounded-2xl'>
				<h1 className='text-gray-800 font-bold text-2xl mb-1'>سلام به روی ماهتون✨</h1>
				<p className='text-sm font-normal text-gray-600 mb-7'>
					خوشحالیم که شمارو کنار خودمون میبینیم .
				</p>
				<p className='text-sm font-bold text-gray-600 mb-3 mr-2'>
					لطفا اطلاعات فرم زیر رو پر کنید.
				</p>
				<div className='flex items-center border-2 py-2 px-3 rounded-2xl mb-4'>
					<IoPersonSharp className='text-neutral-600' />
					<input
						className='pr-2 outline-none border-none'
						type='text'
						name=''
						id=''
						placeholder='نام'
					/>
				</div>
				<div className='flex items-center border-2 py-2 px-3 rounded-2xl mb-4'>
					<BsFillPersonLinesFill className='text-neutral-600' />
					<input
						className='pr-2 outline-none border-none'
						type='text'
						name=''
						id=''
						placeholder='نام خانوادگی'
					/>
				</div>
				<div className='flex items-center border-2 py-2 px-3 rounded-2xl mb-4'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5 text-gray-400'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4'
						/>
					</svg>
					<input
						className='pr-2 outline-none border-none'
						type='text'
						name=''
						id=''
						placeholder='نام کاربری'
					/>
				</div>
				<div className='flex items-center border-2 py-2 px-3 rounded-2xl mb-4'>
					<IoMdMail className='text-neutral-600 text-lg' />
					<input
						className='pr-2 outline-none border-none'
						type='email'
						name=''
						id=''
						placeholder='ایمیل'
					/>
				</div>
				<div className='flex items-center border-2 py-2 px-3 rounded-2xl mb-4'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5 text-gray-400'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path
							fill-rule='evenodd'
							d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
							clip-rule='evenodd'
						/>
					</svg>
					<input
						className='pr-2 outline-none border-none'
						type='password'
						name=''
						id=''
						placeholder='رمز عبور'
					/>
				</div>
				<div className='flex items-center border-2 py-2 px-3 rounded-2xl'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5 text-gray-400'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path
							fill-rule='evenodd'
							d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
							clip-rule='evenodd'
						/>
					</svg>
					<input
						className='pr-2 outline-none border-none'
						type='password'
						name=''
						id=''
						placeholder='تکرار رمز عبور'
					/>
				</div>
				<Button
					colorScheme='secondary'
					variant='fill'
					type='submit'
					size='sm'
					// onClick={x}
					className='w-full bg-secondary-600 mt-4 py-2 rounded-[1rem!important] text-white font-semibold mb-2'>
					ثبت نام
				</Button>
				<p className='text-base font-normal text-neutral-800 px-2'>
					<span>قبلا ثبت نام کردید پس </span>
					<Link href={"/login"} className='font-bold hover:text-primary-700'>
						ورود
					</Link>
					<span> را کلیک کنید.</span>
				</p>
			</form>
		</LoginLayout>
	);
}
