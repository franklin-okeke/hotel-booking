import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"

const publicLayout = ({children}) =>{
    return(
        <div>
            <Navbar/>
            {children}
            <Footer/>
            </div>
    )
}

export default publicLayout