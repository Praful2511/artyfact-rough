import { useEffect, useRef, useState } from "react";
import profile from "../images/icon/profile.png";
import logoutimg from "../images/icon/logout.png";
import TonyWalker from "../images/TonyWalker.png";
import Link from "next/link";
import Image from "next/image";
import InvertBtn from "./buttons/invertButton/InvertBtn";

const AvatarDropdown = () => {
  const ref = useRef();

  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const [social, setSocial] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsOpen(false);
      setLoggedIn(false);
    }, 2000);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (social && ref.current && !ref.current.contains(e.target)) {
        setSocial(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [social, isOpen]);

  return (
    <div>
      {/* <ButtonPrimary className={"primaryBg"}>LOGIN</ButtonPrimary>) */}
      {loggedIn ? (
        <div className="relative">
          <div
            className="flex items-center gap-2 text-xs cursor-pointer"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <span className="text-sm">Tony Walker</span>
            <Image src={TonyWalker} alt="TonyWalker" />
          </div>
          {isOpen ? (
            <div className="loggedBg  Aldrich">
              <div className="flex h-[1px]">
                <div className="leftUpperLogged"></div>
                <div className="rightUpperLogged"></div>
              </div>
              <div className="py-4 px-3">
                <div className="flex gap-2 items-center">
                  <Image
                    src={profile}
                    className="w-[50px] h-[50px]"
                    alt="profile"
                  />
                  <span>View Profile</span>
                </div>
                <InvertBtn
                  onClick={logout}
                  loading={loading}
                  className={
                    "logoutBg pt-0 pb-0 gap-0 w-full pl-0 pr-10 !rounded-none"
                  }
                >
                  <Image
                    src={logoutimg}
                    className="w-[50px] h-[50px]"
                    alt="logout"
                  />
                  {/* <GrPowerShutdown className=' w-5 h-5' /> */}
                  LOGOUT
                </InvertBtn>
              </div>
              <div className="flex h-[1px]">
                <div className="leftBottomLogged"></div>
                <div className="rightBottomLogged"></div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <Link href={"/"}>
          <div
            className="signupBg cursor-pointer"
            onClick={() => {
              setLoggedIn(true);
            }}
          >
            <InvertBtn className="!border"><span className="!text-white"> SIGNUP</span></InvertBtn>
          </div>
        </Link>
      )}
    </div>
  );
};

export default AvatarDropdown;
