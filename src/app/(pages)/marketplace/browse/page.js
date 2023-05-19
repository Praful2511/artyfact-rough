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
import SmallCard from '@/components/common/smallCard'

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

	return <div className='mb-20'>
		<div className='mx-6 mt-8'>
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
		<div className='mx-6 mt-8'>
			<div className='flex justify-between'>
				<div className='font-normal text-xl'>AVATAR</div>
				<div>See All</div>
			</div>
			<div className="w-full flex flex-wrap gap-9 mt-6">
				{avatars.length
					? avatars.map((item, index) => <AvatarCard key={index} data={item}/>)
					: ""}
			</div>
		</div>
		<div className='mx-6 mt-8'>
			<div className='flex justify-between'>
				<div className='font-normal text-xl'>WEAPON SKIN</div>
				<div>See All</div>
			</div>
			<div className="w-full flex flex-wrap gap-9 mt-6">
				{weapons.length
					? weapons.map((item, index) => <SmallCard key={index} data={item}/>)
					: ""}
			</div>
		</div>
		<div className='mx-6 mt-8'>
			<div className='flex justify-between'>
				<div className='font-normal text-xl'>BACKPACK</div>
				<div>See All</div>
			</div>
			<div className="w-full flex flex-wrap gap-9 mt-6">
				{backpacks.length
					? backpacks.map((item, index) => <SmallCard key={index} data={item}/>)
					: ""}
			</div>
		</div>
	</div>
}