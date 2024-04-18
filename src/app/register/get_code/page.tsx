"use client";
import LoginLayout from "@/app/LoginLayout";
import Button from "@/components/form/Button";
import LoginInputWrapper from "@/components/form/LoginInputWrapper";
import { useRouter } from "next/navigation";
import React, { BaseSyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import { FiPhone } from "react-icons/fi";
import { toast } from "react-toastify";

type FormValues = {
	code: string;
};

const GetCode = () => {
	const { register, handleSubmit, formState } = useForm<FormValues>();
	const router = useRouter();

	const submitHandler = (e: BaseSyntheticEvent<object, any, any>) => {
		e.preventDefault();
		onSubmit(e);
	};
	const onSubmit = handleSubmit(async data => {
		const phoneNumber: string = localStorage.getItem("phoneNumber") || "-1";
		if (!navigator.onLine) {
			toast.warning("شما آنلاین نیستید");
			return;
		}
		const toastId = toast.loading("در حال ارسال درخواست ...");

		const response = await handleSendCodeVerify(parseInt(data.code), phoneNumber);
		toast.update(toastId, {
			isLoading: false,
			autoClose: 3000,
			type: response.ok ? "success" : "error",
			onClose: () => response.status === 200 && router.replace("/register/sign_up"),
			render() {
				return response.status === 500
					? "خطایی در سرور رخ داده است . "
					: response.status === 404
					? "به این شماره کدی ارسال نشده است ."
					: response.status === 400
					? "شما به دفعات کد تایید را اشتباه وارد کرده اید بعدا دوباره تلاش کنید . "
					: response.status === 200
					? "کد تائید شد ، شما به صفحه ثبت نام هدایت میشوید."
					: "خطای ناشناس ://";
			},
		});
	});

	// fetching function
	async function handleSendCodeVerify(code: number, number: string): Promise<Response> {
		return fetch("http://localhost:4000/sms/verify", {
			method: "POST",
			headers: {
				Accept: "*/*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ number, code }),
		});
	}

	return (
		<LoginLayout>
			<form onSubmit={submitHandler} className="bg-white px-5 py-10 rounded-2xl">
				<h1 className="text-gray-800 font-bold text-2xl mb-1">شما واقعی هستید یا کیک ; -)</h1>
				<p className="text-sm font-normal text-gray-600 mb-7">
					برای ثبت شمارتون باید فرم زیر را پر کنید .
				</p>
				<p className="text-sm font-bold text-gray-600 mb-3 mr-2">
					کدی که با پیغام ارسال شده رو ،این زیر بنویسید.
				</p>
				<LoginInputWrapper icon={<FiPhone />} errorMessage={formState.errors.code?.message}>
					<input
						className="pr-2 outline-none border-none grow focus:bg-transparent focus-visible:bg-transparent font-sans"
						type="number"
						placeholder="کد ارسالی"
						{...register("code", {
							minLength: {
								value: 5,
								message: "تعداد اعداد وارد شده کمتر از حد مجاز است.",
							},
							maxLength: {
								value: 5,
								message: "تعداد اعداد وارد شده بیشتر از حد مجاز است.",
							},
							required: "شماره رو وارد نکردین :)",
						})}
					/>
				</LoginInputWrapper>
				<Button
					colorScheme="secondary"
					variant="fill"
					type="submit"
					size="sm"
					className="w-full bg-secondary-600 mt-4 py-2 rounded-[1rem!important] text-white font-semibold mb-2">
					قدم بعدی
				</Button>
			</form>
		</LoginLayout>
	);
};

export default GetCode;
