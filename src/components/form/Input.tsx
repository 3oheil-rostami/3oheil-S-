import React from "react";

interface Props {
	rightIcon?: React.ReactNode;
	leftIcon?: React.ReactNode;
	value?: string;
	onChange?: (value?: any) => any;
	className?: string;
	placeholder?: string;
	label?: string;
	errorHandling?: string;
	type?: "search" | "text" | "email" | "password" | "number" | "color";
	isDisabled?: boolean;
	min?: number;
	max?: number;
}

export default function Input({
	label,
	errorHandling,
	placeholder,
	className,
	onChange,
	value,
	leftIcon,
	rightIcon,
	type,
	isDisabled,
	min,
	max,
}: Props) {
	return (
		<div className={`flex flex-col gap-1 w-full`}>
			{label && <span className='text-slate-800 text-sm'>{label}</span>}
			<div
				className={`box flex gap-2 justify-between items-center bg-white px-3 py-2 rounded-lg w-full ${className}`}>
				{rightIcon && <span className='*:fill-slate-800'>{rightIcon}</span>}
				<input
					type={type}
					disabled={isDisabled}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					className='bg-transparent w-full outline-none border-none text-sm'
					min={min}
					max={max}
				/>
				{leftIcon && <span className='*:fill-slate-800 cursor-pointer'>{leftIcon}</span>}
			</div>
			{errorHandling && <span className='text-slate-900 text-sm'>{errorHandling}</span>}
		</div>
	);
}
