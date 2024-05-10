"use client";

import React from "react";
import { Card, CardBody, List, ListItem, Radio } from "@/app/Material-tailwind";
import Input from "@/components/form/Input";
import Button from "@/components/form/Button";
const PayMethods = () => {
	return (
		<div>
			<div className="flex first:*:grow my-8 p-1 border rounded-lg focus-within:shadow-lg transition-all duration-300">
				<Input placeholder="کد تخفیف" />
				<Button colorScheme="primary" variant="fill" size="xs" className="min-w-fit">
					اعمال کد تخفیف
				</Button>
			</div>
			<List>
				<ListItem className="size-fit rounded-xl">
					<Radio
						label={
							<Card>
								<CardBody className="text-center bg-primary-100 rounded-xl">
									<p className="text-center text-5xl p-10 font-bold">درگاه پرداخت تستی</p>
								</CardBody>
							</Card>
						}
						containerProps={{
							className: "-mr-2",
						}}
					/>
				</ListItem>
				<ListItem className="size-fit rounded-xl">
					<Radio
						disabled
						label={
							<Card>
								<CardBody className="text-center bg-neutral-100 rounded-xl">
									<p className="text-center text-5xl p-10 font-bold leading-[60px]">
										درگاه پرداخت پاسارگاد
									</p>
								</CardBody>
							</Card>
						}
						containerProps={{
							className: "-mr-2",
						}}
					/>
				</ListItem>
			</List>
		</div>
	);
};

export default PayMethods;
