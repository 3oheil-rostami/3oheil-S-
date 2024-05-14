import React, { memo } from "react";
import Image from "next/image";
const TopBar = ({ srcImage }: { srcImage?: string }) => {
	return (
		<div id="top" className={`w-full relative ${srcImage ? "h-0" : "h-16"} bg-primary-200`}>
			{/* {!!srcImage && (
				<Image
					fill
					src={srcImage}
					alt="topbarImage"
					style={{ inset: 0, objectFit: "cover", display: !srcImage ? "none" : "unset" }}
				/>
			)} */}
			<h1 className="text-white font-bold text-3xl text-center">
				{" "}
				وبسایت در حال توسعه است ، به همین خاطر ایرادات زیادی میبینید.(البته فعلا )
			</h1>
		</div>
	);
};

export default memo(TopBar);
