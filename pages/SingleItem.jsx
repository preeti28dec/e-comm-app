import React from 'react'
import { AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai'
import { VscHeart } from 'react-icons/vsc'
import Footer from './components/Footer'
import MainHeader from './components/Header'
import Navbar from './components/Navbar'
import { BsGrid3X3Gap } from 'react-icons/bs'

import Link from 'next/dist/client/link'
import LeftSidebar from './LeftSidebar'
import BigSheos from './BigSheos'

function SingleItem() {
    return (
        <div>
            <MainHeader />
            <Navbar />
            <div className="flex justify-center text-lg my-4">
                <a href="#" className="text-sky-400 hover:text-blue-800">Home</a>
                <span className="text-gray-500 mx-2">/</span>
                <Link href="/hot-deal"><a href="#" className=" hover:text-blue-800">Hot Deal</a></Link>

            </div>
            <div className='flex justify-center main_container gap-10 mt-5'>
                <div className='left_container '>
                    <LeftSidebar />
                </div>
                <div className='right_container'>
                    <div className='main_shoes'>
                      <BigSheos/>
                    </div>

                    <div>
                        <div className='flex justify-between bg-gray-100 rounded my-4 py-4 px-4'>
                            <div className='flex justify-around items-center gap-4 text-gray-500 short_list_item'>
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
                                        <div>
                                            <BsGrid3X3Gap className='icon_singel_item_page1' />
                                        </div>
                                    </a>
                                </Link>

                                <div className='mx-4'><AiOutlineMenu className='icon_singel_item_page2' /></div>
                            </div>
                        </div>
                    </div>

                    <div className='flex my-6'>
                        <div className='self-center'>
                            <img className='' src='./product_1.png' alt='Loding....' /></div>
                        <div>
                            <div className='singel_brand_name my-4'>Nike Airmax 270 React</div>
                            <div className='flex my-4'>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                </div>
                                <div className='px-4 text-gray-300'>O reviews </div>
                                <div className='text-blue-400'>Submit a review</div>
                            </div>
                            <hr />
                            <div className='flex items-center gap-2 my-4'>
                                <span className="text-2xl font-bold text-sky-400">
                                    $299,43
                                </span>
                                <span className='text-gray-300'>$534,33</span>
                                <span className='text-red-400 '>24%off</span>
                            </div>
                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...</p>
                            <div className='flex my-4 '>
                                <div className='flex border px-2 py-2 bg-blue-100'>
                                    <AiOutlineShoppingCart className='icon_shopping' />
                                    <button type='button' className='px-2 text-sky-400'>Add To Cart </button>
                                </div>
                                <div className='border mx-6 py-2 bg-blue-100'> <VscHeart className='icon_shopping mx-2' /></div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='flex my-6'>
                    
                        <div className='self-center'>
                            <img className='' src='./product_2.png' alt='Loding....' /></div>
                        <div>
                            <div className='singel_brand_name my-4'>Nike Airmax 270 React</div>
                            <div className='flex my-4'>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                </div>
                                <div className='px-4 text-gray-300'>O reviews </div>
                                <div className='text-blue-400'>Submit a review</div>
                            </div>
                            <hr />
                            <div className='flex items-center gap-2 my-4'>
                                <span className="text-2xl font-bold text-sky-400">
                                    $299,43
                                </span>
                                <span className='text-gray-300'>$534,33</span>
                                <span className='text-red-400 '>24%off</span>
                            </div>
                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...</p>
                            <div className='flex my-4 '>
                                <div className='flex border px-2 py-2 bg-blue-100'>
                                    <AiOutlineShoppingCart className='icon_shopping' />
                                    <button type='button' className='px-2 text-sky-400'>Add To Cart </button>
                                </div>
                                <div className='border mx-6 py-2 bg-blue-100'> <VscHeart className='icon_shopping mx-2' /></div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='flex my-6'>
                        <div className='self-center'>
                            <img className='' src='./product_3.png' alt='Loding....' /></div>
                        <div>
                            <div className='singel_brand_name my-4'>Nike Airmax 270 React</div>
                            <div className='flex my-4'>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                </div>
                                <div className='px-4 text-gray-300'>O reviews </div>
                                <div className='text-blue-400'>Submit a review</div>
                            </div>
                            <hr />
                            <div className='flex items-center gap-2 my-4'>
                                <span className="text-2xl font-bold text-sky-400">
                                    $299,43
                                </span>
                                <span className='text-gray-300'>$534,33</span>
                                <span className='text-red-400 '>24%off</span>
                            </div>
                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...</p>
                            <div className='flex my-4 '>
                                <div className='flex border px-2 py-2 bg-blue-100'>
                                    <AiOutlineShoppingCart className='icon_shopping' />
                                    <button type='button' className='px-2 text-sky-400'>Add To Cart </button>
                                </div>
                                <div className='border mx-6 py-2 bg-blue-100'> <VscHeart className='icon_shopping mx-2' /></div>
                            </div>
                        </div>
                    </div>



                    <div className=" Pagination my-4 border-gray-200 bg-gray-100">
                        <a href="#" className="hover:bg-blue-400 hover:text-white px-7 py-4 ">1 </a>
                        <a href="#" className="hover:bg-blue-400 hover:text-white px-7 py-4 ">2 </a>
                        <a href="#" className="hover:bg-blue-400 hover:text-white px-7 py-4 ">3 </a>
                        <a href="#" className="hover:bg-blue-400 hover:text-white px-7 py-4 ">4 </a>
                        <a href="#" className="hover:bg-blue-400 hover:text-white px-7 py-4 ">5 </a>
                        <a href="#" className="hover:bg-blue-400 hover:text-white px-7 py-4 ">6 </a>
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SingleItem
