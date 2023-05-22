import gun1 from "@/images/weapons/gun1.png";
import gun2 from "@/images/weapons/gun2.png";
import gun3 from "@/images/weapons/gun2.png";
import gun4 from "@/images/weapons/gun2.png";
import gun5 from "@/images/weapons/gun2.png";
import gun6 from "@/images/weapons/gun2.png";
import gun7 from "@/images/weapons/gun2.png";
import gun8 from "@/images/weapons/gun2.png";
import gun9 from "@/images/weapons/gun2.png";
import gun10 from "@/images/weapons/gun2.png";
import SmallCard from "@/components/common/smallCard";
import downarrow from '@/images/icon/downarrowSelect.png'
import Iconfeathersearch from '@/images/icon/Iconfeathersearch.png'
import Image from "next/image";

let sortBy = ["Item Name", "Price", "Value"]
let options = ["Items", "Prices", "Values"]

export default function WeaponPage() {
	let weapons = [
		{
			img: gun1,
			name: "Shot Gun",
			price: "30",
			level: "GOLD",
			value: 25,
		},
		{
			img: gun2,
			name: "Shot Gun",
			price: "20",
			level: "GOLD",
			value: 25,
		},
		{
			img: gun3,
			name: "Shot Gun",
			price: "30",
			level: "GOLD",
			value: 25,
		},
		{
			img: gun4,
			name: "Shot Gun",
			price: "20",
			level: "GOLD",
			value: 25,
		},
		{
			img: gun5,
			name: "Shot Gun",
			price: "30",
			level: "GOLD",
			value: 25,
		},
		{
			img: gun6,
			name: "Shot Gun",
			price: "20",
			level: "GOLD",
			value: 25,
		},
		{
			img: gun7,
			name: "Shot Gun",
			price: "30",
			level: "GOLD",
			value: 25,
		},
		{
			img: gun8,
			name: "Shot Gun",
			price: "20",
			level: "GOLD",
			value: 25,
		},
		{
			img: gun9,
			name: "Shot Gun",
			price: "30",
			level: "GOLD",
			value: 25,
		},
		{
			img: gun10,
			name: "Shot Gun",
			price: "20",
			level: "GOLD",
			value: 25,
		},
	];

	return (
		<main>
			<div className="mx-6 mb-20">
				<div className='flex justify-between items-center sticky-bar'>
					<div className='!text-3xl font-normal starzone text-[#272728]'>WEAPON</div>
					<div className="flex gap-5">
						<div className='relative'>
							<input type='text'
								placeholder='Search by Model Id '
								className=' bg-[#050606] p-4 pl-12 w-[272px] rounded-2xl text-[#5C5C5C] font-normal border border-[#272728]'
							/>
							<Image src={Iconfeathersearch} className="absolute top-5 left-4" alt="Iconfeathersearch" />
						</div>
						<div className='flex gap-2 items-center'>
							<div className='text-[#B9B9B9]'>Short By</div>
							<div className='relative'>
								<select className='bg-[#050606] appearance-none w-[167px] p-4 rounded-2xl text-[#5C5C5C] font-normal border border-[#272728]'>
									{sortBy.length ? sortBy.map((item) =>
										<option value={item} className='text-[#5C5C5C]'>{item}</option>
									) : ""}
								</select>
								<Image src={downarrow} className="absolute top-6 right-4" alt="downarrow" />
							</div>
						</div>
						<div>
							<div className='relative'>
								<select className='bg-[#050606] appearance-none w-32 p-4 rounded-2xl text-[#5C5C5C] font-normal border border-[#272728]'>
									{options.length ? options.map((item) =>
										<option value={item} className='text-[#5C5C5C]'>{item}</option>
									) : ""}
								</select>
								<Image src={downarrow} className="absolute top-6 right-4" alt="downarrow" />
							</div>
						</div>
					</div>
				</div>
				<div className='mt-8'>
					<div className='flex justify-between'>
						<div className='font-normal text-xl'>WEAPON SKIN</div>
						<div>See All</div>
					</div>
					<div className="w-full grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-6">
						{weapons.length
							? weapons.map((item, index) => <SmallCard key={index} data={item} />)
							: ""}
					</div>
				</div>
			</div>
		</main>
	);
}
