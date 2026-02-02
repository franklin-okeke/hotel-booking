"use client"
import { hootelRooms } from "@/components/data/data"
import Title from "@/components/title/Title"
import Image from "next/image"
import { useState } from "react"


const MyBookings = () => {

       const[isPaid, setIsPaid] = useState(false)
       

  return (
    <div className="py-20 md:pb-24 pt-24 px-4 lg:px-32  lg:pt-32">
      <Title title='My Bookings' subTitle='Easily manage your past, current and future hotel reservations in one place. Plan your trip seamlessly with just a few clicks' align='left'/>

      <div className="max-w-6xl mt-8 w-full text-gray-800">
        <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-semibold text-base py-3">
          <div className="w-1/3">Rooms</div>
          <div className="w-1/3">Date and Timings</div>
          <div className="w-1/3">Payments</div>
        </div>

        {hootelRooms.map((room) =>(
          <div key={room.id} className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t">
            {/* hootel details */}
            <div className=" flex flex-col md:flex-row">
              <Image 
              alt="booking" 
              src={room.image[0]}
              width={24}
              height={24}
              className="md:w-44 rounded shadow-lg object-cover  brightness-110 contrast-110"
              />
              <div className="flex flex-col gap-1.5 max-md:mt-3 md:ml-4">
                <p className="text-2xl">{room.name}
                <span className="text-sm ml-2">({room.roomType})</span>
                </p>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <span className="h-2 w-2 bg-yellow-300 rounded-full"/>
                  <span>Guests: {room.guests}</span>
                </div>
                <p className="text-base">Total: ${room.price}</p>
              </div>
            </div>

            {/* Date and Timings */}
            <div className="flex flex-row md:items-center md:gap-12 mt-3 gap-8">
                 <div>
                  <p>Check-In:</p>
                  <p className="text-gray-500 text-sm">23rd July 2026</p>
                 </div>
                 <div>
                  <p>Check-Out:</p>
                  <p className="text-gray-500 text-sm">20th August 2026</p>
                 </div>
            </div>

            {/* Payment status */}
            <div className="flex flex-col items-start justify-center pt-3">
     
              <div className="flex items-center gap-2">
                  <div className={`h-3 w-3 rounded-full ${isPaid ? 'bg-green-500':'bg-red-600'}`}/>
                  <p className={`text-sm ${isPaid? 'text-green-500':'text-red-600'}`}>{isPaid? 'Paid':'Not Paid'}</p>
              </div>
                {!isPaid && (
                  <button className="px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full hover:bg-gray-50 transition-all cursor-pointer">
                    Pay Now
                  </button>
                )}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default MyBookings
