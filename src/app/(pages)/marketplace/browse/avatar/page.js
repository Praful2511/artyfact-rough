import AvatarCard from "@/components/common/avatarCard";
import avt1 from "@/images/avatars/avatar1.png";
import avt2 from "@/images/avatars/avatar2.png";
import avt3 from "@/images/avatars/avatar3.png";
import avt4 from "@/images/avatars/avatar4.png";
import avt5 from "@/images/avatars/avatar5.png";
import avt6 from "@/images/avatars/avatar6.png";
import avt7 from "@/images/avatars/avatar7.png";
import avt8 from "@/images/avatars/avatar8.png";
import avt9 from "@/images/avatars/avatar9.png";
import avt10 from "@/images/avatars/avatar10.png";
import avt11 from "@/images/avatars/avatar11.png";
import avt12 from "@/images/avatars/avatar12.png";
import avt13 from "@/images/avatars/avatar13.png";
import downarrow from '@/images/icon/downarrowSelect.png'
import Iconfeathersearch from '@/images/icon/Iconfeathersearch.png'
import Image from "next/image";

let sortBy = ["Item Name", "Price", "Value"]
let options = ["Items", "Prices", "Values"]

export default function AvatarPage() {
	let avatars = [
		{
			img: avt1,
			name: "Vitalik Buterin",
			price: "30",
			level: "GOLD",
			value: 25,
		},
		{
			img: avt2,
			name: "Vitalik Buterin",
			price: "30",
			level: "GOLD",
			value: 25,
		},
		{
			img: avt3,
			name: "Vitalik Buterin",
			price: "30",
			level: "GOLD",
			value: 25,
		},
		{
			img: avt4,
			name: "Vitalik Buterin",
			price: "30",
			level: "GOLD",
			value: 25,
		},
		{
			img: avt5,
			name: "Vitalik Buterin",
			price: "30",
			level: "GOLD",
			value: 25,
		},
		{
			img: avt6,
			name: "Vitalik Buterin",
			price: "30",
			level: "GOLD",
			value: 25,
		},
		{
			img: avt7,
			name: "Vitalik Buterin",
			price: "30",
			level: "GOLD",
			value: 25,
		},
		{
			img: avt8,
			name: "Vitalik Buterin",
			price: "30",
			level: "GOLD",
			value: 25,
		},
		{
			img: avt9,
			name: "Vitalik Buterin",
			price: "30",
			level: "GOLD",
			value: 25,
		},
		{
			img: avt10,
			name: "Vitalik Buterin",
			price: "20",
			level: "GOLD",
			value: 25,
		},
		{
			img: avt11,
			name: "Vitalik Buterin",
			price: "20",
			level: "GOLD",
			value: 25,
		},
		{
			img: avt12,
			name: "Vitalik Buterin",
			price: "20",
			level: "GOLD",
			value: 25,
		},
		{
			img: avt13,
			name: "Vitalik Buterin",
			price: "20",
			level: "GOLD",
			value: 25,
		},
	];

	return (
		<main>
			<div className="mx-6 mb-20">
				<div className='flex justify-between items-center sticky-bar'>
					<div className='!text-3xl font-normal text-[#272728]'>AVATAR</div>
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
				<div className="mt-8">
					<div className="flex justify-between">
						<div className="font-normal text-xl">AVATAR</div>
						<div>See All</div>
					</div>
					<div className="w-full grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-6">
						{avatars.length
							? avatars.map((item, index) => (
								<AvatarCard key={index} data={item} />
							))
							: ""}
					</div>
				</div>
			</div>
			<div>pagination</div>
		</main>
	);
}
