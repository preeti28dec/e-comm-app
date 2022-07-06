import React from 'react'

function Shop_component() {
    return (
        <>
            <div className='flex card_section items-center'>
                <div className="card relative ">
                    <div className=' absolute my-3'>
                        <div className="font-bold tracking-tight text-blue-900 ml-4">FS -QUILTED MAXI<br /> CROSS BAG</div>
                    </div>
                    <img className=" shop_image" src="./Product_3.png" alt="Loding......" />
                    <div className="new_class flex justify-between gap-2 mx-4 my-2">
                        <span className='text-gray-300'>$534,33 </span>
                        <span className='text-red-400'>24% Off</span>
                        <div className="mx-2 ">
                            <span className="text-3xl font-bold text-blue-500 ">$299,43</span>
                        </div>
                    </div>
                </div>

                <div className="card  relative ">
                    <div className='absolute my-4'>
                        <div className="font-bold tracking-tight text-blue-900 ml-4">FS -QUILTED MAXI<br /> CROSS BAG</div>
                    </div>
                    <img className=" shop_image" src="./Product_3.png" alt="Loding......" />
                    <div className="flex  gap-2 mx-4 my-2">
                        <span className='text-gray-300'>$534,33 </span>
                        <span className='text-red-400'>24% Off</span>
                        <div className="mx-2 price_sec_item">
                            <span className="text-3xl font-bold text-blue-500 ">$299,43</span>
                        </div>
                    </div>
                </div>

                <div className="card  relative ">
                    <div className='absolute'>
                        <div className="font-bold tracking-tight text-blue-900 ml-4">FS -QUILTED MAXI<br /> CROSS BAG</div>
                    </div>
                    <img className=" shop_image" src="./Product_3.png" alt="Loding......" />
                    <div className="flex justify-between gap-2 mx-4 my-2">
                        <div className='text_third_item'>
                            <span className='text-gray-300'>$534,33 </span>
                            <span className='text-red-400'>24% Off</span></div>

                        <div className="mx-2">
                            <span className="text-3xl font-bold text-blue-500 ">$299,43</span>
                        </div>
                    </div>
                </div>
            </div>

        </>




    )
}

export default Shop_component
