import React from 'react'
import Footer from '../../components/footer'
import Newsletter from '../../components/newsletter'

import Navbar from "./../../components/navbar"
import Lates from "./../../components/lates"
import Recommended from "../../components/recommended"
import Banner from '../../components/banner'


function Home() {
  return (
    <div>
      <Navbar/>
      <Newsletter />
      <Footer />
      <Lates/>
      <Recommended/>
      <Banner/>
    </div>
  )
}

export default Home