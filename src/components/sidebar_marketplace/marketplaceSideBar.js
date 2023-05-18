import Link from "next/link";
import Image from "next/image";

import Avatar from "@/components/icons/avatar.js";
import Bagpack from "@/images/icon/bagpack.svg";
import Weapon from "@/images/icon/weapon.svg";
const MarketplaceSideBar = (second) => {

    return (
        <div class="grid grid-cols-3 w-full">
            <div class="col-span-1 mt-10 flex flex-col">
                <div className="px-2">
                    <div className="mb-4"><Link href='/marketplace/browse/avatar'><span><Avatar fill={'gold'}/></span></Link></div>
                    <div className="mb-4"><Link href='/marketplace/browse/weapon'><span><Image width={26} height={27} src={Weapon}/></span></Link></div>
                    <div className="mb-4"><Link href='/marketplace/browse/bagpack'><span><Image width={26} height={27} src={Bagpack}/> </span></Link></div>
                </div>
                <div>
                    Faq
                </div>
            </div>
            <div class="col-span-2 pt-10 rounded-l-lg border-[2px] border-[#161617]">
                <div>Search</div>
                <div>
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