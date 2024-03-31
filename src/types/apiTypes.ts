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
	info: { key: string; value: string | number }[];
	productCover: string;
	productPics: string[];
	price: number;
	off: number;
	available: number;
	colors: string[];
	brand: string;
	subCategorie: string;
	likes: number;
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
};
