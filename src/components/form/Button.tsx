"use client";
import { ButtonProps } from "@/types";
import { useMemo } from "react";

export default function Button({
	typeBtn = "text",
	variant = "fill",
	colorScheme = "primary",
	isDisabled,
	type = "button",
	size = "md",
	className,
	isRounded,
	children,
	...reset
}: ButtonProps<HTMLButtonElement>) {
	const styles = useMemo(() => {
		let classNames: string[] = [];
		classNames.push(`btn-${variant}-${colorScheme}`);
		isRounded ? classNames.push("rounded-full") : classNames.push("rounded-md");
		size === "2xs"
			? classNames.push("h-6", "text-xs")
			: size === "xs"
			? classNames.push("h-10", "text-base")
			: size === "sm"
			? classNames.push("h-11", "text-base")
			: size === "md"
			? classNames.push("h-12", "text-base")
			: size === "lg"
			? classNames.push("h-[52px]", "text-lg")
			: size === "xl"
			? classNames.push("h-14", "text-lg")
			: classNames.push("h-[60px]", "text-lg");
		return classNames.join(" ");
	}, [variant, colorScheme, isRounded, size]);
	return (
		<button
			type={type}
			disabled={isDisabled}
			{...reset}
			className={`flex justify-center items-center gap-2 outline-none px-4 py-2 font-medium transition-all duration-300 ${styles} ${className}`}>
			{children}
		</button>
	);
}
