import React from 'react'
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa'

function MainHeader() {
    return (
        <div className='main_header mx-10 my-3'>
            <div className="flex justify-between">
                <div className="col-start-1 col-end-3 ...">
                    <div className='flex'>
                        <button type="button" className=" inline-flex items-center text-base " >
                            <span className=''>EN</span>
                            <svg className=" ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <button type="button" className="inline-flex items-center text-base ml-3" >
                            <span className=''>USD</span>
                            <svg className=" ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex gap-5">
                        <div className='flex user_profile'>
                            <div className='self-center mx-1'><FaRegUser /></div>
                            <div>My profile</div>
                        </div>
                        <div className='flex shop_items self-center'>
                            <AiOutlineShoppingCart />
                        </div>
                        <div>
                            Items
                        </div>
                        <div className='flex  search_price'>
                            <div>$0.00</div>
                            <div className='self-center mx-2'><AiOutlineSearch /></div>
                        </div>
                </div>
            </div>

            

        </div>
    )
}
export default MainHeader
