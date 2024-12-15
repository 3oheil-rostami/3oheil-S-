import React from "react";
import Link from "next/link";

export default function LoginLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="size-full max-h-screen overflow-hidden md:flex">
			<div className="relative overflow-hidden hidden md:flex w-1/2 bg-gradient-to-tr from-purple-900 to-pink-600 px-7 justify-around items-center">
				<article>
					<h1 className="text-white font-bold text-4xl font-sans">دیون</h1>
					<p className="text-white mt-3 mr-2">
						محبوترین ها و بهترین کیفیت ها رو میخوای ؟ پس با ما همراه شو.🤗
					</p>
					<div className="flex gap-1 items-center">
						<Link
							className="block w-28 bg-white text-pink-800 mt-4 py-2 rounded-2xl font-bold mb-2 mr-2 text-center"
							href="/">
							خانه
						</Link>
						<Link
							className="block w-28 bg-white text-pink-800 mt-4 py-2 rounded-2xl font-bold mb-2 mr-2 text-center"
							href="/about-us">
							درباره ما
						</Link>
						<Link
							className="block w-28 bg-white text-pink-800 mt-4 py-2 rounded-2xl font-bold mb-2 mr-2 text-center"
							href="/support">
							پشتیبانی
						</Link>
					</div>
				</article>
				<span className="absolute -bottom-32 -left-40 size-80 border-4 rounded-full border-opacity-30 border-t-8" />
				<span className="absolute -bottom-40 -left-20 size-80 border-4 rounded-full border-opacity-30 border-t-8" />
				<span className="absolute -top-40 -right-0 size-80 border-4 rounded-full border-opacity-30 border-b-8" />
				<span className="absolute -top-20 -right-20 size-80 border-4 rounded-full border-opacity-30 border-b-8" />
			</div>
			<main className="flex md:w-1/2 h-full overflow-auto justify-center py-10 items-center bg-white max-md:bg-gradient-to-tr max-md:from-purple-900 max-md:to-pink-600">
				{children}
			</main>
		</div>
	);
}
