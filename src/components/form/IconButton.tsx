import { IconButtonProps } from "@/types";

const IconButton = ({
	colorScheme,
	size,
	variant,
	isDisabled,
	isRounded,
	children,
	...reset
}: IconButtonProps<HTMLButtonElement>) => {
	enum BoxSize {
		sm = 32,
		md = 44,
		lg = 52,
	}
	enum Padding {
		sm = "4px",
		md = "8px",
		lg = "12px",
	}
	return (
		<button
			style={{ width: `${BoxSize[size]}px`, height: `${BoxSize[size]}px`, padding: Padding[size] }}
			className={`flex justify-center items-center text-[200%] btn-${variant}-${colorScheme} 
            ${isRounded ? "rounded-full" : "rounded-lg"}`}
			{...reset}>
			{children}
		</button>
	);
};

export default IconButton;
