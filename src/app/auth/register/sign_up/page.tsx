"use client";
import Link from "next/link";
import Button from "@/components/form/Button";
import React, { BaseSyntheticEvent } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import LoginInputWrapper from "@/components/form/LoginInputWrapper";
import { FaLock } from "react-icons/fa";

type FormValues = {
	name: string;
	family: string;
	email: string;
	password: string;
	confirmPassword: string;
};
type ApiData = {
	name: string;
	family: string;
	email?: string;
	password: string;
	number: string;
};

const SignUp = () => {
	const { register, handleSubmit, watch, formState } = useForm<FormValues>();
	const router = useRouter();
	const submitHandler = (e: BaseSyntheticEvent) => {
		e.preventDefault();
		onSubmit(e);
	};
	const onSubmit = handleSubmit(async ({ ...data }) => {
		if (!navigator.onLine) {
			toast.warning("شما آنلاین نیستید .");
			return;
		}
		const phoneNumber: string = localStorage.getItem("phoneNumber") || "-1";
		const sendData: {
			number: string;
			name: string;
			family: string;
			email?: string;
			password: string;
			confirmPassword: string;
		} = {
			...data,
			number: phoneNumber,
		};
		data.email.length < 10 && delete sendData.email;
		const toastId = toast.loading("در حال ارسال درخواست ...");
		const response = await handleSendCodeVerify({ ...data, number: phoneNumber });
		toast.update(toastId, {
			isLoading: false,
			autoClose: 3000,
			type: response.ok ? "success" : "error",
			async render() {
				response.status === 201
					? setTimeout(() => {
							router.replace("/");
					  }, 3000)
					: router.replace("/auth/register/get_phone_number");

				return response.status === 500
					? "خطایی در سرور رخ داده است ."
					: response.status === 401
					? "شماره شما تایید نشده است ."
					: response.status === 400
					? "خطایی در اسال درخواست رخ داد ."
					: response.status === 201
					? "ثبت نام با موفقیت انجام شد . خیلی خوش آمدید ."
					: "خطای ناشناس :/";
			},
		});
	});

	// fetching function
	async function handleSendCodeVerify(data: ApiData): Promise<Response> {
		return fetch("http://localhost:4000/auth/signup", {
			method: "POST",
			headers: {
				Accept: "*/*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
			credentials: "include",
		});
	}

	return (
		<section className="bg-white px-5 py-10 rounded-2xl max-md:shadow-2xl">
			<h1 className="text-gray-800 font-bold text-2xl mb-1">تا سه نشه بازی نشه </h1>
			<p className="text-sm font-normal text-gray-600 mt-7">
				اطلاعات خودتون رو اینجا کامل کنید تا دلتون خنک شه و کار ثبت نام تموم شه .
			</p>
			<form className=" pt-1" onSubmit={submitHandler}>
				<LoginInputWrapper icon={<IoPersonSharp />} errorMessage={formState.errors.name?.message}>
					<input
						className="pr-2 outline-none border-none placeholder:text-sm placeholder:font-bold"
						type="text"
						id=""
						placeholder="نام"
						{...register("name", {
							required: { value: true, message: "نام الزامیست" },
							pattern: {
								value: /^(?=.*[\u0600-\u06FF]).+$/,
								message: "از حروف فارسی استفاده کنید.",
							},
						})}
					/>
				</LoginInputWrapper>
				<LoginInputWrapper
					icon={<BsFillPersonLinesFill />}
					errorMessage={formState.errors.family?.message}>
					<input
						className="pr-2 outline-none border-none placeholder:text-sm placeholder:font-bold"
						type="text"
						placeholder="نام خانوادگی"
						{...register("family", {
							required: { value: true, message: "نام خانوادگی الزامیست" },
							pattern: {
								value: /^(?=.*[\u0600-\u06FF]).+$/,
								message: "از حروف فارسی استفاده کنید.",
							},
						})}
					/>
				</LoginInputWrapper>
				<LoginInputWrapper icon={<IoMdMail />} errorMessage={formState.errors.email?.message}>
					<input
						className="pr-2 outline-none border-none placeholder:text-sm placeholder:font-bold"
						type="email"
						id=""
						placeholder="ایمیل (اختیای)"
						{...register("email", {
							pattern: {
								value: /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
								message: "فرمت وارد شده درست نمیباشد .",
							},
						})}
					/>
				</LoginInputWrapper>
				<LoginInputWrapper icon={<FaLock />} errorMessage={formState.errors.password?.message}>
					<input
						className="pr-2 outline-none border-none placeholder:text-sm placeholder:font-bold"
						type="password"
						placeholder="رمز عبور"
						{...register("password", {
							required: { value: true, message: "رمز عبور الزامیست !" },
							minLength: { value: 8, message: "رمز عبور نباید کمتر از 8 کاراکتر باشد ." },
							maxLength: { value: 25, message: "رمز عبور نباید بیشتر از 25 کاراکتر باشد ." },
						})}
					/>
				</LoginInputWrapper>
				<LoginInputWrapper
					icon={<FaLock />}
					errorMessage={formState.errors.confirmPassword?.message}>
					<input
						className="pr-2 outline-none border-none placeholder:text-sm placeholder:font-bold"
						type="password"
						placeholder="تکرار رمز عبور"
						{...register("confirmPassword", {
							required: { value: true, message: "تکرار رمز عبور الزامیست !" },
							validate: value => {
								if (watch("password") !== value) {
									return "با رمز عبور مطابقت ندارد .";
								}
							},
						})}
					/>
				</LoginInputWrapper>
				<Button
					colorScheme="secondary"
					variant="fill"
					type="submit"
					size="sm"
					className="w-full bg-secondary-600 mt-4 py-2 rounded-[1rem!important] text-white font-semibold mb-2">
					ثبت نام
				</Button>
			</form>
			{/* <p className="text-base font-normal text-neutral-800 px-2">
					<span>شمارتون رو ثبت نکردین پس </span>
					<Link
						href={"/auth/register/get_phone_number"}
						className="font-bold hover:text-primary-700">
						ثبت شماره
					</Link>
					<span> را کلیک کنید.</span>
				</p> */}
		</section>
	);
};

export default SignUp;
