import React, { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
function Cart(props) {
    const [inputvalue,setInputValue]=useState(1)

  return (
         <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
              <div className="flex w-2/5"> 
                <div className="w-20">
                  <img className="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt=""/>
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-sm">Iphone 6S</span>
                  <span className="text-red-500 text-xs">Apple</span>
                  <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                </div>
              </div>
              <div className="flex justify-center items-center w-1/5">
              <AiOutlineMinus className="fill-current text-gray-600 w-5" onClick={()=>setInputValue(inputvalue-1)} />
                <input className="mx-2 border text-center w-8" type="" value={inputvalue} placeholder='1' onChange={(e)=>setInputValue(e.target.value)}/>
                <AiOutlinePlus className="fill-current text-gray-600 w-5" onClick={()=>setInputValue(inputvalue+1)}/>
              </div>
              <span className="text-center w-1/5 font-semibold text-sm">${props.value.price}</span>
              <span className="text-center w-1/5 font-semibold text-sm">${props.value.price*inputvalue}</span>
            </div>

  )
}

export default Cart
