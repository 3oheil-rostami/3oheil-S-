interface KeyValue {
	key: string;
	value: string | number;
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
	brand: string | { $oid: string } | null;
	subCategorie: string | { $oid: string };
	likes: number;
	view: number;
	buyCount: number;
	avgPrice: number;
	avgOff: number;
	angAvailable: number;
	score: number;
	commentScoreSum: number;
	commentCount: number;
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
	replays: ReplayComment[];
	score: number;
	replay: string;
	isAccepted: boolean;
	like: { user: string; _id: string }[];
	disLike: { user: string; _id: string }[];
	isLiked: boolean;
	isDisliked: boolean;
}

interface Brand {
	_id: string;
	name: string;
	enName: string;
	brandPic: string;
}

interface CategoryPage {
	products: Product[];
	categories: Category[];
	address: KeyValue[];
}

interface ProductPage {
	product: Product;
	address: KeyValue[];
	brand: Brand;
}

interface CartItem {}
interface Cart {}

export {
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
};
