import React from "react";
import Input from "../form/Input";
import NotificationButton from "../NotificationButton";
import { MdOutlineDarkMode } from "react-icons/md";
import { RiDirectionLine } from "react-icons/ri";
import MyAvatar from "../MyAvatar";
import IconButton from "../form/IconButton";

export default function TopBar() {
	return (
		<div className="container-wrapper h-fit backdrop-blur-sm bg-neutral-200/15 flex justify-center items-center py-[20px!important] sticky top-0 z-[999]">
			<div className="w-full h-fit bg-white border-2 border-neutral-300/50 rounded-lg flex justify-between items-center p-3">
				<div className="search-input-wrapper">
					<Input placeholder="جستجو کنید ..." className="bg-transparent" />
				</div>
				<div className="control-wrapper flex items-center justify-end gap-2 *:text-2xl *:font-bold *:text-neutral-800 ">
					<IconButton colorScheme="tertiary" size="lg" variant="text" isRounded>
						<MdOutlineDarkMode />
					</IconButton>
					<IconButton colorScheme="tertiary" size="lg" variant="text" isRounded>
						<RiDirectionLine />
					</IconButton>
					<NotificationButton count={0} className="text-2xl font-bold text-neutral-800" />
					<span className="mr-2">
						<MyAvatar size="md" isBadge status="active" name="" />
					</span>
				</div>
			</div>
		</div>
	);
}
