
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
import downarrow from '@/images/icon/downarrowSelect.png'
import Iconfeathersearch from '@/images/icon/Iconfeathersearch.png'
import Image from 'next/image'

let sortBy = ["Item Name", "Price", "Value"]
let options = ["Items", "Prices", "Values"]

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
		<main>

			<div className='mx-6 mb-20'>
				<div className='flex justify-between items-center'>
					<div className='!text-3xl font-normal Starzone text-[#272728]'>BACKPACK</div>
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
						<div className='font-normal text-xl'>BACKPACK</div>
						<div>See All</div>
					</div>
					<div className="w-full grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-6">
						{backpacks.length
							? backpacks.map((item, index) => <SmallCard key={index} data={item} />)
							: ""}
					</div>
				</div>
			</div>
		</main>
	)
}