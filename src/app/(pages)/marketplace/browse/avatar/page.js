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
   {/*    <div>
        <div>Avatar</div>
        <div>
          <div>seacrch</div>
          <div>
            <div>
              {" "}
              <span>Sort By :</span>
            </div>
            <div></div>
          </div>
        </div>
      </div> */}
      <div className="mb-20">
        <div className="mx-6 mt-8">
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
