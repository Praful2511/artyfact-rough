'use client'
import { useState } from "react";
import discord from "../../../images/icon/discord1.png";
import wallet from "../../../images/icon//wallet.png";
import leftarrow from "../../../images/icon/leftarrow.png";
import checkboxChecked from "../../../images/icon//checkboxChecked.png";
import checkbox from "../../../images/icon/checkbox.png";
import loginLeft from "../../../images/loginLeft.png";
import loginRight from "../../..//images/loginRight.png";
import logo2 from "../../../images/logo2.png";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "@/components/buttons/buttonPrimary/ButtonPrimary";

const page = () => {
  const [agree, setAgree] = useState(false);

  return (
    <div className="loginBgImage ">
      <div className="flex lg:justify-between flex-col lg:flex-row justify-center  px-4  h-auto md:h-[900px] ">
        <div className="mt-12 h-[900px] lg:h-auto">
          <div className="flex flex-col md:flex-row">
            <ButtonPrimary
              onClick={() => {
                window.history.back();
              }}
              className={" h-6 signupBack pl-0 pr-0 rounded-none "}
            >
            <Image src={leftarrow} className="inline w-5 h-5"/>
              BACK TO ARTYFACT
            </ButtonPrimary>
            <Image src={logo2} alt="logo2" className="rotateLogo ml-[7rem]" />
          </div>
          <div className="mt-5 ">
            <Image
              src={loginLeft}
              alt="loginLeft"
              className="absolute mt-6"
              style={{ zIndex: 1 }}
            />
            <Image
              src={loginRight}
              alt="loginRight"
              className="absolute left-[10rem] md:left-60 2xl:left-[22rem]"
            />
          </div>
        </div>
        <div className="mt-6 z-[100]">
          <div className="Starzone flex h-14 items-center ml-[136px] gap-[25px] ">
            <Link href={"/signup"}>
              <div className=" text-[#8B8B8B] !text-base launchSelectTabTwo px-4 py-2">
                SIGN UP
              </div>
            </Link>

            <div className="glow !text-base launchSelectTab px-4 py-2">
              LOG IN
            </div>
          </div>
          <div className={`w-full md:!w-[507px] loginBg h-[475px]`}>
            <div className="mx-10 my-7 pt-8">
              <p className="text-lg text-[#8B8B8B]">
                Fill your information to continue with Artyfact
              </p>
              <div className="inputDiv mt-8">
                <input
                  type="text"
                  className="text-white text-sm focus:outline-0 placeholder:text-white placeholder:text-base px-5 w-full h-6 bg-transparent"
                  required
                />
                <div className="inputBg"></div>
                <span className=" labelFloat text-xs ">Email</span>
              </div>
              <div className="inputDiv mt-8">
                <input
                  type="password"
                  className="text-white text-sm focus:outline-0 placeholder:text-white placeholder:text-base px-5 w-full h-6 bg-transparent"
                  required
                />
                <div className="inputBg"></div>
                <span className=" labelFloat text-xs ">Enter Password</span>
              </div>

              <div className="flex gap-4 items-start mt-8">
                <div className="flex justify-between w-full">
                  {agree ? (
                    <Image
                      src={checkboxChecked}
                      alt="checkboxChecked"
                      onClick={() => {
                        setAgree(false);
                      }}
                    />
                  ) : (
                    <Image
                      src={checkbox}
                      alt="checkbox"
                      onClick={() => {
                        setAgree(true);
                      }}
                    />
                  )}
                  <p className="text-[#8B8B8B]">Remember Me</p>
                  <p className="text-[#F3BA2F]">Forgot Password?</p>
                </div>
              </div>
              {/*  <Link href={`/`}> */}
              <div className="Starzone cursor-pointer mt-[3rem]">
                <button
                  className="w-full h-[36px] rounded-xl"
                  style={{
                    background:
                      "linear-gradient(99.36deg, #FF7246 14.1%, #F8A932 99.95%)",
                  }}
                >
                  {" "}
                  LOG IN
                </button>
              </div>
              {/* </Link> */}
            </div>
          </div>
          <div
            className={`px-10 w-[507px] h-[131px] flex flex-col justify-center items-center gap-6 text-white walletDiscordSignup my-2`}
          >
            <div className="text-base">YOU CAN ALSO SIGN UP WITH</div>
            <div className="flex justify-between gap-4">
              <ButtonPrimary className={"launchpadBg !rounded-none gap-3"}>
                <Image src={wallet} alt="wallet" />
                Wallet
              </ButtonPrimary>
              <ButtonPrimary className={"launchpadBg !rounded-none gap-3"}>
                <Image src={discord} alt="discord" />
                Discord
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
