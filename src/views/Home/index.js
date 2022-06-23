import React from 'react'
import Footer from '../../components/footer'
import Newsletter from '../../components/newsletter'

import Navbar from "./../../components/navbar"
import Lates from "./../../components/lates"
import Recommended from "../../components/recommended"
import Banner from '../../components/banner'
import Category from '../../components/category'


function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Category/>
      <Recommended/>
      <Lates/>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home