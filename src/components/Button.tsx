import React, { useMemo } from "react";

interface Props {
	typeBtn: "icon" | "text";
	variant: "fill" | "outline" | "text";
	colorScheme: "primary" | "secondary" | "thready";
	title?: string | any;
	isDisabled?: boolean;
	type?: "button" | "submit" | "reset";
	reset?: React.ButtonHTMLAttributes<HTMLButtonElement>;
	size?: "sm" | "md" | "lg";
	onClick?(data: any): any;
}

export default function Button({
	typeBtn = "text",
	variant,
	colorScheme,
	title,
	isDisabled,
	type = "button",
	size = "md",
	onClick,
	...reset
}: Props) {
	const styles = useMemo(() => {
		let classNames: string[] = [];

		// typeBtn
		typeBtn === "text" && classNames.push("btn-text");

		//size
		if (typeBtn === "icon")
			size === "sm"
				? classNames.push("size-11", "text-xl")
				: size === "md"
				? classNames.push("size-12", "text-xl")
				: size === "lg" && classNames.push("size-[52px]", "text-2xl");
		else
			size === "sm"
				? classNames.push("h-11", "text-xl")
				: size === "md"
				? classNames.push("h-12", "text-xl")
				: size === "lg" && classNames.push("h-[52px]", "text-2xl");

		//  variant
		if (variant === "fill") colorScheme === "primary" && classNames.push("btn-fill-primary");
		else if (variant === "outline")
			colorScheme === "primary" && classNames.push("btn-outline-primary");
		else if (variant === "text") classNames.push("btn-text-variant");

		return classNames.join(" ");
	}, [size, typeBtn]);
	return (
		<button
			type={type}
			disabled={isDisabled}
			{...reset}
			onClick={onClick}
			className={`flex justify-center items-center outline-none font-medium transition-all duration-300 rounded-md ${styles}`}>
			{title}
		</button>
	);
}
