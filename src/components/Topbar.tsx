import React from "react";
import topbarImage from "@/../public/images/topbar.gif";
export default function Topbar() {
	return (
		<div id="top" className='w-full bg-red-200'>
			<img src={topbarImage.src} alt='topbarImage' />
		</div>
	);
}
