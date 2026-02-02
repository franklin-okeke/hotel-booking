"use client"
import Link from "next/link";
import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdBedroomParent } from "react-icons/md";
import { usePathname } from "next/navigation";

const Sidebar = () => {

    const pathname = usePathname()

    const SidebarLinks =[
        { 
            name:'Dashboard', 
            path:"/owner",
            icon:<MdSpaceDashboard />},

        { name:'Add Room', 
          path:"/owner/add-room",
          icon:<MdOutlineBedroomParent />
        },

        { name:'List Room', 
          path:"/owner/list-room",
          icon:<MdBedroomParent />
        },
    ]



  return (
    <div className='md:w-64 w-16 border-r h-full   text-base border-gray-300 pt-4 flex flex-col transition-all duration-300'>
       {SidebarLinks.map((item,index) =>{
         const isActive = pathname === item.path
         return(

         <Link key={index} href={item.path} className={`flex items-center px4 py-3 md:px-8 gap-3 transition-colors ${isActive ? 'bg-indigo-100 text-indigo-600 border-r-4 border-indigo-600':'text-gray-600 hover:bg-gray-100'}`}>

            <span className="min-h-6 min-w-6">{item.icon}</span>
             <p className="md:block hidden text-center">{item.name}</p>
         </Link>
         )
       })}
    </div>
  )
}

export default Sidebar
