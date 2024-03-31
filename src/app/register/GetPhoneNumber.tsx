"use client";
import Button from "@/components/form/Button";
import LoginInputWrapper from "@/components/form/LoginInputWrapper";
import React from "react";
import { useForm } from "react-hook-form";
import { FiPhone } from "react-icons/fi";

type FormValues = {
	phoneNumber: string;
};

const GetPhoneNumber = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();
	// const router = useRouter();
	const onSubmit = handleSubmit(data => {	
		console.log(data);
		// router.push("/GetCode");
	});

	return (
		<form onSubmit={onSubmit} className='bg-white px-5 py-10 rounded-2xl'>
			<h1 className='text-gray-800 font-bold text-2xl mb-1'>سلام به روی ماهتون✨</h1>
			<p className='text-sm font-normal text-gray-600 mb-7'>
				خوشحالیم که شمارو کنار خودمون میبینیم .
			</p>
			<p className='text-sm font-bold text-gray-600 mb-3 mr-2'>لطفا اطلاعات فرم زیر رو پر کنید.</p>
			<LoginInputWrapper icon={<FiPhone />} errorMessage={errors.phoneNumber?.message}>
				<input
					className='pr-2 outline-none border-none grow focus:bg-transparent focus-visible:bg-transparent'
					type='number'
					placeholder='شماره همراه'
					{...register("phoneNumber", {
						pattern: {
							value: /^(?:\(+98)|(0098)|(0)?9\d{2}\d{3}\d{4}$/,
							message: "شماره وارد شده درست نمی باشد .",
						},
						required: "شماره رو وارد نکردین :)",
					})}
				/>
			</LoginInputWrapper>
			<Button
				colorScheme='secondary'
				variant='fill'
				type='submit'
				size='sm'
				className='w-full bg-secondary-600 mt-4 py-2 rounded-[1rem!important] text-white font-semibold mb-2'>
				قدم بعدی
			</Button>
		</form>
	);
};

export default GetPhoneNumber;
