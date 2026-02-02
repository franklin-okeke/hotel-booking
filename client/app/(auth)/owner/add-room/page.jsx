

"use client"
import Title from '@/components/title/Title'
import Image from 'next/image'
import { useState } from 'react'

const AddRoom = () => {
  const [images, setImages] = useState([null, null, null])
  const [roomDatas, setRoomDatas] = useState({
     name:'',
     roomType:'',
     price:0,
     guests: 0,
     amenities:{
      'Free Wifi':false,
      'Free Breakfast':false,
      'Room Service': false,
      'Free Massarge': false,
      'Pool Access': false
     }
  })

  const handleImageChange = (index, file) => {
    const updated = [...images]
    updated[index] = file
    setImages(updated)
  }

  return (
    <div className='flex justify-center lg:-ml-64 -mt-20 px-4'>
      <form>
        <Title
          title='Add Room'
          subTitle='Fill in the details carefully enter accurate room details'
          align='left'
        />

        <p className='text-gray-800 mt-10'>Images</p>

        <div className='flex gap-4 mt-2'>
          {images.map((image, index) => (
            <label key={index} className='cursor-pointer'>
              <Image
                src={image ? URL.createObjectURL(image) : '/upload-placeholder.png'}
                width={32}
                height={36}
                className='bg-gray-200 rounded-md h-12 w-12 object-cover opacity-80'
                alt='upload'
              />

              <input
                type='file'
                accept='image/*'
                hidden
                onChange={(e) => handleImageChange(index, e.target.files[0])}
              />
            </label>
          ))}
        </div>
              {/* select room type */}
        <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
           <div className="flex-1 max-w-48">
              <p className='text-gray-800 mt-4'>Room Type</p>
              <select
              value={roomDatas.roomType}
              onChange={e=> setRoomDatas({...roomDatas, roomType: e.target.value})}
              className='border opacity-70 border-gray-300 mt-1 rounded p-2 w-full'>
                <option value="">Select RoomType</option>
                <option value="Single Bed">Single Bed</option>
                <option value="Double Bed">Double Bed</option>
                <option value="Luxury Room">Luxury Room</option>
                <option value="Family Suit">Family Suit</option>
              </select>
           </div>

           {/* select price per night */}
           <div>
                <p className='mt-4 text-gray-800'>Price <span className='text-xs'>/Night</span></p>
                <input type="number" placeholder='0' className='border border-gray-300 mt-1 rounded p-2 w-24' value={roomDatas.price} onChange={e =>setRoomDatas({...roomDatas, price: e.target.value})} />
           </div>
        </div>
          {/* amenities */}
          <p className='mt-4 text-gray-800'>Amenities</p>
          <div className='flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm'>
            {Object.keys(roomDatas.amenities).map((amenity, index) =>(
              <div key={index} className='flex gap-2'>
                 <input type="checkbox" id={`amenities${index+1}`} checked={roomDatas.amenities[amenity]}
                 onChange={() =>setRoomDatas({...roomDatas,amenities: {...roomDatas.amenities,[amenity]: !roomDatas.amenities[amenity],},})}
                  />
                  <label htmlFor={`amenities${index+1}`}>{amenity}</label>
              </div>
            ))}
          </div>
          <div className='px-4 w-32 py-3 bg-blue-400 rounded-md cursor-pointer mt-4 text-white'>
            Add Room
          </div>
      </form>
    </div>
  )
}

export default AddRoom
