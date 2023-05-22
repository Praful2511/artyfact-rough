import Link from "next/link";
import { useRef, useState ,useEffect} from "react";
import profile from "../images/icon/profile.png";
import logoutimg from "@/images/icon/logout1.png";
import TonyWalker from "../images/TonyWalker.png";
import Image from "next/image";
import InvertBtn from "./buttons/invertButton/InvertBtn";
import InvertButton from "./buttons/invertButton/InvertButton";
import ButtonPrimary from "./buttons/buttonPrimary/ButtonPrimary";
import { useRouter } from 'next/navigation';

const AvatarDropdown = () => {
  const ref = useRef();
	const router = useRouter();

  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const [social, setSocial] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    setLoading(true);
    localStorage.setItem("auth",false)
    setTimeout(() => {
      router.replace('/login')
      setLoading(false);
      setLoggedIn(false);
    }, 1000);
  };

  useEffect(() => {
    const isAuth = localStorage.getItem('auth')
    isAuth ? setLoggedIn(true):null
  }, [])
  


  return (
    <>
      {loggedIn ? (
        <div className="relative" style={{ zIndex: "1" }}>
          <div className="flex items-center gap-2 text-xs cursor-pointer">
            <div className="dropdown dropdown-end">
              <span tabIndex={0} className="m-1 cursor-pointer inline-flex items-center"><span className="mr-1">Tony Walker</span><span> <Image src={TonyWalker} alt="TonyWalker" /></span></span>
              <ul tabIndex={0} className={`dropdown-content menu p-2 shadow bg-[transparent] w-[250px] rounded-box  border-[2px] border-[rgb(41,41,41)]`}>
                <li>
                  <span className="inline-flex">
                    <span> <Image
                      src={profile}
                      className="w-[50px] h-[50px]"
                      alt="profile"
                    /></span>
                    <span>
                      <Link href={`#`}>View profile</Link>
                    </span>
                  </span>
                </li>
                <li>
                    <button 
                    onClick={logout}
                    className={`inline-flex items-center w-full rounded-md text-white  bg-[red] h-[43px]`}>
                      <Image
                        src={logoutimg}
                        className="w-[43px] h-[43px] "
                        alt="logout"
                      />
                      Logout
                    </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Link className="signupBtn" href={"/login"}>
            <span className="dark:text-white">Login</span>
          </Link>
        </div>
      )}
    </>
  );
};

export default AvatarDropdown;
