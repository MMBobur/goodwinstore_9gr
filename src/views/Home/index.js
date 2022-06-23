import React from 'react'
import Footer from '../../components/footer'
import Newsletter from '../../components/newsletter'

import Navbar from "./../../components/navbar"


function Home() {
  return (
    <div>
      <Navbar/>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home