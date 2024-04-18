"use client";
import { ReactNode } from "react";

interface LoginInputProps {
	icon: ReactNode;
	children: ReactNode;
	errorMessage?: string;
	isDisabled?: boolean;
}

const LoginInputWrapper = ({ icon, errorMessage, isDisabled, children }: LoginInputProps) => {
	return (
		<div className={`mb-4 ${isDisabled ? "opacity-40" : ""}`}>
			<div
				className={`flex items-center border-2 py-2 px-3 rounded-2xl *:last-of-type:bg-transparent *:text-neutral-800 ${
					!!errorMessage ? "border-red-600" : ""
				}`}>
				{icon}
				{children}
			</div>
			{!!errorMessage && (
				<p className="mt-2 text-xs font-bold text-red-600 bg-red-100 py-1 px-2 rounded-md">
					{errorMessage}
				</p>
			)}
		</div>
	);
};

export default LoginInputWrapper;
