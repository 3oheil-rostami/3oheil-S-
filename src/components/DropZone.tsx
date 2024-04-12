"use client";
import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { MdClose } from "react-icons/md";

interface Props {
	setImages: React.Dispatch<React.SetStateAction<File[]>>;
}

const DropZone = ({ setImages }: Props) => {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

	const files = acceptedFiles.map((file: any) => (
		<li key={file.path} className='flex items-center mb-1'>
			<button
				type='button'
				className='p-1 rounded-full text-xl text-neutral-50 bg-neutral-900 ml-2'>
				<MdClose />
			</button>
			<span>
				{file.path} - {file.size} بایت
			</span>
		</li>
	));

	useEffect(() => {
		setImages(acceptedFiles);
	}, [acceptedFiles]);

	return (
		<section className='border p-3 rounded-lg'>
			<h3 className='text-xl font-bold text-neutral-800 mb-3'>افزودن تصاویر</h3>
			<div className='flex gap-2 h-60'>
				<div
					{...getRootProps({
						className:
							"dropzone bg-primary-50 w-1/2 flex justify-center items-center cursor-pointer rounded-lg",
					})}>
					<input {...getInputProps({ accept: "image/jpg", name: "getFiles", id: "getFiles" })} />
					<p className='text-xl font-bold text-neutral-800'>کلیک کنید یا بکشید و رها کنید</p>
				</div>
				<aside className='w-1/2 p-4 rounded-lg'>
					<h4 className='text-xl font-bold text-neutral-800 mb-3'>تصاویر گرفته شده:</h4>
					<ul className='mr-3 h-44 overflow-auto'>{files}</ul>
				</aside>
			</div>
		</section>
	);
};

export default DropZone;
