"use client";
import React, { BaseSyntheticEvent } from "react";
import Button from "@/components/form/Button";
import Link from "next/link";
import LoginLayout from "../LoginLayout";
import LoginInputWrapper from "@/components/form/LoginInputWrapper";
import { MdLock, MdOutlinePassword, MdPhone } from "react-icons/md";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type FormValues = {
	number: string;
	password: string;
};

async function handleSendCodeVerify(data: FormValues) {
	return fetch("http://localhost:4000/auth/login", {
		method: "POST",
		headers: {
			Accept: "*/*",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
		credentials: "include",
	});
}

const Login = () => {
	const { register, handleSubmit, formState } = useForm<FormValues>();
	const router = useRouter();
	const onSubmit = handleSubmit(async ({ ...data }) => {
		if (!navigator.onLine) {
			toast.warning("شما آنلاین نیستید .");
			return;
		}
		const toastId = toast.loading("در انجام درخواست ...");
		const response = await handleSendCodeVerify({ ...data });
		toast.update(toastId, {
			isLoading: false,
			autoClose: 3000,
			type: response.ok ? "success" : "error",
			render() {
				if (response.status === 200) {
					response.json().then(data => {
						document.cookie = `token=${data.token};`;
						setTimeout(() => {
							router.replace("/#top");
						}, 3000);
					});
				}
				return response.status === 500
					? "خطایی در سرور رخ داده است ."
					: response.status === 404
					? "شما هنوز با این شماره ثبت نام نکرده‌اید ."
					: response.status === 403
					? "شما بن شده اید، با پشتیبانی تماس بگیرید ."
					: response.status === 401
					? "رمز اشتباه است ."
					: response.status === 200
					? "ثبت نام با موفقیت انجام شد . خیلی خوش آمدید ☺ّ"
					: "";
			},
		});
	});
	const submitHandler = (e: BaseSyntheticEvent) => {
		e.preventDefault();
		onSubmit(e);
	};
	return (
		<LoginLayout>
			<form className="bg-white px-5 py-10 rounded-2xl" onSubmit={submitHandler}>
				<h1 className="text-gray-800 font-bold text-2xl mb-1">سلامی دوباره به روی ماهتون✨</h1>
				<p className="text-sm font-normal text-gray-600 mb-7">
					خوشحالیم که باز شمارو کنار خودمون میبینیم .
				</p>
				<p className="text-sm font-bold text-gray-600 mb-3 mr-2">
					لطفا اطلاعات فرم زیر رو پر کنید.
				</p>
				<LoginInputWrapper icon={<MdPhone />} errorMessage={formState.errors.number?.message}>
					<input
						className="pr-2 outline-none border-none font-sans grow"
						type="text"
						placeholder="شماره تلفن"
						{...register("number", {
							pattern: {
								value: /^09\d{9}$/,
								message: "ابتدای شماره را به این شکل وارد کنید :0912 ",
							},
							required: "شماره رو وارد نکردین :)",
						})}
					/>
				</LoginInputWrapper>
				<LoginInputWrapper icon={<MdLock />} errorMessage={formState.errors.password?.message}>
					<input
						className="pr-2 outline-none border-none font-sans grow"
						type="password"
						placeholder="رمز عبور"
						{...register("password", { required: { value: true, message: "رمز عبور الزامیست !" } })}
					/>
				</LoginInputWrapper>
				<Button
					colorScheme="secondary"
					variant="fill"
					type="submit"
					size="sm"
					className="w-full bg-secondary-600 mt-4 py-2 rounded-[1rem!important] text-white font-semibold mb-2">
					ورود
				</Button>
				<div className="flex items-center justify-between px-2 gap-3">
					<Link
						href={"/login/forget_password"}
						className="text-sm hover:text-primary-500 cursor-pointer">
						رمز عبور خود را فراموش کردین ؟
					</Link>
					<Button colorScheme="secondary" variant="fill" size="2xs" className="min-w-fit">
						<Link href={"/register/get_phone_number"}>ثبت نام</Link>
					</Button>
				</div>
			</form>
		</LoginLayout>
	);
};

export default Login;
