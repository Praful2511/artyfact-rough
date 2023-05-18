import React from "react";
import Line from "../../src/images/monthpassline.png";
 import Garena from "../../src/images/avatars/garena.png";
import anyone from "../../src/images/avatars/anyone.png";
import Image from "next/image";
import Entrypassformet from "pages/shared/entrypassformet"; 


const entrypass = () => {
    let data=[
        {
            smallbgimgclass:"bgMonthPassSmall",
            smallimg:Garena,
            bigimgclass:"bgMonthPass",
            month:"1"
        },
        {
            smallbgimgclass:"bgMonthPassSmalltwo",
            smallimg:anyone,
            bigimgclass:"bgMonthPasstwo",
            month:"2"
        },
        
    ]
  return (
    <div className="flex flex-col gap-16">
     

   {
       data.length && data.map((item,index)=>{
            return (
             <Entrypassformet data={item}/>
            )
        })
      } 
    </div>
  )
}

export default entrypass
