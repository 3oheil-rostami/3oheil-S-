"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoginLayout from "@/app/LoginLayout";
import Button from "@/components/form/Button";
import LoginInputWrapper from "@/components/form/LoginInputWrapper";
import { BaseSyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import { FiPhone } from "react-icons/fi";
import { toast } from "react-toastify";

type FormValues = {
	number: string;
};

const GetPhoneNumber = () => {
	const { register, handleSubmit, formState } = useForm<FormValues>();
	const router = useRouter();

	const submitHandler = (e: BaseSyntheticEvent) => {
		e.preventDefault();
		onSubmit(e);
	};

	const onSubmit = handleSubmit(async data => {
		if (!navigator.onLine) {
			toast.warning("شما آنلاین نیستید .");
			return;
		}
		localStorage.setItem("phoneNumber", data.number);
		const toastId = toast.loading("در حال ارسال درخواست ...");
		const response = await handleSendNumber(data.number);
		toast.update(toastId, {
			type: response.ok ? "success" : "error",
			isLoading: false,
			autoClose: 3000,
			render() {
				response.status === 200
					? setTimeout(() => {
							router.replace("/register/get_code");
					  }, 3000)
					: response.status === 409
					? setTimeout(() => {
							router.replace("/register/sign_up");
					  }, 3000)
					: "";
				return response.status === 400
					? "اکانتی با این شماره موجود است ."
					: response.status === 409
					? "شماره شما تائید شده و به صفحه ثبت نام هدایت میشوید."
					: response.status === 200
					? "شماره با موفقیت بذیرفته شدید و کد براتون ارسال شد ."
					: response.status === 429
					? "سرور تشخیص داده که چند لحظه پیش کد را ارسال کرده است ، برای همین چند لحظه ثبر کنید."
					: response.status === 500
					? "خطا در سمت سرور رخ داد :("
					: "خطای ناشناس";
			},
		});
	});
	// fetching function
	async function handleSendNumber(number: string): Promise<Response> {
		return fetch("http://localhost:4000/sms/send", {
			method: "POST",
			headers: {
				Accept: "*/*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ number }),
		});
	}

	return (
		<LoginLayout>
			<form onSubmit={submitHandler} className="bg-white px-5 py-10 rounded-2xl  max-w-96">
				<h1 className="text-gray-800 font-bold text-2xl mb-1">سلام به روی ماهتون✨</h1>
				<p className="text-sm font-normal text-gray-600 mb-7">
					خوشحالیم که شمارو کنار خودمون میبینیم .
				</p>
				<p className="text-sm font-bold text-gray-600 mb-3 mr-2">
					برای شروع ثبت نام ابتدا باید شماره خود را وارد کنید :)
				</p>
				<LoginInputWrapper icon={<FiPhone />} errorMessage={formState.errors.number?.message}>
					<input
						className="pr-2 outline-none border-none grow focus:bg-transparent focus-visible:bg-transparent font-sans"
						type="number"
						placeholder="شماره همراه"
						{...register("number", {
							pattern: {
								value: /^09\d{9}$/,
								message: "ابتدای شماره را به این شکل وارد کنید :....09 ",
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
				<p className="text-sm font-normal text-neutral-800 px-2">
					<span> اگه قبلا ثبت نام کردین </span>
					<Link href={"/login"} className="font-bold hover:text-primary-700">
						ورود
					</Link>
					<span> را ، و اگه قبلا شمارتون رو ثبت کردین </span>
					<Link href={"/register/sign_up"} className="font-bold hover:text-primary-700">
						ثبت نام
					</Link>
					<span> را کلیک کنید.</span>
				</p>
			</form>
		</LoginLayout>
	);
};

export default GetPhoneNumber;
