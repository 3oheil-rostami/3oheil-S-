"use server";
import Image from "next/image";
import person from "@/../public/images/images.jpeg";
import { getUserInfo } from "@/services/user";
import { UserInformation } from "@/types/apiTypes";

async function getData() {
	try {
		const response = await getUserInfo();
		const data: UserInformation = response.data;
		return data;
	} catch (error) {
		console.error(error);
		return null;
	}
}

const User = async () => {
	const data = await getData();
	// console.log("data:", data);
	return (
		<div className="flex size-full">
			<div className="flex justify-center items-center border-l-2 pr-3 pl-6">
				<div className="flex items-center flex-col gap-3">
					<div className="size-36 border rounded-lg overflow-hidden">
						<Image src={person.src} width={150} height={150} alt="" />
					</div>
					<span className="text-xl font-bold text-neutral-800">{data?.name}</span>
					<span className="bg-neutral-300 text-neutral-800 text-sm font-semibold px-2 py-1 rounded-md">
						{data?.role === "user" ? "مشتری" : "فروشنده"}
					</span>
				</div>
			</div>
			<div className="pr-6 pl-3">
				<h3 className="text-xl text-neutral-700 font-bold">اطلاعات شما :</h3>
				<ul className="list-none mt-5 mr-3 flex flex-col gap-3">
					<li>
						<span className="text-base font-semibold text-neutral-800">نام و نام خانوادگی :</span>
						<span className="text-base font-normal text-neutral-700 mx-2">
							{data?.name + " " + data?.family}
						</span>
					</li>
					{/* <li>
						<span className="text-base font-semibold text-neutral-800">نام کاربری :</span>
						<span className="text-base font-normal text-neutral-700 mx-2">xanmi_sharifi</span>
					</li> */}
					<li>
						<span className="text-base font-semibold text-neutral-800">ایمیل :</span>
						<span className="text-base font-normal text-neutral-700 mx-2">{data?.email}</span>
					</li>
					<li>
						<span className="text-base font-semibold text-neutral-800">شماره تلفن :</span>
						<span className="text-base font-normal text-neutral-700 mx-2">{data?.number}</span>
					</li>
					<li>
						<span className="text-base font-semibold text-neutral-800">نقش :</span>
						<span className="text-base font-normal text-neutral-700 mx-2">
							{data?.role === "user" ? "مشتری" : "فروشنده"}
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default User;
