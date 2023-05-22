
'use client'
import Link from "next/link";
import Image from "next/image";
import Bagpack from "@/images/icon/bagpack.svg";
import Weapon from "@/images/icon/weapon.svg";
import { useEffect, useState } from "react";
import BackpackIcon from "../icons/backpackIcon";
import WeaponIcon from "../icons/weaponIcon";
import AvatarIcon from "@/components/icons/avatarIcon.js";
import Iconfeathersearch from '@/images/icon/Iconfeathersearch.png'

const MarketplaceSideBar = (props) => {

    const [active, setActive] = useState('');

    useEffect(() => {
        setActive((window.location.pathname).replace('/', ''))
    }, [])

    return (
        <div class="flex justify-between h-full">
            <div className="flex flex-col justify-between items-center h-full w-[50px]">
                <div className="pt-10">
                    {/* #272728 #F8A932 */}
                    <div className="mb-4" onClick={() => { setActive('/marketplace/browse/avatar') }}>
                        <Link href='/marketplace/browse/avatar'>
                            <AvatarIcon fill={`${active != "" && active.includes('avatar') ? '#F8A932' : '#272728'}`} />
                        </Link>
                    </div>
                    <div className="mb-4" onClick={() => { setActive('/marketplace/browse/weapon') }}>
                        <Link href='/marketplace/browse/weapon'>
                            <WeaponIcon fill={`${active != "" && active.includes('weapon') ? '#F8A932' : '#272728'}`} />
                        </Link>
                    </div>
                    <div className="mb-4" onClick={() => { setActive('/marketplace/browse/bagpack') }}>
                        <Link href='/marketplace/browse/bagpack'>
                            <BackpackIcon fill={`${active != "" && active.includes('bagpack') ? '#F8A932' : '#272728'}`} />
                        </Link>
                    </div>
                </div>
                {/* <div className="">Faq</div> */}
            </div>
            <div className="flex flex-col flex-1 items-center rounded-l-lg border-[2px] border-[#161617] h-full">
                <div className='relative mt-10'>
                    <input type='text'
                        placeholder='Search by Model Id '
                        className=' bg-[#161617] text-xs p-3 pl-10 focus:outline-none w-[183px] rounded-lg text-[#5C5C5C] font-normal border-0'
                    />
                    <Image src={Iconfeathersearch} className="absolute top-3 left-4" alt="Iconfeathersearch" />
                </div>
                <div className="py-2">
                    <ul>
                        <li>Crypto star 1</li>
                        <li>Crypto star 2</li>
                        <li>Crypto star 3</li>
                        <li>Crypto star 4</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MarketplaceSideBar;