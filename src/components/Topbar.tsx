import React, { memo } from "react";
import topbarImage from "@/../public/images/topbar.gif";
import Image from "next/image";
const TopBar = (srcImage?: string) => {
	return (
		<div id="top" className={`w-full bg-red-200 relative h-16 ${!srcImage ? "scale-y-0" : ""}`}>
			<Image
				fill
				src={topbarImage.src}
				alt="topbarImage"
				style={{ inset: 0, objectFit: "cover", display: !srcImage ? "none" : "unset" }}
			/>
		</div>
	);
};

export default memo(TopBar);
