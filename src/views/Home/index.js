import React from 'react'

import Navbar from "./../../components/navbar"
import Recommended from "../../components/recommended"
import Banner from '../../components/banner'
function Home() {
  return (
    <div>
      <Navbar/>
      <Recommended/>
      <Banner/>
    </div>
  )
}

export default Home