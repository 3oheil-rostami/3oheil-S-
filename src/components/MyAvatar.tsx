"use client";
import { AvatarProps } from "@/types";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";

export default function MyAvatar({ name, srcImage, altValue, size, isBadge, status }: AvatarProps) {
	const [bgColor, setBgColor] = useState<string>("");
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const colors: string[] = [
		"#007AB8",
		"#179848",
		"#0063D1",
		"#008CC9",
		"#B83280",
		"#6B46C1",
		"#B7791F",
		"#C53030",
		"#4A5568",
	];
	enum sizes {
		xs = 1.5,
		sm = 2,
		md = 3,
		lg = 4,
		xl = 6,
	}
	enum boxSize {
		xs = 24,
		sm = 32,
		md = 48,
		lg = 64,
		xl = 80,
	}

	useEffect(() => {
		setBgColor(colors[Math.floor(Math.random() * colors.length)]);
	}, [colors]);

	return (
		<div
			className="relative rounded-full"
			style={{ width: `${boxSize[size]}px`, height: `${boxSize[size]}px` }}>
			{!!srcImage && (
				<Image
					src={srcImage}
					width={boxSize[size]}
					height={boxSize[size]}
					alt={altValue || "person avatar"}
				/>
			)}
			{!srcImage && (
				<span
					className="w-full h-full flex justify-center items-center text-[100%] font-medium text-white rounded-full"
					style={{ background: bgColor, fontSize: `calc(${sizes[size]}rem / 2.5)` }}>
					{!!name && name.toUpperCase().slice(0, 2)}
					{!name && <BsFillPersonFill style={{ fontSize: "calc(1em + 5px)" }} />}
				</span>
			)}
			{isBadge && status && (
				<span
					className={`badge size-2 rounded-full absolute bottom-1 right-1 ${
						status === "active"
							? "bg-green-600"
							: status === "lase-seen-recently"
							? "bg-orange-600"
							: "bg-red-600"
					}`}></span>
			)}
		</div>
	);
}
