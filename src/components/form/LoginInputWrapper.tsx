"use client";
import { ReactNode } from "react";

interface LoginInputProps {
	icon: ReactNode;
	children: ReactNode;
	errorMessage?: string;
}

const LoginInputWrapper = ({ icon, errorMessage, children }: LoginInputProps) => {
	return (
		<div className='mb-4'>
			<div className='flex items-center border-2 py-2 px-3 rounded-2xl *:last-of-type:bg-transparent *:text-neutral-800'>
				{icon}
				{children}
			</div>
			{!!errorMessage && (
				<p className='mt-2 text-xs font-bold text-red-600 bg-red-100 py-1 px-2 rounded-md'>
					{errorMessage}
				</p>
			)}
		</div>
	);
};

export default LoginInputWrapper;
