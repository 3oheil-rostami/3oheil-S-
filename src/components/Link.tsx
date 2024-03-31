import NextLink from "next/link";
import React from "react";

interface Props {
	children?: string | any;
	icon?: undefined | any;
	href?: any;
	className?: string;
}

export default function Link({ children, icon, href, className }: Props) {
	return (
		<NextLink href={href} className={`flex gap-1 items-center ${className}`}>
			{icon && <span>{icon}</span>}
			{children && <span>{children}</span>}
		</NextLink>
	);
}
