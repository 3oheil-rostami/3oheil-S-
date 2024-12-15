"use client";
import Input2 from "@/components/form/Input2";

const PayMethods = () => {
	return (
		<div>
			<div className="flex first:*:grow my-8 p-1 border rounded-lg focus-within:shadow-lg transition-all duration-300">
				<Input2 placeholder=" کد تخفیفخود رو وارد کنید ." label="کد تخفیف" />
				<button className="btn btn-primary w-fit min-w-fit">
					اعمال کد تخفیف
				</button>
			</div>
			<form>
				<label>
					<input type="radio" name="payment-method" />
					<div>
						<div className="text-center bg-primary-100 rounded-xl">
							<p className="text-center text-5xl p-10 font-bold">درگاه پرداخت تستی</p>
						</div>
					</div>
				</label>
				<label>
					<input type="radio" disabled name="payment-method" />
					<div>
						<div className="text-center bg-neutral-100 rounded-xl">
							<p className="text-center text-5xl p-10 font-bold leading-[60px]">
								درگاه پرداخت پاسارگاد
							</p>
						</div>
					</div>
				</label>
			</form>
		</div>
	);
};

export default PayMethods;
