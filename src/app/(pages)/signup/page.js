'use client'
import { useState } from "react";
import discord from "../../../images/icon/discord1.png";
import wallet from "../../../images/icon//wallet.png";
import leftarrow from "../../../images/icon/leftarrow.png";
import checkboxChecked from "../../../images/icon//checkboxChecked.png";
import checkbox from "../../../images/icon/checkbox.png";
import signupLeft from "../../../images/signupLeft.png";
import signupRight from "../../../images/signupRight.png";
import logo2 from "../../../images/logo2.png";
import Image from "next/image";


import Link from "next/link";
import ButtonPrimary from "@/components/buttons/buttonPrimary/ButtonPrimary";

const page = () => {
  const [agree, setAgree] = useState(false);
  const [notify, setNotify] = useState(false);

  return (
    <div className=" signupBgImage ">
      <div className="flex justify-center lg:justify-between flex-wrap gap-7 px-4 ">
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
          <div className="mt-5">
            <Image
              src={signupLeft}
              alt="signupLeft"
              className="absolute mt-7"
            />
            <Image
              src={signupRight}
              alt="signupRight"
              className="absolute top-[9rem] left-[10rem] md:left-60 2xl:left-[38rem]"
              style={{ zIndex: 1 }}
            />
          </div>
        </div>
        <div className="mt-6 z-[100]">
          <div className="Starzone flex h-14 items-center ml-[136px] gap-[25px] ">
            <div className="glow !text-base launchSelectTab px-4 py-2">
              SIGN UP
            </div>
            <Link href={"/login"}>
              <div className="text-[#8B8B8B] !text-base launchSelectTabTwo px-4 py-2">
                LOG IN
              </div>
            </Link>
          </div>
          <div className={`w-full md:w-[507px] signupBgOne h-[613px]`}>
            <div className="mx-10 my-7 pt-8">
              <p className="text-lg text-[#8B8B8B] ">
                Fill your information to continue with Artyfact
              </p>
              <div className="inputDiv mt-8">
                <input
                  type="email"
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
              <div className="inputDiv mt-8">
                <input
                  type="password"
                  className="text-white text-sm focus:outline-0 placeholder:text-white placeholder:text-base px-5 w-full h-6 bg-transparent"
                  required
                />
                <div className="inputBg"></div>
                <span className=" labelFloat text-xs ">Reenter Password</span>
              </div>

              <div className="flex gap-4 items-start mt-8">
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
                <p className="text-[#8B8B8B]">
                  I have read and agree to the Artyfact{" "}
                  <span className="text-[#F3BA2F]">Terms of Use</span> and{" "}
                  <span className="text-[#F3BA2F]">Privacy Policy</span>.
                </p>
              </div>
              <div className="flex gap-4 items-start mt-8">
                {notify ? (
                  <Image
                    src={checkboxChecked}
                    alt="checkboxChecked"
                    onClick={() => {
                      setNotify(false);
                    }}
                  />
                ) : (
                  <Image
                    src={checkbox}
                    alt="checkbox"
                    onClick={() => {
                      setNotify(true);
                    }}
                  />
                )}
                <p className="text-[#8B8B8B]">
                  I agree to receive campaigns, periodic updates, and events
                  from Artyfact.
                </p>
              </div>

              <div className=" Starzone cursor-pointer mt-[3rem]">
                <button
                  className="w-full h-[36px] rounded-xl"
                  style={{
                    background:
                      "linear-gradient(99.36deg, #FF7246 14.1%, #F8A932 99.95%)",
                  }}
                >
                  {" "}
                  Signup
                </button>
              </div>
            </div>
          </div>
          <div
            className={`px-10 w-[507px] h-[131px] flex flex-col justify-center items-center gap-6 text-white walletDiscordSignup my-5`}
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
