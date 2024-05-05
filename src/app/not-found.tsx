import Image from "next/image";
import React from "react";
import notFoundImg from "@/../public/images/not-found.svg";
import Button from "@/components/form/Button";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import NavbarMenu from "@/components/NavbarMenu";
import Footer from "@/components/Footer";
const notFound = () => {
	return (
		<>
			<div className="border-b-4 border-secondary-200">
				<Navbar />
				<NavbarMenu />
			</div>
			<div className="size-full overflow-hidden flex flex-col justify-center items-center gap-28">
				<div className="w-1/2 h-fit top-24">
					<Image
						width={500}
						height={500}
						src={notFoundImg.src}
						alt="page not-found"
						className="size-full object-contain select-none max-h-96"
					/>
				</div>
				<div className="flex flex-col justify-center gap-5">
					<h3 className="text-5xl font-bold text-neutral-800 text-center">صفحه یافت نشد !</h3>
					<Button colorScheme="secondary" type="button" variant="fill">
						<Link href={"/"} className="block min-w-full">
							بازگشت به خانه
						</Link>
					</Button>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default notFound;
