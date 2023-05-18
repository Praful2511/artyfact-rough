import React from "react";
/* import Line from "../../public/images/monthpassline.png"; */

import Image from "next/image";
const Entrypassformet = ({ data}) => {
	
  return (
    <div className="flex gap-7 lg:gap-2 2xl:gap-3  flex-wrap ">
      <div className={`w-[320px]  xl:w-[243px] 2xl:w-[320px] h-[286px]  ${data.smallbgimgclass}`}>
        <div className="flex h-[250px] items-center justify-center">
	
         {/*  <Image className="  mt-[78px]" alt="line" src={data?.smallimg.src} width={data?.smallimg.width} height={data?.smallimg.height} /> */}
        </div>
      </div>
      <div className={`w-full lg:w-[786px] h-[286px]  mb-7 lg:mb-0 ${data.bigimgclass} `}>
        <div className="!p-4 mt-3">
          <h1 className="text-white !text-xl Starzone">
            {data?.month} MONTH PASS
          </h1>
          <p className="my-2">Play game & win price</p>
         {/*  <Image className="h-max my-8" alt="line" src={Line} /> */}
          <p className="text-[#595959] text-sm my-2">Price</p>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div>
                {" "}
                <p className="text-lg">
                  10
                  <sub className="ml-1 text-[9px] Starzone text-[#BCBCBD]">
                    USD
                  </sub>
                </p>
              </div>
              <div className="text-lg">
                <sub className="ml-1 text-[9px] Starzone text-[#BCBCBD]">=</sub>
              </div>
              <div className="flex gap-2 items-center">
              {/*   <img src="../logo_small.png" alt="logo" /> */}
                <p className="text-lg">
                  121
                  <sub className="ml-1 text-[9px] Starzone text-[#BCBCBD]">
                    $ARTY
                  </sub>
                </p>
              </div>
            </div>
            <div>
              <button className="buttonbggradian lg:w-[188px] h-[41px] text-center px-3">
                GET A PASS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entrypassformet;
