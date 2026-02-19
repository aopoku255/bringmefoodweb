
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import SectionOne from '../components/vendor/SectionOne'
import SectionTwo from '../components/vendor/SectionTwo'

const Vendor = () => {
  return (
    <section>
        <Banner showBtn={false} showSub={true} showRight={true}/>
        <SectionOne/>
        <SectionTwo/>
        <Footer/>
    </section>
  )
}

export default Vendor