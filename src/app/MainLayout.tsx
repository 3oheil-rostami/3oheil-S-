import React, { useContext } from "react";
import RootLayout from "./layout";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContextProvider, { useGlobalContext } from "@/context/mainContext";

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ContextProvider>
			<RootLayout>
				<div className="main-layout">{children}</div>
				<ToastContainer
					position="bottom-center"
					rtl
					autoClose={3000}
					draggable
					transition={Flip}
					className={"font-bold text-base text-neutral-800"}
				/>
			</RootLayout>
		</ContextProvider>
	);
}
