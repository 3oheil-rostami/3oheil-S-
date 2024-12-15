"use client";
import { IoLocationSharp } from "react-icons/io5";
import { MdAdd } from "react-icons/md";

const Addresses = () => {
	return (
		<div>
			<div className="header flex items-center justify-between py-5">
				<div className="flex gap-2 items-end">
					<IoLocationSharp className="text-3xl text-secondary-800" />
					<span className="text-xl font-semibold text-neutral-700">انتخاب آدرس</span>
				</div>
				<button className="btn btn-primary btn-outline">
					<MdAdd />
					ثبت آدرس جدید
				</button>
			</div>
			<hr />
			<div className="body py-5 flex flex-col gap-3">
				<form>
					<label>
						<input type="radio" name="address" />
						<div>
							<h4 className="text-base font-bold">آذربایجان غربی ، پیرانشهر </h4>
							<p>بلوار کوردستان ، میدان ماموستا هیمن ، خیابان پاداشیان ، کوچه پاداش 14 </p>
						</div>
					</label>
					<label>
						<input type="radio" name="address" />
						<div>
							<h4 className="text-base font-bold">خراسان رضوی ، مشهد </h4>
							<p>بلوار سپهبد قرنی ،موحدین ، بین موحدین 3 و 5</p>
						</div>
					</label>
				</form>
			</div>
		</div>
	);
};

export default Addresses;
