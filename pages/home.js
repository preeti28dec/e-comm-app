import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsGrid3X3Gap } from 'react-icons/bs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LeftSidebar from './container/LeftSidebar'
import BigSheos from './container/BigSheos'
import Products from './container/Products'
import Link from 'next/link'
function HomePage() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center text-lg mb-4 bg-gray-100 py-4">
                <Link href="/" className="text-sky-400 hover:text-sky-400"><a>Home</a></Link>
                <span className="text-gray-500 mx-2">/</span>
                <a href="#" className=" hover:text-sky-400">Hot Deal</a>
            </div>
            <div className='flex justify-center main_container gap-10 mt-5'>
                <div className='left_container '>
                    <LeftSidebar />
                </div>
                <div className='right_container'>
                    <div>
                        <div className='main_shoes'>
                          <BigSheos/>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between bg-gray-100 rounded my-4 py-4 px-4'>
                            <div className='px-2 flex justify-around items-center gap-16 text-gray-500 short_list_item'>
                                <div>13 Item</div>
                                <div>Short By</div>
                                <div className="">
                                    <select name="Name" className="mt-1 py-2 px-6 border border-gray-300  rounded " >
                                        <option >Name</option>
                                        <option>fgyuyiuy</option>
                                        <option>tgjygujyg</option>
                                        <option>fgyuyiuy</option>
                                        <option>tgjygujyg</option>
                                        <option>fgyuyiuy</option>
                                        <option>tgjygujyg</option>
                                    </select>
                                </div>

                                <div className='flex gap-6 items-center'>
                                    <div className=''>Show</div>
                                    <select name="Name" className="mt-1 py-2 px-6 border border-gray-300  rounded " >
                                        <option>12</option>
                                        <option>25</option>
                                        <option>34</option>
                                        <option>12</option>
                                        <option>25</option>
                                        <option>34</option>
                                    </select>
                                </div>


                            </div>
                            <div className='flex items-center '>
                                <Link href="/home">
                                    <a className="  ">
                                        <div><BsGrid3X3Gap className='icon_home_page1' /></div>
                                    </a>
                                </Link>
                                <Link href="/SingleItem">
                                    <a className="  ">
                                        <div className='mx-4'><AiOutlineMenu className='icon_home_page ' /></div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Products />
                    </div>
                    <div className=" Pagination my-4 border-gray-200 bg-gray-100">
                        <a href="#" className="hover:bg-sky-400 hover:text-white px-7 py-4 ">1 </a>
                        <a href="#" className="hover:bg-sky-400 hover:text-white px-7 py-4 ">2 </a>
                        <a href="#" className="hover:bg-sky-400 hover:text-white px-7 py-4 ">3 </a>
                        <a href="#" className="hover:bg-sky-400 hover:text-white px-7 py-4 ">4 </a>
                        <a href="#" className="hover:bg-sky-400 hover:text-white px-7 py-4 ">5 </a>
                        <a href="#" className="hover:bg-sky-400 hover:text-white px-7 py-4 ">6 </a>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default HomePage

