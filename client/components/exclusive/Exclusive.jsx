import { exclusive } from "../data/data";
import Title from "../title/Title"
import { FaArrowRight } from "react-icons/fa6";


const Exclusive = () => {
  return (
    <div className="py-6 px-6 flex flex-col items-center md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row w-full justify-between items-center">
        <Title align='left' title='Exclusive Offers' subTitle='Take advantages of our exclusive offers and special package to enhance your stay' />
        <button className="group font-medium cursor-pointer border border-gray-300 p-2 flex gap-2 items-center ">
            View All Offers
            <FaArrowRight className="group-hover:translate-x-1 transition-all"/>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {exclusive.map((item,id) =>(
            <div key={id} className="group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center" style={{backgroundImage:'url(https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
              <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">{item.priceOff}% OFF</p>
              <div>
                <p className="text-2xl font-medium">{item.title}</p>
                <p>{item.description}</p>
                <p className="text-xs text-white/70 mt-3">Expires {item.expiryDate}</p>
              </div>
              <button  className="group font-medium cursor-pointer  p-2 flex gap-2 items-center ">
                View Offers
                <FaArrowRight className="group-hover:translate-x-1 transition-all"/>
              </button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Exclusive
