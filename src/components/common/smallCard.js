import Image from "next/image";
import React from "react";
import logo_small from "@/images/logo_small.png";

const SmallCard = ({ data }) => {
	return (
		<div className="smallCard text-white flex flex-col gap-1 p-4 ">
			<div className="flex h-[160px] items-center justify-center">
				<Image className="h-max" src={data?.img} alt="avatar" />
			</div>

			<div className="w-[200px] mt-1">
				<div>
					<p className="text-lg">{data?.name}</p>
				</div>
				<div className="bg-[#161617] rounded-[20px] py-2 px-4">
					<div className="flex justify-between items-baseline">
						<p className="text-xs text-[#BCBCBD]">Price</p>
						<p className="text-xs text-[#F8A932]">GOLD</p>
					</div>
					<div className="flex justify-between items-baseline mt-1">
						<div className="flex gap-[2px] items-baseline">
							<p className="text-xl">
								{data?.value}
							</p>
							<p className="text-xs Starzone text-[#BCBCBD]">$ARTY</p>
							<Image src={logo_small} width="18px" height="15px" alt="logo" />
						</div>
						<p className="text-xs text-[#BCBCBD]">${data?.price}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SmallCard;