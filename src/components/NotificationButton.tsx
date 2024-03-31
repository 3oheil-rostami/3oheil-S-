"use client";
import { NotificationButtonProps } from "@/types";
import React, { useEffect, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import Button from "./form/Button";
import { MdClose } from "react-icons/md";
import IconButton from "./form/IconButton";

export default function NotificationButton({
	count,
	className,
	...reset
}: NotificationButtonProps) {
	const [notiCount, setNotiCount] = useState<number>(0);
	const [showContent, setShowContent] = useState<boolean>(false);

	useEffect(() => {
		setNotiCount(count ?? 0);
	}, [count]);

	useEffect(() => {}, []);

	const showNotificationsHandler = () => {
		setShowContent(!showContent);
	};

	return (
		<div className='relative'>
			<Button
				// TODO #icon_button
				colorScheme='tertiary'
				variant='text'
				type='button'
				size='sm'
				isRounded
				className={`relative ${className}`}
				onClick={showNotificationsHandler}
				{...reset}>
				<IoMdNotificationsOutline />
				{!!notiCount && (
					<div className='badge absolute left-1 top-1 px-1 py-px bg-secondary-300 text-xs rounded-full font-bold text-white'>
						{notiCount}
					</div>
				)}
			</Button>
			{showContent && (
				<div
					className={`contents-noti absolute -bottom-3 left-1/2 translate-y-full -translate-x-1/2 w-80 bg-neutral-200 rounded-lg`}>
					<div className='header h-fit border-b border-neutral-400/50 px-3 py-2 flex justify-between items-center'>
						<span className='text-base text-neutral-800 font-bold'>اعلانات</span>
						<div className='flex items-center gap-2'>
							<Button size='2xs' colorScheme='tertiary' variant='text'>
								پاک کردن همه
							</Button>
							<IconButton
								colorScheme='tertiary'
								variant='outline'
								size='sm'
								isRounded
								onClick={() => setShowContent(false)}>
								<MdClose />
							</IconButton>
						</div>
					</div>
					<ul className='text-sm p-2 flex flex-col gap-1 font-medium'>
						{Array(8)
							.fill(9)
							.map((_, index) => (
								<li
									className='py-1 p-2 border-2 border-neutral-300/70 rounded-sm hover:scale-105 hover:bg-neutral-300 transition-all'
									key={index}>
									اعلان شماره {index}
								</li>
							))}
					</ul>
				</div>
			)}
		</div>
	);
}
