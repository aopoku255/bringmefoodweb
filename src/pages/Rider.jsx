import React from 'react'
import Banner from '../components/Banner'
import SectionThree from '../components/vendor/SectionThree'
import Footer from '../components/Footer'
import Navbar2 from '../components/Navbar2'

const Rider = () => {
  return (
    <section>
      <Navbar2/>
      <Banner showSub={false} showRight={false} showBtn={true}/>
      <SectionThree/>
      <Footer/>
    </section>
  )
}

export default Rider