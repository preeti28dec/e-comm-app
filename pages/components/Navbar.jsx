import React from 'react'
import Link from 'next/dist/client/link'

function Navbar() {
  return (
    <div className=" rounded-lg shadow md:px-6 md:py-4 ">
      <div className="flex justify-between">
        <div className="flex items-center">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http:www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
          <span className="font-semibold text-xl tracking-tight">E-comm</span>
        </div>
        <ul className="flex flex-wrap items-center  text-sm text-gray-500 ">
          <li>
            <Link href="/home">
              <div className="dropdown">
                <a className="dropbtn mr-4 text-sky-400 header_text">Home</a>
                <div className="dropdown-content">

                  <div className='main_table mb-4'>
                    <div className='table_head flex justify-between mx-8 mt-4'>
                      <div className='dropdown_text my-4'>Category</div>
                      <div className='dropdown_text my-4'>Category</div>
                      <div className='dropdown_text my-4'>Category</div>
                    </div>
                    <div className='table_data flex  mx-3  justify-between'>
                      <div className=' dropdown_text_ mx-4 my-2'>Coporate</div>
                      <div className=' dropdown_text_  mx-4 my-2'>Coporate</div>
                      <div className=' dropdown_text_  mx-4 my-2'>Coporate</div>
                      <div className=' dropdown_text_  mx-4 my-2'>Coporate</div>
                      <div className=' dropdown_text_  mx-4 my-2'>Coporate</div>
                    </div>
                    <div className='table_data flex  mx-3 justify-between'>
                      <div className=' dropdown_text_  mx-4 my-2'>Coporate</div>
                      <div className=' dropdown_text_  mx-4 my-2'>Coporate</div>
                      <div className=' dropdown_text_  mx-4 my-2'>Coporate</div>
                      <div className=' dropdown_text_  mx-4 my-2'>Coporate</div>
                      <div className=' dropdown_text_  mx-4 my-2'>Coporate</div>
                    </div>
                    <div className='table_data flex  mx-3  justify-between'>
                      <div className=' dropdown_text_  mx-4 my-2'>Coporate</div>
                      <div className=' dropdown_text_  mx-4 my-2'>Coporate</div>
                      <div className=' dropdown_text_  mx-4 my-2'>Coporate</div>
                      <div className=' dropdown_text_  mx-4 my-2'>Coporate</div>
                      <div className=' dropdown_text_  mx-4 my-2'>Coporate</div>
                    </div>
                    <div className='table_data flex  mx-3  justify-between'>
                      <div className=' dropdown_text_  mx-4 my-2'>Coporate</div>
                      <div className=' dropdown_text_  mx-4 my-2'>Coporate</div>
                      <div className=' dropdown_text_  mx-4 my-2'>Coporate</div>
                      <div className=' dropdown_text_  mx-4 my-2'>Coporate</div>
                      <div className=' dropdown_text_  mx-4 my-2'>Coporate</div>
                    </div>
                    <div className='table_data flex mx-3 justify-between'>
                      <div className=' dropdown_text_  mx-4 my-2'>Coporate</div>
                      <div className=' dropdown_text_  mx-4 my-2'>Coporate</div>
                      <div className=' dropdown_text_  mx-4 my-2'>Coporate</div>
                      <div className=' dropdown_text_  mx-4 my-2'>Coporate</div>
                      <div className=' dropdown_text_  mx-4 my-2'>Coporate</div>
                    </div>

                  </div>
                </div>
              </div>
            </Link>

          </li>
          <li>
            <a href="#" className="mr-4 text-black hover:text-blue-400 header_text   ">BAGS</a>
          </li>
          <li>
            <a href="#" className="mr-4 text-black hover:text-blue-400 header_text  ">SNEAKERS</a>
          </li>
          <li>
            <a href="#" className="mr-4 text-black hover:text-blue-400 header_text   ">BELT</a>
          </li>
          <li>
            <a href="#" className="mr-4 text-black hover:text-blue-400 header_text   ">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default Navbar
