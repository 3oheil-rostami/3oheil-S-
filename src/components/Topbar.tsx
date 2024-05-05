import React, { memo } from "react";
import Image from "next/image";
const TopBar = ({ srcImage }: { srcImage?: string }) => {
	return (
		<div id="top" className={`w-full relative ${!srcImage ? "h-0" : "h-16"}`}>
			{!!srcImage && (
				<Image
					fill
					src={srcImage}
					alt="topbarImage"
					style={{ inset: 0, objectFit: "cover", display: !srcImage ? "none" : "unset" }}
				/>
			)}
		</div>
	);
};

export default memo(TopBar);
