import { Links } from "@/types";
import Link from "next/link";
import React from "react";

export default function AccordionContent({ links }: Links) {
	return (
		<ul className='pt-2 ps-2'>
			{links.map(link => (
				<li key={link.id}>
					<Link
						className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 hover:text-neutral-900 rounded-lg hover:bg-gray-200/50'
						href={link.href}>
						<span>●</span>
						<span>{link.title}</span>
					</Link>
				</li>
			))}
		</ul>
	);
}
