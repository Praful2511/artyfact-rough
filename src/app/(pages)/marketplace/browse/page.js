import AvatarCard from '@/components/common/avatarCard'
import avt6 from '@/images/avatars/avatar6.png'
import avt8 from '@/images/avatars/avatar8.png'
import avt2 from '@/images/avatars/avatar2.png'
import avt10 from '@/images/avatars/avatar10.png'
import avt11 from '@/images/avatars/avatar11.png'
import avt12 from '@/images/avatars/avatar12.png'
import bag1 from '@/images/backpacks/beg1.png'
import bag2 from '@/images/backpacks/beg2.png'
import gun1 from '@/images/weapons/gun1.png'
import gun2 from '@/images/weapons/gun2.png'
import downarrow from '@/images/icon/downarrowSelect.png'
import Iconfeathersearch from '@/images/icon/Iconfeathersearch.png'
import SmallCard from '@/components/common/smallCard'
import Image from 'next/image'

export default function BrowserPage() {
	let featured = [
		{
			img: avt6,
			name: "Vitalik Buterin",
			price: "30",
			level: "GOLD",
			value: 25
		},
		{
			img: avt8,
			name: "Vitalik Buterin",
			price: "20",
			level: "GOLD",
			value: 25
		},
	];

	let backpacks = [
		{
			img: bag1,
			name: "Backpack",
			price: "30",
			level: "GOLD",
			value: 25
		},
		{
			img: bag2,
			name: "Backpack",
			price: "20",
			level: "GOLD",
			value: 25
		},
	];

	let weapons = [
		{
			img: gun1,
			name: "Shot Gun",
			price: "30",
			level: "GOLD",
			value: 25
		},
		{
			img: gun2,
			name: "Shot Gun",
			price: "20",
			level: "GOLD",
			value: 25
		},
	];

	let avatars = [
		{
			img: avt2,
			name: "Vitalik Buterin",
			price: "30",
			level: "GOLD",
			value: 25
		},
		{
			img: avt10,
			name: "Vitalik Buterin",
			price: "20",
			level: "GOLD",
			value: 25
		},
		{
			img: avt11,
			name: "Vitalik Buterin",
			price: "20",
			level: "GOLD",
			value: 25
		},
		{
			img: avt12,
			name: "Vitalik Buterin",
			price: "20",
			level: "GOLD",
			value: 25
		},
	];

	let sortBy = ["Item Name", "Price", "Value"]
	let options = ["Items", "Prices", "Values"]

	return <div className='mx-6 mt-8 mb-20'>
		<div className='flex justify-between'>
			<div>MARKETPLACE</div>
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
		<div className=' mt-8'>
			<div className='flex justify-between'>
				<div className='font-normal text-xl text-[#B9B9B9]'>FEATURED</div>
				<div>See All</div>
			</div>
			<div className="w-full flex flex-wrap gap-9 mt-6">
				{featured.length
					? featured.map((item, index) => <AvatarCard key={index} data={item} />)
					: ""}
			</div>
		</div>
		<div className=' mt-8'>
			<div className='flex justify-between'>
				<div className='font-normal text-xl'>AVATAR</div>
				<div>See All</div>
			</div>
			<div className="w-full flex flex-wrap gap-9 mt-6">
				{avatars.length
					? avatars.map((item, index) => <AvatarCard key={index} data={item} />)
					: ""}
			</div>
		</div>
		<div className=' mt-8'>
			<div className='flex justify-between'>
				<div className='font-normal text-xl'>WEAPON SKIN</div>
				<div>See All</div>
			</div>
			<div className="w-full flex flex-wrap gap-9 mt-6">
				{weapons.length
					? weapons.map((item, index) => <SmallCard key={index} data={item} />)
					: ""}
			</div>
		</div>
		<div className=' mt-8'>
			<div className='flex justify-between'>
				<div className='font-normal text-xl'>BACKPACK</div>
				<div>See All</div>
			</div>
			<div className="w-full flex flex-wrap gap-9 mt-6">
				{backpacks.length
					? backpacks.map((item, index) => <SmallCard key={index} data={item} />)
					: ""}
			</div>
		</div>
	</div>
}