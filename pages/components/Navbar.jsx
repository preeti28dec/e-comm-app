import React from 'react'
import {MdRecommend} from 'react-icons/md'

function Navbar() {
  return (
    <div class=" rounded-lg shadow md:px-6 md:py-4 ">
    <div class="sm:flex sm:items-center sm:justify-between">
    <div className="flex items-center flex-shrink-0 mr-6">
         <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http:www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
         <span className="font-semibold text-xl tracking-tight">E-comm</span>
       </div>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">Home</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">BAGS</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">SNEAKERS</a>
            </li>
            <li>
                <a href="#" class="hover:underline">BELT</a>
            </li>
            <li>
                <a href="#" class="hover:underline">BELT</a>
            </li>
          </ul>
    </div>
</div>

  )
}

export default Navbar
