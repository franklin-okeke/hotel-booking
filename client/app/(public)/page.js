import Exclusive from '@/components/exclusive/Exclusive'
import Featured from '@/components/featured/Featured'
import Hero from '@/components/hero/Hero'
import HotelReg from '@/components/hotelReg/HotelReg'
import NewsLatter from '@/components/newslatter/NewsLatter'
import Testimonial from '@/components/testimonial/Testimonial'


const Home = () => {
  return (
    <div>
       <Hero/>
       <Featured/>
       <Exclusive />
       <Testimonial/>
       <NewsLatter/>
       {false && <HotelReg/>}
    </div>
  )
}

export default Home
