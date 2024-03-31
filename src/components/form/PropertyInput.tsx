"use client";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";

interface Props {
	properties: string[];
	setProperties: React.Dispatch<React.SetStateAction<string[]>>;
}

const PropertyInput = ({ properties, setProperties }: Props) => {
	const [currentProperty, setCurrentProperty] = useState<string>("");

	const changeValueHandler = (e: any) => setCurrentProperty(e.target.value);
	const deleteHandler = (value: string) =>
		setProperties(prevValue => prevValue.filter(item => item !== value));

	const addPropertyHandler = (e: any) => {
		if (e.key === "Enter") {
			!!currentProperty && setProperties([...properties, currentProperty]);
			setCurrentProperty("");
		}
	};
	return (
		<div className='flex items-center flex-wrap gap-1 w-full p-4 bg-white border rounded-md px-2'>
			{properties?.map((value: string, index: number) => (
				<strong
					className='flex items-center gap-1 px-2 py-1 rounded-md bg-neutral-300 text-neutral-900 text-sm font-semibold'
					key={index}>
					<button
						onClick={() => deleteHandler(value)}
						type='button'
						className='p-px rounded-full bg-neutral-800 text-neutral-50 text-sm'>
						<MdClose />
					</button>
					{value}
				</strong>
			))}
			<input
				type='text'
				value={currentProperty}
				onChange={changeValueHandler}
				onKeyDown={addPropertyHandler}
				className='grow h-full border-none outline-none'
			/>
		</div>
	);
};

export default PropertyInput;
