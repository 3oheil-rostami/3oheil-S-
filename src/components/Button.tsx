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
}

export default function Button({
	typeBtn = "text",
	variant,
	colorScheme,
	title,
	isDisabled,
	type = "button",
	size = "md",
	...reset
}: Props) {
	const styles = useMemo(() => {
		let classNames: string[] = [];
		let color: "purple" | "pink" | "slate" =
			colorScheme === "primary" ? "purple" : colorScheme === "secondary" ? "pink" : "slate";
		// typeBtn
		typeBtn === "text" && classNames.push("w-fit", "px-4", "py-1", "shadow-md");
		//size
		size === "sm"
			? classNames.push("size-11", "text-xl")
			: size === "md"
			? classNames.push("size-12", "text-xl")
			: classNames.push("size-[52px]", "text-2xl");
		//  variant
		variant === "fill"
			? classNames.push("border-none", `bg-${color}-800`, "text-white", "shadow-md")
			: variant === "outline"
			? classNames.push(
					"border-slate-300",
					`hover:border-${color}-800`,
					"border-solid",
					"border-2",
					"bg-white",
					"text-slate-800",
					"hover:text-slate-950"
			  )
			: classNames.push(
					"border-none",
					"text-slate-800",
					"hover:text-slate-950",
					"bg-transparent",
					"shadow-md",
					"hover:shadow-lg",
					"active:shadow-sm"
			  );

		return classNames.join(" ");
	}, [size, typeBtn]);
	return (
		<button
			type={type}
			disabled={isDisabled}
			{...reset}
			className={`flex justify-center items-center hover:brightness-125 active:brightness-90 outline-none transition-all duration-300 rounded-md ${styles}`}>
			{title}
		</button>
	);
}
