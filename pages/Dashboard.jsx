import React from 'react'
import Link from 'next/link'
import Navbar from './components/Navbar'
import MainHeader from './components/Header'
import Shop_component from './components/Shop_component'
import Item_section from './components/Item_section'
import Footer from './components/Footer'
import Shoes_section from './components/Shoes_section'
import Card_Item from './components/Card_Item'
// import HomePage from './home'

function Dashboard() {
  return (
    <div>
      <div>
        <MainHeader />
      </div>
      <div>
        <Navbar />
      </div>
      <div className="bd_section ">
        <div className="bg_content container">
          <div className='font-bold text-white mx-auto text-[40px] sm:mt-20 sm:left-20 sm:text-[65px] bg_content_text '>Super Flash Sale <br /> 50% Off</div>
        </div>
      </div>
      <Shop_component />
      <div className=''>
        <Item_section />
      </div>
      <div>
        <Shoes_section />
      </div>
      <div>
        <Card_Item />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard