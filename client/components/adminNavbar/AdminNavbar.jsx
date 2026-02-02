import { UserButton } from "@clerk/nextjs"
import Link from "next/link"


const AdminNavbar = () => {
  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
     <Link href='/'>
       <h1 className="text-xl text-blue-500 font-bold">Royal Hotels</h1>
     </Link>  
    <UserButton/>  
      
    </div>
  )
}

export default AdminNavbar
