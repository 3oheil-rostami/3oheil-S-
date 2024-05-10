import localFont from "next/font/local";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
// import { ThemeProvider } from "@material-tailwind/react";
const iranSans = localFont({ src: "./IRANSans.woff2" });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fa" dir="rtl">
			<body
				style={{ width: "100dvw", height: "100dvh", overflow: "hidden auto" }}
				className={iranSans.className}>
				{/* <ThemeProvider> */}
				{children}
				<ToastContainer
					position="bottom-center"
					rtl
					autoClose={3000}
					draggable
					transition={Flip}
					className={"font-bold text-base text-neutral-800"}
				/>
				{/* </ThemeProvider> */}
			</body>
		</html>
	);
}
