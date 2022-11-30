import React, { useState, useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { CartContext } from "../container/context";

export default function AddCart(props) {
  const [inputvalue, setInputValue] = useState(1);
  const { cart,setCart } = useContext(CartContext);
  console.log(cart,"fsdfdf");
  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="sm:flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={props?.value?.image} alt="" />
        </div>
        <div className="sm:flex flex-col justify-between ml-4 flex-grow">
          <div className="font-bold text-sm">{props?.value?.title}</div>
          <div className="text-red-500 text-xs">{props?.value?.category}</div>
          <div>
            <button
              onClick={() => {
                setCart((s) => {
                  return s.filter((k) => {
                    return k.id != props?.value?.id;
                  });
                });
              }}
            > <a href="#" className="font-semibold text-blue-500 hover:text-red-500 text-xs">
                Remove
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="sm:flex justify-center items-center sm:w-1/5">
        <AiOutlineMinus
          className="fill-current text-gray-600 mx-auto w-5 my-2"
          onClick={() => setInputValue(inputvalue - 1)}
        />
        <input
          className="mx-2 border text-center w-8"
          type=""
          value={inputvalue}
          placeholder="1"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <AiOutlinePlus
          className="fill-current text-gray-600 mx-auto my-2 w-5"
          onClick={() => setInputValue(inputvalue + 1)}
        />
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">
        ${props?.value?.price}
      </span>
      <span className="text-center w-1/5 font-semibold text-sm">
        ${props?.value?.price * inputvalue}
      </span>
    </div>
  );
}
