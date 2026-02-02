import Image from 'next/image'
import React from 'react'

const HotelReg = () => {

  const cities = ["Enugu","Lagos","Abia","Kano","Abuja"]


  return (
    <div className='fixed inset-0 z-100 items-center flex justify-center bg-black/70'>
        <form className='flex bg-white rounded-xl  w-xl max-md:mx-2'>
            <Image src='https://images.unsplash.com/photo-1659354219028-cae11db067c4?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='admin-logo'
            width={600}
            height={800}
             className='w-1/2 rounded-xl hidden md:block object-cover'
            />

            <div className='relative flex flex-col items-center md:w-1/2 p-8 md:p-10'>
              <h1 className='absolute top-4 right-4 text-3xl text-gray-600 cursor-pointer'>X</h1>
              <p className='text-lg mt-6 font-semibold'>Register Your Hotel</p>
               
               {/* Name */}
              <div className='w-full mt-2'>
                <label htmlFor="name" className='font-medium text-gray-500'>
                   Room Name
                </label>
                <input id='name' type="text" placeholder='Type here'
                className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light'
                required
                 />
              </div>

                {/* Phone */}
              <div className='w-full mt-2'>
                <label htmlFor="contact" className='font-medium text-gray-500'>
                  Phone
                </label>
                <input id='contact' type="number" placeholder='Type here'
                className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light'
                required
                 />
              </div>
               
               {/* Address */}
              <div className='w-full mt-2'>
                <label htmlFor="address" className='font-medium text-gray-500'>
                  Address
                </label>
                <input id='address' type="text" placeholder='Type here'
                className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light'
                required
                 />
              </div>

              {/* select city dropdown */}
              <div className='w-full mt-4 max-w-60 mr-auto'>
                <label htmlFor="city" className='font-medium text-gray-500'>City</label>
                <select  id="city" className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required>
                  <option value="">Select City</option>
                  {cities.map((city,index) =>(
                    <option key={index} value={city}>{city}</option>
                  ))}
                </select>
              </div>
             <button className='bg-indigo-500 hover:bg-indigo-600 transition-all mr-auto mt-3 text-white px-6 py-2 rounded cursor-pointer'>
                Register
             </button>
                
            </div>
        </form>
      
    </div>
  )
}

export default HotelReg
