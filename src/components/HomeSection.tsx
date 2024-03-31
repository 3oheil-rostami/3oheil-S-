import React, { ReactNode } from "react";

interface Props {
	title?: string;
	className?: string;
	children: ReactNode;
	leftBtn?: ReactNode;
}

export default function HomeSection({ title, className, leftBtn, children }: Props) {
	return (
		<div className='container-wrapper w-full py-2'>
			<div className='title-wrapper py-3 flex items-center justify-between'>
				<h2 className='text-xl font-bold'>{title}</h2>
				{leftBtn}
			</div>
			<div className={className}>{children}</div>
		</div>
	);
}
