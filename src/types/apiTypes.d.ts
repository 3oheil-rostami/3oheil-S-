interface BasePropsAPI {
  readonly _id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly __v: number;
}

interface KeyValue<T = string | number> {
  key: string;
  value: T;
}

interface Color {
  colorName: string;
  colorCode?: number;
  available: number;
  price: number;
  off: number;
  _id: string;
}

interface SubCategory {
  _id: string;
  name: string;
  icon: string;
  pic: string;
  info: string;
  href: string;
  parent: string;
  level: number;
  subs?: SubCategory[];
}

interface Category {
  _id: string;
  name: string;
  icon: string;
  pic: string;
  info: string;
  href: string;
  level: number;
  subs?: SubCategory[];
}

interface Product {
  _id: string;
  name: string;
  enName: string;
  intro: string;
  property: string[];
  info: KeyValue[];
  productCover: string;
  productPics: string[];
  colors: Color[];
  brand: Brand;
  subCategories: string | { $oid: string };
  likes: number;
  view: number;
  buyCount: number;
  avgPrice: number;
  avgOff: number;
  angAvailable: number;
  score: number;
  commentScoreSum: number;
  commentCount: number;
  howUse: string;
}
interface ReplayComment {
  _id: string;
  body: string;
  user: string;
  replay: string;
  isAccepted: boolean;
  like: { user: string; _id: string }[];
  disLik: { user: string; _id: string }[];
  isLiked: boolean;
  isDisliked: boolean;
  replies: ReplayComment[];
}

interface Comment {
  _id: string;
  body: string;
  user: string;
  product: string;
  replies: ReplayComment[];
  score: number;
  isAccepted: boolean;
  like: { user: string; _id: string }[];
  disLike: { user: string; _id: string }[];
  isLiked: boolean;
  isDisLiked: boolean;
}

interface Brand {
  _id: string;
  name: string;
  enName: string;
  brandPic: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface CategoryPage {
  subs: Product[];
  categories: Category[];
  address: KeyValue[];
}

interface ProductPage {
  product: Product;
  address: KeyValue[];
  brand: Brand;
}

interface ProductsInCart {
  user?: string;
  items?: ProductItemInCart[];
  _id?: string;
  sumPrice: number;
  finalPrice: number;
}

interface ProductItemInCart {
  productId: Product;
  colorId: Color;
  quantity: number;
  _id?: string;
}

interface CartItem {}
interface Cart {}

interface UserInformation {
  _id: string;
  number: string;
  role: "user" | "admin";
  name: string;
  family: string;
  email: string;
  isBanned: false;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface FavoritesPageData extends BasePropsAPI {
  _id: string;
  userId: string;
  productId: Product[];
}

export {
  type BasePropsAPI,
  type SubCategory,
  type Category,
  type Product,
  type ReplayComment,
  type Comment,
  type CartItem,
  type Cart,
  type Brand,
  type KeyValue,
  type CategoryPage,
  type ProductPage,
  type Color,
  type ProductsInCart,
  type ProductItemInCart,
  type UserInformation,
  type FavoritesPageData,
};
