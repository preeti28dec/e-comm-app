import React, { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { VscHeart } from 'react-icons/vsc'



function Item_section() {
    const [data, setData] = useState([])
    const [loding, setLoding] = useState(true)

    useEffect(() => {
        async function GetData() {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setData(data)
                setLoding(false)
            }
            catch (err) {
                console.log(err);
            }
        }
        GetData();
    }, [])

    return (
        <div>
            <div className='flex  text-3xl mt-8 justify-center font-bold'>BEST SELLER</div>

            <div className='text-center mt-6 item_section_text'>
                <span className='mx-6 text-blue-400 underline'>All</span>
                <span className='mx-6 hover:text-blue-500 hover:underline'>Bags</span>
                <span className='mx-6 hover:text-blue-500 hover:underline'>Sneakers</span>
                <span className='mx-6 hover:text-blue-500 hover:underline'>Belt</span>
                <span className='mx-6 hover:text-blue-500 hover:underline'>Sunglasses</span>


            </div>
            <div className="bg-white">

                <div className="bg-white">
                    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

                        {loding === true ?
                            <>
                                <div className="spinner-container">
                                    <div className="loading-spinner"></div>
                                </div>
                            </>
                            :
                            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                {data.map((product) => (
                                    <div key={product.id} className="shadow-md border rounded group relative">
                                        <div className='container2'>
                                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none All_card clip-path  image">
                                                <img
                                                    src={product.image}
                                                    alt={product.imageAlt}
                                                    className="w-full h-full object-cente lg:w-full lg:h-full object-contain bg-white"
                                                />
                                                <div className='flex gap-3 middle'>
                                                    <VscHeart className='text' />
                                                    <AiOutlineShoppingCart className='text' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <a href="#">
                                                <div className="item_section_barnd_name">{product.category}</div></a>
                                            <div className="flex items-center mt-2.5 mx-8">
                                                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <span className="text-2xl font-bold text-blue-500">
                                                    ${product.price}
                                                </span>
                                                <span className='text-gray-300'><del><del>$534,33</del></del></span>
                                                <span className='text-red-400 '>24%off</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }



                    </div>
                </div>

            </div>
            <div className='text-center text-sm  text-blue-400 my-6 underline'>LOAD MORE</div>
        </div>

    )
}
export default Item_section
