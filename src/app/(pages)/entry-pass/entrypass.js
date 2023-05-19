import React from "react";
import Line from "../../../images/monthpassline1.png";
import Garena from "../../../images/avatars/garena.png";
import anyone from "../../../images/avatars/anyone.png";
import Image from "next/image";
/* import Entrypassformet from "pages/shared/entrypassformet";  */
import logo from "../../../images/logo_small.png";
import InvertButton from "@/components/buttons/invertButton/InvertButton";

const Entrypass = () => {
  let data = [
    {
      smallbgimgclass: "bgMonthPassSmall",
      smallimg: Garena,
      bigimgclass: "bgMonthPass",
      month: "1",
    },
    {
      smallbgimgclass: "bgMonthPassSmalltwo",
      smallimg: anyone,
      bigimgclass: "bgMonthPasstwo",
      month: "2",
    },
  ];
  return (
    <div className="flex items-center flex-col gap-16">
      {/* {
       data.length && data.map((item,index)=>{
            return (
             <Entrypassformet data={item}/>
            )
        })
      }  */}
      <div className="flex gap-7 lg:gap-2 2xl:gap-3  flex-wrap ">
        <div
          className={`w-[320px]  xl:w-[320px] 2xl:w-[320px] h-[286px] bgMonthPassSmall`}
        >
          <div className="flex h-[250px] items-center justify-center">
            <Image className="  mt-[78px]" alt="line" src={Garena} />
          </div>
        </div>
        <div
          className={`w-full lg:w-[784px] h-[285px]  mb-7 lg:mb-0 bgMonthPass `}
        >
          <div className=" mt-3">
            <div className="px-9 pt-7">
              <h1 className="text-white !text-xl Starzone">1 MONTH PASS</h1>
              <p className="my-2">Play game & win price</p>
            </div>

            <Image className="h-max my-4" alt="line" src={Line} />
            <div className="px-9  ">
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
                    <sub className="ml-1 text-[9px] Starzone text-[#BCBCBD]">
                      =
                    </sub>
                  </div>
                  <div className="flex gap-2 items-center -mt-3">
                    <Image src={logo} alt="logo" />
                    <p className="text-lg">
                      121
                      <sub className="ml-1 text-[9px] Starzone text-[#BCBCBD]">
                        $ARTY
                      </sub>
                    </p>
                  </div>
                </div>
                <div className="mr-20">
                  {/*  <button className="border border-[#F8A932] rounded-xl lg:w-[188px] h-[41px] text-center px-3">
                  GET A PASS
                </button> */}
                  <InvertButton className={"!lg:w-[188px]"}>
                    GET A PASS
                  </InvertButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-7 lg:gap-2 2xl:gap-3  flex-wrap ">
        <div
          className={`w-[320px]  xl:w-[320px] 2xl:w-[320px] h-[286px] bgMonthPassSmalltwo`}
        >
          <div className="flex h-[250px] items-center justify-center">
            <Image className="  mt-[78px]" alt="line" src={anyone} />
          </div>
        </div>
        <div
          className={`w-full lg:w-[784px] h-[285px]  mb-7 lg:mb-0 bgMonthPasstwo `}
        >
          <div className=" mt-3">
            <div className="px-9 pt-7">
              <h1 className="text-white !text-xl Starzone">2 MONTH PASS</h1>
              <p className="my-2">Play game & win price</p>
            </div>

            <Image className="h-max my-4" alt="line" src={Line} />
            <div className="px-9  ">
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
                    <sub className="ml-1 text-[9px] Starzone text-[#BCBCBD]">
                      =
                    </sub>
                  </div>
                  <div className="flex gap-2 items-center -mt-3">
                    <Image src={logo} alt="logo" />
                    <p className="text-lg">
                      121
                      <sub className="ml-1 text-[9px] Starzone text-[#BCBCBD]">
                        $ARTY
                      </sub>
                    </p>
                  </div>
                </div>
                <div className="mr-20">
                  {/*  <button className="border border-[#F8A932] rounded-xl lg:w-[188px] h-[41px] text-center px-3">
                  GET A PASS
                </button> */}
                  <InvertButton className={"!lg:w-[188px]"}>
                    GET A PASS
                  </InvertButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <div className="mb-10"></div>
    </div>
  );
};

export default Entrypass;
