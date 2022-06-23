import React from 'react'
import Footer from '../../components/footer'
import Newsletter from '../../components/newsletter'
import Recommend from '../../components/recommend'

import Navbar from "./../../components/navbar"


function Home() {
  return (
    <div>
      <Navbar/>
      <Recommend />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home