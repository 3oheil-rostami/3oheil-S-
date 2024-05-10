import { FaShoppingCart, FaUserEdit } from "react-icons/fa";
import MyAvatar from "../MyAvatar";
import IconButton from "../form/IconButton";
import NavDrawLink from "../dashboard/NavDrawLink";
import { SiCodefactor } from "react-icons/si";
import { MdOutlineFavorite } from "react-icons/md";
import Link from "next/link";

export default function NavDraw() {
	return (
		<div className="h-full w-80 flex flex-col gap-3">
			<div className="border-2 rounded-xl p-6 flex justify-between items-center">
				<Link href={"/user"} className="flex items-center gap-2">
					<MyAvatar size="md" name="Za" />
					<span className="text-neutral-600 text-xl font-bold">09142960913</span>
				</Link>
				<Link href={"/user/edit"}>
					<IconButton colorScheme="primary" size="lg" variant="text">
						<FaUserEdit />
					</IconButton>
				</Link>
			</div>
			<div className="border-2 rounded-xl p-6 flex flex-col gap-2">
				<NavDrawLink icon={<FaShoppingCart />} link="/user/cart" title="سبد خرید" />
				<NavDrawLink icon={<SiCodefactor />} link="/user/orders" title="سفارشات" />
				<NavDrawLink icon={<MdOutlineFavorite />} link="/user/favorites" title="علاقه مندی ها" />
			</div>
		</div>
	);
}
