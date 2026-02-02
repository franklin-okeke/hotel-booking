"use client"
import Title from '@/components/title/Title'
import { useState } from 'react';
import { FaListUl } from "react-icons/fa";

const Dashboard = () => {

  const [isPaid, setIsPaid] = useState(false)

  return (
    <div className='flex -mt-30 items-center flex-col justify-center'>
    <Title title='Dashboard' align='left' subTitle='Monitor your room listings, track bookings and analyze revenue all in one place. Stay updated with real time insight to ensure smooth operations'/>

    <div className='gap-4 my-8 flex'>
      {/* total booking */}
      <div className='bg-indigo-300 -ml-64 border h-18 border-indigo-200 rounded flex p-4 pr-8'>
           <FaListUl className='max-sm:hidden h-10'/>
           <div className='flex items-center flex-col sm:ml-4 font-medium'>
            <p className='text-indigo-600 font-bold text-lg'>Total Bookings</p>
            <p className='text-neutral-900 text-base'>4</p>
           </div>
      </div>
      {/* total revenue */}
      <div className='bg-indigo-300 border h-18 border-indigo-200 rounded flex p-4 pr-8'>
           <FaListUl className='max-sm:hidden h-10'/>
           <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-indigo-600 font-bold text-lg'>Total Revenue</p>
            <p className='text-neutral-900 text-base'>$ 569</p>
           </div>
      </div>
     
    </div>
         {/* recent bookings */}
        <h1 className='text-xl text-blue-950/70 -ml-96 font-medium mb-5'>Recent Bookings</h1> 
        <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll'>

          <table className='w-full'>
            <thead className='bg-gray-50'>
                 <tr>
                  <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
                  <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Room Name</th>
                  <th className='py-3 px-4 text-gray-800 font-medium text-center'>Total Amount</th>
                  <th className='py-3 px-4 text-gray-800 font-medium text-center'>Payment Status</th>
                 </tr>
            </thead>
            <tbody className='text-sm'>
              <tr>
                <td className='px-4 py-3 text-gray-700 border-t border-gray-300'>Franklin Okeke</td>

                <td className='px-4 py-3 text-gray-700 border-t border-gray-300 max-sm:hidden'>Executive Room</td>

              <td className='px-4 py-3 text-gray-700 border-t border-gray-300 text-center'>$ 567.90</td>

              <td className="px-4 py-3 border-t border-gray-300 flex">
                <button className={`px-3 py-1 text-xs rounded-full mx-auto ${isPaid ? 'bg-green-200 text-green-600':'bg-amber-200 text-yellow-600'}`}>
                  {isPaid ? 'Completed':'Pending'}
                </button>
              </td>
              </tr>
              <tr>
                <td className='px-4 py-3 text-gray-700 border-t border-gray-300'>Franklin Okeke</td>

                <td className='px-4 py-3 text-gray-700 border-t border-gray-300 max-sm:hidden'>Executive Room</td>

              <td className='px-4 py-3 text-gray-700 border-t border-gray-300 text-center'>$ 567.90</td>

              <td className="px-4 py-3 border-t border-gray-300 flex">
                <button className={`px-3 py-1 text-xs rounded-full mx-auto ${isPaid ? 'bg-green-200 text-green-600':'bg-amber-200 text-yellow-600'}`}>
                  {isPaid ? 'Completed':'Pending'}
                </button>
              </td>
              </tr>
              <tr>
                <td className='px-4 py-3 text-gray-700 border-t border-gray-300'>Franklin Okeke</td>

                <td className='px-4 py-3 text-gray-700 border-t border-gray-300 max-sm:hidden'>Executive Room</td>

              <td className='px-4 py-3 text-gray-700 border-t border-gray-300 text-center'>$ 567.90</td>

              <td className="px-4 py-3 border-t border-gray-300 flex">
                <button className={`px-3 py-1 text-xs rounded-full mx-auto ${!isPaid ? 'bg-green-200 text-green-600':'bg-amber-200 text-yellow-600'}`}>
                  {isPaid ? 'Pending':'Completed'}
                </button>
              </td>
              </tr>


            </tbody>
          </table>

        </div>
    </div>
  )
}

export default Dashboard
