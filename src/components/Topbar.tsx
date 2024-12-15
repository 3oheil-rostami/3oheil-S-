import React, { memo } from "react";

const TopBar = ({ srcImage }: { srcImage?: string }) => {
	return (
		<div id="top" className={`w-full relative ${srcImage ? "h-0" : "h-16"}`}>
			{/* {!!srcImage && (
				<Image
					fill
					src={srcImage}
					alt="topbarImage"
					style={{ inset: 0, objectFit: "cover", display: !srcImage ? "none" : "unset" }}
				/>
			)} */}
			<h1 className="text-black/75 font-bold text-xl text-center pt-7">
				وبسایت در حال توسعه است ، به همین خاطر ایرادات زیادی میبینید.(البته فعلا )
			</h1>
		</div>
	);
};

export default memo(TopBar);
