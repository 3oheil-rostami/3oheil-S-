import { ButtonHTMLAttributes, ReactNode } from "react";
import {
  Brand,
  Color,
  Product,
  ProductsInCart,
  UserInformation,
} from "./apiTypes";
import { URL } from "url";

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
  isLiked: boolean;
  product?: Product;
}
interface ColorsProductsProps {
  colors: Color[];
}

interface LinkAccordionProps {
  title: string;
  links?: Link[];
  subAccordions?: {
    title: string;
    href: string;
    subLinks: Link[];
    isHasArrowIcon?: boolean;
  }[];
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
  incrementAction?: () => any;
  decrementAction?: () => any;
  colorId: string;
  accessToActions: boolean;
  product?: Product;
  size: "sm" | "lg";
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

interface CartReducerStatesProps {
  data: null | ProductsInCart;
  error: any;
  status: "idle" | "pending" | "successfully" | "failed";
}
interface UserReducerStatesProps {
  data: null | undefined | UserInformation;
  error: any;
  status: "idle" | "pending" | "successfully" | "failed";
}

interface ProductReducerStatesProps {
  error: unknown;
  sortBy?: SortItems;
  price?: RangeNumber;
  isAvailable?: boolean;
  brands?: string[];
}

type SortItems =
  | "cheapest"
  | "expensive"
  | "new"
  | "off"
  | "popular"
  | "view"
  | "mostBuy"
  | undefined;

interface SortItemsSearchParams {
  sort: SortItems;
  price?: RangeNumber;
  isAvailable?: boolean;
  brands?: string[];
}

type RangeNumber = { from: number; until: number };

type SearchParams = { [key: string]: string | string[] | boolean | undefined };

type CategorySearchParams = {
  isAvailable: boolean;
  prices: number[]
  sort: SortItems;
  brands: string[]
};

type CategorySearchParamsOptional = Partial<CategorySearchParams>

export type CategoryFilters = {
  sort: SortItems;
  brands: string[];
  isAvailable: boolean;
  price: [number, number];
}
export type OptionalCategoryFilters = Partial<CategoryFilters>

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
  type CartReducerStatesProps,
  type UserReducerStatesProps,
  type ProductReducerStatesProps,
  type SortItemsSearchParams,
  SortItems,
  RangeNumber,
  SearchParams,
  CategorySearchParams
};
