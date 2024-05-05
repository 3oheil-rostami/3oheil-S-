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
		<div className={`block mb-4 ${isDisabled ? "opacity-40" : ""}`}>
			<span
				className={`flex items-center border-2 py-2 px-3 rounded-2xl *:last-of-type:bg-transparent *:text-neutral-800 min-w-fit ${
					!!errorMessage ? "border-red-600" : ""
				}`}>
				<span>{icon}</span>
				<span className="grow *:w-full">{children}</span>
			</span>
			{!!errorMessage && (
				<span className="block mt-2 text-xs font-bold text-red-600 bg-red-100 py-1 px-2 rounded-md">
					{errorMessage}
				</span>
			)}
		</div>
	);
};

export default LoginInputWrapper;
