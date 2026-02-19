import React from 'react'
import Banner from '../components/Banner'
import SectionThree from '../components/vendor/SectionThree'
import Footer from '../components/Footer'

const Rider = () => {
  return (
    <section>
      <Banner showSub={false} showRight={false} showBtn={true}/>
      <SectionThree/>
      <Footer/>
    </section>
  )
}

export default Rider