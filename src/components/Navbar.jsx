'use client'
import { useEffect, useState } from 'react';
import AvatarDropdown from './avatarDropdown';
import Link from 'next/link';
import Image from 'next/image';
import logo_small2 from '@/images/logo_small2.png';

let nav = [
    {
        name: "MARKETPLACE",
        link: "/marketplace/browse"
    },
    {
        name: "LEADERBOARD",
        link: ""
    },
    {
        name: "DAO",
        link: ""
    },
    {
        name: "STAKING",
        link: ""
    },
    {
        name: "ENTRY PASS",
        link: "/entry-pass"
    }
]

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const [path, setPath] = useState((window.location.pathname).replace('/',''));

    return (
        <nav className="">
            <div className="w-full">
                <div className="flex items-center justify-between pt-1 h-16">
                    <div className="flex w-full justify-between ">
                        <Link href="/">
                            <div className="flex-shrink-0 flex items-center gap-1">
                                <Image src={logo_small2} alt="logo_small2" />
                                <p className="text-white font-normal Starzone text-sm">ARTYFACT</p>
                            </div>
                        </Link>
                        <div className="hidden md:block Starzone">
                            <div className="flex items-baseline gap-3">
                                {nav.length ? nav.map((item, index) =>
                                    <Link key={index}
                                        href={item?.link}
                                        onClick={()=>{
                                            setPath((item?.link).replace("/",''))
                                        }}
                                        className={`${path!="" && item?.link.includes(path) ? 'navBorderActive' : 'navBorder'}
                                            rounded-2xl p-[2px]`}
                                    >
                                        <div className={`${path!="" && item?.link.includes(path) ? 'text-white':'text-[#8B8B8B]'} 
                                            text-sm bg-[#0b0c0c] hover:text-white rounded-2xl py-2 px-4`}
                                        >
                                            {item?.name}
                                            </div>
                                    </Link>)
                                    : ""}
                            </div>
                        </div>
                        <div className="flex ">
                            <div className="flex mr-2 md:hidden ">
                                <button onClick={toggleMobileMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out">
                                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        {isMobileMenuOpen ? (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        ) : (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        )}
                                    </svg>
                                </button>

                            </div>
                            <AvatarDropdown />
                        </div>
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden Starzone">
                    <div className="px-2 pt-2 pb-3 sm:px-3 flex flex-col">
                        <a href="/marketplace" className="text-[#8B8B8B] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">marketplace</a>
                        <a href="#" className="text-[#8B8B8B] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Leader board</a>
                        <a href="#" className="text-[#8B8B8B] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">DOA</a>
                        <a href="#" className="text-[#8B8B8B] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Staking</a>
                        <Link href='/entry-pass'><span className="text-[#8B8B8B] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Entry pass</span></Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;