"use client";
import { store } from "@/app/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Provider } from "react-redux";
import Addresses from "./components/Addresses";
import PayMethods from "./components/PayMethods";

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
						<button className="btn btn-outline btn-primary" onClick={handlePrev}>
							<IoIosArrowForward />
							مرحله قبلی
						</button>
					)}
				</div>
				<div className="">
					{!isLastStep && (
						<button className="btn btn-primary" onClick={handleNext}>
							مرحله بعدی
							<IoIosArrowBack />
						</button>
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
