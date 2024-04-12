import { NavDrawLinkProps } from "@/types";
import Link from "next/link";

const NavDrawLink = ({ title, link, icon, className = "" }: NavDrawLinkProps) => {
	return (
		<li className={`border-2 border-neutral-200 rounded-md text-base list-none ${className}`}>
			<Link href={link} className="flex items-center gap-2 text-neutral-800 hover:text-neutral-950">
				<span className="p-2 text-xl rounded-full">{icon}</span>
				<span className="mt-1">{title}</span>
			</Link>
		</li>
	);
};

export default NavDrawLink;
