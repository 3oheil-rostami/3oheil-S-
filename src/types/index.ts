import { ButtonHTMLAttributes, ReactNode } from "react";
import { Brand, Color } from "./apiTypes";

interface Link {
	id: string | number;
	title: string;
	href: string;
}
interface Links {
	links: Link[];
}
interface BreadcrumbLinks {
	links: Array<Link>;
}
interface ProductPageProps {
	breadcrumbLinks: BreadcrumbLinks;
}
interface ProductImageModalProps {
	isShow: boolean;
	images:
		| {
				src: string;
				width?: number;
				height?: number;
				blurWidth?: number;
				blurHeight?: number;
		  }[]
		| string[];
}
interface ProductImageSliderProps {
	autoPlay?: boolean;
	delay?: number;
	duration?: number;
	images:
		| {
				src: string;
				width?: number;
				height?: number;
				blurWidth?: number;
				blurHeight?: number;
				alt?: string;
		  }[]
		| string[];
}
interface CardAddToCartProps {
	brand: Brand;
	price: number;
	off?: number;
	isLiked?: boolean;
}
interface ColorsProductsProps {
	colors: Color[];
}

interface LinkAccordionProps {
	title: string;
	links?: Link[];
	subAccordions?: { title: string; href: string; subLinks: Link[]; isHasArrowIcon?: boolean }[];
}

interface ModalLayoutProps {
	isShow: boolean;
	onConfirmCLick?(): any;
	onCancelClick?(): any;
	typeModal: "success" | "info" | "warning" | "error";
	size: "sm" | "md" | "lg";
	title: string | ReactNode;
	description?: string | ReactNode;
	confirmButtonText: string | ReactNode;
	cancelButtonText?: string | ReactNode;
}

interface ButtonProps<T> extends ButtonHTMLAttributes<T> {
	typeBtn?: "icon" | "text";
	variant?: "fill" | "outline" | "text";
	colorScheme: "primary" | "secondary" | "tertiary";
	children?: string | ReactNode;
	isDisabled?: boolean;
	isRounded?: boolean;
	reset?: any;
	size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}
interface IconButtonProps<T> extends ButtonHTMLAttributes<T> {
	variant?: "fill" | "outline" | "text";
	colorScheme: "primary" | "secondary" | "tertiary";
	children?: string | ReactNode;
	isDisabled?: boolean;
	isRounded?: boolean;
	size: "sm" | "md" | "lg";
	reset?: any;
}

interface AddToCartButtonProps<T> extends ButtonHTMLAttributes<T> {
	count: number;
	incrementAction?: () => any;
	decrementAction?: () => any;
	productId: string | number;
	colorId: string | number;
}

interface NotificationButtonProps {
	count?: number;
	reset?: any;
	className?: string;
}

interface AvatarProps {
	name?: string;
	srcImage?: string;
	isBadge?: boolean;
	altValue?: string;
	status?: "active" | "lase-seen-recently" | "not-active";
	size: "xs" | "sm" | "md" | "lg" | "xl";
}

interface NavDrawLinkProps {
	icon: ReactNode;
	title: string;
	link: string;
	className?: string;
}

export {
	type Link,
	type Links,
	type BreadcrumbLinks,
	type ProductPageProps,
	type ProductImageModalProps,
	type ProductImageSliderProps,
	type CardAddToCartProps,
	type ColorsProductsProps,
	type LinkAccordionProps,
	type ModalLayoutProps,
	type ButtonProps,
	type IconButtonProps,
	type AddToCartButtonProps,
	type NotificationButtonProps,
	type AvatarProps,
	type NavDrawLinkProps,
};
