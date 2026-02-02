'use client'
import { hootelRooms } from '@/components/data/data'
import Title from '@/components/title/Title'
import  { useState } from 'react'

const ListRoom = () => {

  const [rooms, setRooms] = useState(hootelRooms)
  const [isAvailable, setIsAvailable] = useState(true)



  return (
   
    <div className='flex justify-center lg:-ml-64 -mt-20 px-4'>
      <div>

      <Title align='left' title='Room Listing' subTitle='View, edit or manage all listed rooms. Keep the information up-to-date to provide the best experience for users'/>
      <p className='text-gray-500 mt-8'>All Rooms</p>
      <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3'>
        <table className='w-full'>
          <thead className='bg-gray-50'>
                 <tr>
                  <th className='py-3 px-4 text-gray-800 font-medium'> Name</th>
                  <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Facility</th>
                  <th className='py-3 px-4 text-gray-800 font-medium '>Price / Night</th>
                  <th className='py-3 px-4 text-gray-800 font-medium text-center'>Actions</th>
                 </tr>
            </thead>

              <tbody className='text-sm'>
                {hootelRooms.map((item,index) =>(
                  <tr key={index}>
                    <td className='px-4 py-3 text-gray-700 border-t border-gray-300'>
                      {item.roomType}
                    </td>
                    <td className='px-4 py-3 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                      {item.amenities.join(', ')}
                    </td>
                    <td className='px-4 py-3 text-gray-700 border-t border-gray-300 '>
                      {item.price}
                    </td>
                    <td className='px-4 py-3 text-red-500 text-center border-t border-gray-300 '>
                      <label className='relative inline-flex items-center text-gray-900 cursor-pointer gap-3'>
                          <input type="checkbox" className='sr-only' checked={isAvailable} readOnly />
                          <div className='w-12 h-7 bg-slate-300 rounded-full peer-checked:bg-blue-600 transition-colors duration-200'></div>
                          <span className='absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5'></span>
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
        </table>

      </div>



      </div>
    </div>
   
  )
}

export default ListRoom
