import Link from 'next/link';
import React, { useContext } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Navbar from './components/Navbar';
import AddCart from './container/cart'
import { CartContext } from './container/context';

export default function ShoppingCart() {
  const {cart}=useContext(CartContext)
  const totalAmout= cart.reduce((totalCost, { price: price }) => totalCost + (price), 0);

  return (
    <>
    <Navbar/>
    <div className="bg-gray-100">
      <div className="container mx-auto mt-10">
        <div className="sm:flex shadow-md my-10">
          <div className="sm:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
            </div>
            <div className="flex  mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase sm:w-1/5 text-center">Quantity</h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
            </div>
            {cart.map((i,ind)=>{
              return (<div key={ind} >
                  <AddCart value={i}/>
            </div>)
            })}
            <Link href="/">
            <a  className="flex items-center font-semibold text-indigo-600 text-sm mt-10">
            <AiOutlineArrowLeft className="fill-current mr-2 text-indigo-600 text-xl"/>
               Continue Shopping
            </a>
            </Link>
          </div>

          <div id="summary" className=" bg-[#f6f6f6] sm:w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Items {cart.length}</span>
              <span className="font-semibold text-sm">{totalAmout}$</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label  className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
              <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full"/>
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${totalAmout}</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}



