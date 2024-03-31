"use client";
import React from "react";
import { useDropzone } from "react-dropzone";

const DropZone = () => {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

	const files = acceptedFiles.map((file: any) => (
		<li key={file.path}>
			{file.path} - {file.size} بایت
		</li>
	));

	return (
		<section className='border p-3 rounded-lg'>
			<h3 className='text-xl font-bold text-neutral-800 mb-3'>افزودن تصاویر</h3>
			<div className='flex gap-2 h-60'>
				<div
					{...getRootProps({
						className:
							"dropzone bg-primary-50 w-1/2 flex justify-center items-center cursor-pointer rounded-lg",
					})}>
					<input {...getInputProps({ accept: "image/*", name: "getFiles", id: "getFiles" })} />
					<p className='text-xl font-bold text-neutral-800'>کلیک کنید یا بکشید و رها کنید</p>
				</div>
				<aside className='w-1/2 p-4 rounded-lg'>
					<h4 className='text-xl font-bold text-neutral-800 mb-3'>تصاویر گرفته شده:</h4>
					<ul className='mr-3'>{files}</ul>
				</aside>
			</div>
		</section>
	);
};

export default DropZone;
