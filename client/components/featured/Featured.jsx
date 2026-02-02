"use client"
import Image from "next/image"
import { hootelRooms } from "../data/data"
import Title from "../title/Title"
import { useRouter } from "next/navigation"
import Link from "next/link"

const Featured = () => {

  const router = useRouter()
  // display only three rooms at featured section
  const featuredRooms = hootelRooms.slice(0, 3)


  return (
    <div className="px-4 py-10">
      <Title title='Featured Destination' subTitle='Explore some of our elegant luxurius rooms'/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredRooms.map((room, id) => (
          <div
            key={id}
            className="max-w-sm w-full bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
          >
            {/* Image */}
            <Link href={`/all-rooms/${room.id}`}>
            <div className="relative h-48 overflow-hidden">
              <Image
              fill
               brightness-110='true' contrast-110='true'
                src={room.image[0]}
                alt={room.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
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
      <button onClick={() =>router.push('/all-rooms')} className="my-16 mx-12 lg:mx-96 px-4  py-2 text-sm font-medium border border-black rounded bg-white hover:bg-gray-50 transition-all cursor-pointer">
        View All Rooms
      </button>
    </div>
  )
}

export default Featured
