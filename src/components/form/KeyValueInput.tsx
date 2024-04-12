"use client";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";

interface Props {
	features: { key: string; value: string }[];
	setFeatures: React.Dispatch<
		React.SetStateAction<
			{
				key: string;
				value: string;
			}[]
		>
	>;
}

const KeyValueInput = ({ features, setFeatures }: Props) => {
	const [key, setKey] = useState<string>("");
	const [value, setValue] = useState<string>("");
	const onKeyChangeHandler = (e: any) => setKey(e.target.value);
	const onValueChangeHandler = (e: any) => setValue(e.target.value);
	const addFeatureHandler = () => {
		if (!!key && !!value) {
			const currentFeature = { key, value };
			setFeatures(prevValue => [...prevValue, currentFeature]);
			setKey("");
			setValue("");
		}
	};
	return (
		<div className='flex gap-3 items-end'>
			<Input
				type='text'
				className='border'
				value={key}
				onChange={onKeyChangeHandler}
				label='کلمه کلیدی '
				placeholder='مثلا : ماندگاری'
			/>
			<Input
				type='text'
				className='border'
				value={value}
				onChange={onValueChangeHandler}
				label='مقدار'
				placeholder='مثلا : 20 روز'
			/>
			<Button onClick={addFeatureHandler} colorScheme='primary' variant='fill' size='xs'>
				افزودن
			</Button>
		</div>
	);
};

export default KeyValueInput;
