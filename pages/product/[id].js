import React from 'react'
import { useRouter } from 'next/router'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { VscHeart } from 'react-icons/vsc'
import Navbar from '../components/Navbar';
import MainHeader from '../components/Header';

export default function ProductDetail() {
    const route = useRouter();

    // console.log("ROUTE", route)

    return (
        <div>
            <MainHeader />
            <Navbar />
            <div className="flex justify-center text-lg mb-4 bg-gray-100 py-4">
                <a href="#" className="text-sky-400 hover:text-sky-400">Home</a>
                <span className="text-gray-500 mx-2">/</span>
                <a href="/hot-deal" className=" hover:text-sky-400">Hot Deal</a>
                <span className="text-gray-500 mx-2">/</span>
                <a href="/hot-deal" className=" hover:text-sky-400">Hot Deal</a>
            </div>

            <div className='flex justify-center gap-4'>
                <div className='flex my-6 border border-red-500'>
                    <div className='self-center'>
                        <img className='' src='../product_3.png' alt='Loding....' /></div>
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
                        <div className='flex my-4 '>
                            <div className='flex border px-2 py-2 bg-blue-100'>
                                <AiOutlineShoppingCart className='icon_shopping' />
                                <button type='button' className='px-2 text-sky-400'>Add To Cart </button>
                            </div>
                            <div className='border mx-6 py-2 bg-blue-100'> <VscHeart className='icon_shopping mx-2' /></div>
                        </div>
                    </div>
                </div>



                <div className='border border-sky-600'>
                    <div>BEST SELLER</div>
                    <div>
                        <img src="../Product_2.png" alt="loding...." className='w-96' />
                        <div>*****</div>
                        <div>
                            <spna>$499</spna>
                            <span>$599</span>
                        </div>
                    </div>
                    <div>_______</div>
                </div>
            </div>





        </div>
    )
}
