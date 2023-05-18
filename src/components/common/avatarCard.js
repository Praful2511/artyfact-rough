import Image from "next/image";
import React from "react";
import logo_small from "@/images/logo_small.png";

const AvatarCard = ({ data }) => {
	return (
		<div className="avatarCardBg text-white flex flex-col gap-4 Aldrich py-4 px-4 pr-[3rem] ">
			<div className="flex h-[260px] items-center justify-center">
				<Image className="h-max" src={data?.img} alt="avatar" />
			</div>

			<div className="w-full  -mt-3">
				<div>
					<p className="text-lg">{data?.name}</p>
				</div>
				<div className=" bg-[#161617] rounded-[20px] py-3 px-3">
					<div className="flex justify-between items-center ">
						<p className="!text-[11px] text-[#BCBCBD]">Price</p>
						<p className="text-xs text-[#F3BA2F]">GOLD</p>
					</div>
					<div className="flex justify-between items-center">
						<div className="flex gap-2 items-center">
							<p className="text-lg">
								{data?.value}
								<sub className="ml-1 text-[9px] Starzone text-[#BCBCBD]">$ARTY</sub>
							</p>
							<Image src={logo_small} alt="logo" />
						</div>
						<p className="text-xs text-[#BCBCBD]">${data?.price}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AvatarCard;
