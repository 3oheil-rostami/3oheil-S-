import React from "react";
import MainLayout from "./MainLayout";
import Link from "next/link";

export default function LoginLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<MainLayout>
			<div className='h-screen w-full md:flex'>
				<div className='relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-purple-900 to-secondary-600 px-7 justify-around items-center hidden'>
					<div>
						<h1 className='text-white font-bold text-4xl font-sans'>دیون</h1>
						<p className='text-white mt-3 mr-2'>
							محبوترین ها و بهترین کیفیت ها رو میخوای ؟ پس با ما همراه شو.🤗
						</p>
						<button
							type='submit'
							className='block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2 mr-2'>
							<Link href='/'>درباره ما</Link>
						</button>
					</div>
					<span className='absolute -bottom-32 -left-40 size-80 border-4 rounded-full border-opacity-30 border-t-8'></span>
					<span className='absolute -bottom-40 -left-20 size-80 border-4 rounded-full border-opacity-30 border-t-8'></span>
					<span className='absolute -top-40 -right-0 size-80 border-4 rounded-full border-opacity-30 border-b-8'></span>
					<span className='absolute -top-20 -right-20 size-80 border-4 rounded-full border-opacity-30 border-b-8'></span>
				</div>
				<div className='flex md:w-1/2 h-dvh justify-center py-10 items-center bg-white max-md:bg-gradient-to-tr max-md:from-purple-900 max-md:to-secondary-600'>
					{children}
				</div>
			</div>
		</MainLayout>
	);
}
