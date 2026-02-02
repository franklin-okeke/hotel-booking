"use client"

import { hootelRooms } from '@/components/data/data'
import Image from 'next/image'
import Link from 'next/link'
import  { useState } from 'react'


const CheckBox = ({label, selected=false, onChange =() =>{}}) =>{
  return(
    <label className='flex items-center gap-2 cursor-pointer mt-2 text-sm'>
      <input type="checkbox" checked={selected} onChange={(e)=>onChange(e.target.checked, label)}  />
      <span className='font-light select-none'>{label}</span>
    </label>
  )
}
const RadioButton = ({label, selected=false, onChange =() =>{}}) =>{
  return(
    <label className='flex items-center gap-2 mb-2 cursor-pointer mt-2 text-sm'>
      <input type="radio" name='sortOptions' checked={selected} onChange={()=>onChange(label)}  />
      <span className='font-light select-none'>{label}</span>
    </label>
  )
}

const Hotels = () => {

  const [openFilters, setOpenFilters] = useState(false)

  const roomTypes = ["Single Bed", "Double Suit","Luxury Room","Family Suit"]

  const priceRanges = ["0 to 500","500 to 1000","1000 to 2000","2000 to 5000"]
 
  const sortOptions = ["Price low to High","Price High to Low","Newest First"]

  return (
    <div className='flex  flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-36 px-4 md:px-16 lg:px-24'>
        
      <div>
        <div className='flex flex-col items-start text-left'>
          <h1 className='text-4xl md:text-3xl'>Hotel Rooms</h1>
          <p className='max-w-xl text-sm md:text-base mt-2'>Take advantage of our limited time offers and special packages to enhance your stay and create memories</p>
        </div>
         <div className="grid grid-cols-1 my-12 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {hootelRooms.map((room) => (
          <div
           
            key={room.id}
            className="max-w-sm w-full bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
          >
            {/* Image */}
            <Link href={`/all-rooms/${room.id}`}>
            <div className="relative h-48 overflow-hidden">
              <Image
                fill
                src={room.image[0]}
                alt={room.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300  brightness-110 contrast-110"
              />
              <span className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-sm font-medium shadow">
                ⭐ {room.rating || "4.5"}
              </span>
            </div>
            </Link>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                {room.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Luxury room with premium amenities
              </p>

              {/* Price & Button */}
              <div className="flex items-center justify-between mt-5">
                <p className="text-gray-700">
                  <span className="text-2xl font-bold text-gray-900">
                    ${room.price}
                  </span>
                  <span className="text-sm text-gray-500"> / night</span>
                </p>

                <button className="px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-all">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      </div>
      {/* filetrs */}
      <div className='bg-white w-65  border  border-gray-300 text-gray-600 max-lg:mb-8 lg:mt-16'>
       <div className={`flex items-center justify-between px-5 py-3 lg:border-b border-gray-300 ${openFilters && 'border-b'}`}>
          <h1 className='text-base font-bold text-gray-800'>FILTERS</h1>
          <div className='text-xs cursor-pointer'>
            <span onClick={() =>setOpenFilters(!openFilters)} className='lg:hidden'>{openFilters ? 'HIDE':"SHOW"}</span>
            <span className='hidden lg:block'>CLEAR</span>
          </div>
       </div>
       <div className={`${openFilters ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-700`}>

         <div className='px-5 pt-5'>
          <p className="font-medium pb-2 text-gray-699">Popular Filters</p>
           {roomTypes.map((room, index) =>(
            <CheckBox key={index} label={room}/>
           ))}
         </div>
         <div className='px-5 pt-5'>
          <p className="font-medium pb-2 text-gray-699">Price Range</p>
           {priceRanges.map((price, index) =>(
            <CheckBox key={index} label={`$ ${price}`}/>
           ))}
         </div>
         <div className='px-5 pt-5'>
          <p className="font-medium pb-2 text-gray-699">Sort By</p>
           {sortOptions.map((option, index) =>(
            <RadioButton key={index} label={option}/>
           ))}
         </div>
       </div>
    
      </div>



    </div>
  )
}

export default Hotels
