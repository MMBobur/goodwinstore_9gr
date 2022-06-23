import React from 'react'

import Navbar from "./../../components/navbar"
import Lates from "./../../components/lates"
import Recommended from "../../components/recommended"
import Banner from '../../components/banner'

function Home() {
  return (
    <div>
      <Navbar/>
      <Lates/>
      <Recommended/>
      <Banner/>
    </div>
  )
}

export default Home