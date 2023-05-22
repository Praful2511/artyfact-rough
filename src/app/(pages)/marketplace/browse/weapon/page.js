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
    <div className="mb-20">
    <div className='mx-6 mt-8'>
			<div className='flex justify-between'>
				<div className='font-normal text-xl'>WEAPON SKIN</div>
				<div>See All</div>
			</div>
			<div className="w-full grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-6">
				{weapons.length
					? weapons.map((item, index) => <SmallCard key={index} data={item}/>)
					: ""}
			</div>
		</div>
    </div>
  );
}
