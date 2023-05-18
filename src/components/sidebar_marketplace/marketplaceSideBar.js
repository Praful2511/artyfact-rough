import Link from "next/link";
import Image from "next/image";

import Avatar from "@/components/icons/avatar.js";
import Bagpack from "@/images/icon/bagpack.svg";
import Weapon from "@/images/icon/weapon.svg";
const MarketplaceSideBar = (props) => {

    return (
        <div class="flex justify-between">
            <div className="flex flex-col justify-between items-center h-full w-[50px]">
                <div className="pt-10">
                    <div className="mb-4"><Link href='/marketplace/browse/avatar'><span><Avatar fill={'gold'} /></span></Link></div>
                    <div className="mb-4"><Link href='/marketplace/browse/weapon'><span><Image width={26} height={27} src={Weapon} /></span></Link></div>
                    <div className="mb-4"><Link href='/marketplace/browse/bagpack'><span><Image width={26} height={27} src={Bagpack} /> </span></Link></div>
                </div>
                <div className="">Faq</div>
            </div>
            <div className="flex flex-col flex-1 items-center rounded-l-lg border-[2px] border-[#161617] h-full">
                <div className="pt-10">Search</div>
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