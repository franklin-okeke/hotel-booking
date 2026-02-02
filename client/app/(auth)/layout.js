import AdminNavbar from "@/components/adminNavbar/AdminNavbar"
import Sidebar from "@/components/sidebar/Sidebar"


const OwnerLayout = ({children}) =>{
    return(
        <div >
            <AdminNavbar/> 
            <Sidebar/>
            {children} 
        </div>
    )
}

export default OwnerLayout