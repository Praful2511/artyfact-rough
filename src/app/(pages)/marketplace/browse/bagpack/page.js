
import bag1 from '@/images/backpacks/beg1.png'
import bag2 from '@/images/backpacks/beg2.png'
import bag3 from '@/images/backpacks/beg3.png'
import bag4 from '@/images/backpacks/beg4.png'
import bag5 from '@/images/backpacks/beg5.png'
import bag6 from '@/images/backpacks/beg6.png'
import bag7 from '@/images/backpacks/beg7.png'
import bag8 from '@/images/backpacks/beg8.png'
import bag9 from '@/images/backpacks/beg9.png'
import SmallCard from '@/components/common/smallCard'
export default function BagpackPage() {
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
		{
			img: bag3,
			name: "Backpack",
			price: "20",
			level: "GOLD",
			value: 25
		},
		{
			img: bag4,
			name: "Backpack",
			price: "20",
			level: "GOLD",
			value: 25
		},
		{
			img: bag5,
			name: "Backpack",
			price: "20",
			level: "GOLD",
			value: 25
		},
		{
			img: bag6,
			name: "Backpack",
			price: "20",
			level: "GOLD",
			value: 25
		},
		{
			img: bag7,
			name: "Backpack",
			price: "20",
			level: "GOLD",
			value: 25
		},
		{
			img: bag8,
			name: "Backpack",
			price: "20",
			level: "GOLD",
			value: 25
		},
		{
			img: bag9,
			name: "Backpack",
			price: "20",
			level: "GOLD",
			value: 25
		},
	];
    return (
        <div className='mb-20'>
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
    )
}