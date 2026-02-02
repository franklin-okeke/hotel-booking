"use client"
import { hootelRooms } from "@/components/data/data"
import Image from "next/image"
import { useParams } from "next/navigation"
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa6";
import { MdPool } from "react-icons/md";
import { FaCoffee } from "react-icons/fa";


const DetailPage = () => {
  const {id} = useParams()

  const detailRoom = hootelRooms.find(room => room.id === id)
  


  if(!detailRoom){
    return <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-36 px-4 md:px-16 lg:px-24'>No room is available...</div>
  }



  return  (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24'>
       <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
        <h1 className="text-3xl md:text-4xl">{detailRoom.name} 
          <span className="text-sm ml-3">({detailRoom.roomType})</span></h1>
        <p className="bg-orange-500 rounded-full text-xs p-1 text-white">20% OFF</p>
       </div>
       {/* start ratings */}
       <div className="flex items-center gap-1 mt-2">
          <div className="flex gap-2">
            <FaStarHalfStroke className="text-yellow-500 h-4 w-4" />
            <FaStarHalfStroke className="text-yellow-500 h-4 w-4" />
            <FaStarHalfStroke className="text-yellow-500 h-4 w-4" />
            <FaStarHalfStroke className="text-yellow-500 h-4 w-4" />
            <FaStarHalfStroke className="text-yellow-500 h-4 w-4" />
          
          </div>
          <p className="ml2">100+ Reviews</p>
       </div>
      
      {/* room images */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

  {/* LEFT: main big image */}
  <div className="relative h-60 lg:h-96 lg:col-span-2">
    <Image
      src={detailRoom.image[0]}
      alt="main-room-image"
      fill
      priority
      className="rounded-xl shadow-xl object-cover brightness-110 contrast-110 hover:scale-105 transition-transform duration-300"
    />
  </div>

  {/* RIGHT: two small images */}
  <div className="grid grid-rows-2 gap-4 lg:col-span-1">
    {detailRoom.image.slice(1, 3).map((img, index) => (
      <div key={index} className="relative h-40">
        <Image
          src={img}
          alt={`room-thumbnail-${index}`}
          fill
          className='rounded-xl shadow-lg object-cover cursor-pointer border-2 transition'
          
        />
      </div>
    ))}
  </div>

</div>
{/* comments */}
<div className="flex flex-col md:flex-row md:justify-between mt-10">
  <div className="flex flex-col">
    <h1 className="text-3xl md:text-4xl">Experience Luxury like never before</h1>
    <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
     
      <div  className="flex items-start gap-2 px-3 py-2 rounded-lg bg-gray-100">
          <FaWifi  className="w-5 h-5"/>
          <p className="text-xs">Free Wifi</p>
      </div>
      <div className="flex items-start gap-2 px-3 py-2 rounded-lg bg-gray-100">
          <MdPool className="w-5 h-5" />
          <p className="text-xs">Swimming Pool</p>
      </div>
      <div className="flex items-start gap-2 px-3 py-2 rounded-lg bg-gray-100">
          <FaCoffee  className="w-5 h-5" />
          <p className="text-xs">Morning Tea</p>
      </div>
      {/* ckeckIn checkOut form */}
      <form className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white p-6 rounded-xl mx-auto mt-16 max-w-6xl shadow-2xl border border-gray-200">

        <div className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500">
          <div className="flex flex-col">

            <label htmlFor="check-date" className="font-medium">Check-In</label>
            <input type="date" id="check-date" placeholder="Check-In" className="w-full rounded border border-gray-500 px-3 py-2 mt-1.5 outline-none" required/>
          </div>
            <div className="w-px h-14 bg-gray-300/70 max-md:hidden"/>
          <div className="flex flex-col">
            <label htmlFor="checkOut-date" className="font-medium">Check-Out</label>
            <input type="date" id="checkOut-date" placeholder="Check-Out" className="w-full rounded border border-gray-500 px-3 py-2 mt-1.5 outline-none" required/>
          </div>

          <div className="w-px h-14 bg-gray-300/70 max-md:hidden"/>
         
          <div className="flex flex-col">
            <label htmlFor="guests" className="font-medium">Guests</label>
            <input type="number" id="guests" placeholder="0" className="max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none" required/>
          </div>
          
        </div>
        <button type="submit" className="bg-blue-600 lg:ml-8 hover:bg-gray-500 active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer">
          Check Availability
        </button>

      </form>
  
    </div>
  </div>
  {/* room price */}
  <p className="text-2xl font-semibold">${detailRoom.price}/Night</p>

   
 </div>
<div className="border-y max-w-3xl border-gray-300 my-12 py-10 text-gray-500">

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quaerat aliquam modi in qui sapiente repudiandae commodi. Eos nemo est natus culpa. Dolores accusamus eligendi harum consequatur odit impedit ipsa neque error, veniam, quasi quidem modi aperiam itaque quos incidunt, enim tempora similique deserunt! Odit, architecto perferendis. Officia, veritatis deleniti?</p>
</div>
</div>
  )
}

export default DetailPage

