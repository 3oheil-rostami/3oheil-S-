"use client";
import React, { BaseSyntheticEvent } from "react";
import Button from "@/components/form/Button";
import Link from "next/link";
import LoginLayout from "../LoginLayout";
import LoginInputWrapper from "@/components/form/LoginInputWrapper";
import { MdLock, MdOutlinePassword, MdPhone } from "react-icons/md";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type FormValues = {
	number: string;
	password: string;
};

async function handleSendCodeVerify(data: FormValues) {
	fetch("http://localhost:4000/auth/login", {
		method: "POST",
		headers: {
			Accept: "*/*",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	}).then(res => {
		res.status === 500
			? toast.error("خطایی در سرور رخ داده است .")
			: res.status === 404
			? toast.warning("شما هنوز با این شماره ثبت نام نکرده‌اید .")
			: res.status === 403
			? toast.error("شما بن شده اید، با پشتیبانی تماس بگیرید .")
			: res.status === 401
			? toast.error("رمز اشتباه است .")
			: res.status === 200
			? toast.success("ثبت نام با موفقیت انجام شد . خیلی خوش آمدید ☺ّ", {
					onClose: () => {
						document.cookie = `haba=${res.json().then(data => data)}; Secure;`;
						window.location.href = "/";
					},
			  })
			: "";
		return res.json();
	});
}

const Register = () => {
	const { register, handleSubmit, watch, formState } = useForm<FormValues>();
	const onSubmit = handleSubmit(async ({ ...data }) => {
		if (formState.isValid) {
			if (!navigator.onLine) {
				toast.warning("شما آنلاین نیستید .");
				return;
			}
			const phoneNumber: string = localStorage.getItem("phoneNumber") || "-1";
			handleSendCodeVerify({ ...data, number: phoneNumber });
		}
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

export default Register;
