import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const iranSans = localFont({ src: "./IRANSans.woff2" });

// export const metadata: Metadata = {
// 	title: "Cosmetic shop",
// 	description: "وبسایت فروشگاهی لوازم آرایشی و بهداشتی",
// };

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='fa' dir='rtl'>
			<body
				style={{ width: "100dvw", height: "100dvh", overflow: "hidden auto" }}
				className={iranSans.className}>
				{children}
			</body>
		</html>
	);
}
