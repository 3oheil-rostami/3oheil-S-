"use client";
import { store } from "@/app/store";
import React, { useState } from "react";
import { Provider } from "react-redux";
// import { Step, Stepper, ThemeProvider } from "@/app/Material-tailwind";
import Button from "@/components/form/Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Addresses from "./components/Addresses";
import PayMethods from "./components/PayMethods";
import { useRouter } from "next/navigation";
const OrderContent = () => {
	const router = useRouter();
	const [activeStep, setActiveStep] = useState(0);
	const [isLastStep, setIsLastStep] = useState(false);
	const [isFirstStep, setIsFirstStep] = useState(false);

	const handleNext = () => {
		if (activeStep === 1) {
			router.push("/");
		}
		return !isLastStep && setActiveStep(cur => cur + 1);
	};
	const handlePrev = () => !isFirstStep && setActiveStep(cur => cur - 1);

	return (
		<div>
			<div className="w-full px-8 py-4"></div>
			<div className="mt-20">
				{activeStep === 0 ? <Addresses /> : activeStep === 1 ? <PayMethods /> : <></>}
			</div>
			<div className="flex justify-between items-center">
				<div className="">
					{!isFirstStep && (
						<Button colorScheme="secondary" variant="outline" size="xs" onClick={handlePrev}>
							<IoIosArrowForward />
							مرحله قبلی
						</Button>
					)}
				</div>
				<div className="">
					{!isLastStep && (
						<Button colorScheme="secondary" variant="fill" size="xs" onClick={handleNext}>
							مرحله بعدی
							<IoIosArrowBack />
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};

const Order = () => (
	<Provider store={store}>
		<OrderContent />
	</Provider>
);
export default Order;

{
	/* <div className="mt-32 flex justify-between">
					<Button onClick={handlePrev} disabled={isFirstStep}>
						Prev
					</Button>
					<Button onClick={handleNext} disabled={isLastStep}>
						Next
					</Button>
				</div> */
}
