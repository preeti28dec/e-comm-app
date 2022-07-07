import React from 'react'

function Shop_component() {
    return (
        <>
            <div className='flex card_section items-center'>
                <div className="card relative ">
                    <div className=' absolute my-3'>
                        <div className="font_size tracking-tight text-blue-900 ml-4">FS -QUILTED MAXI<br /> CROSS BAG</div>
                    </div>
                    <img className=" shop_image" src="./Product_1.png" alt="Loding......" />
                    <div className="new_class flex justify-between gap-2 mx-4 ">
                        <span className='text-gray-300'><del>$534,33</del> </span>
                        <span className='text-red-400'>24% Off</span>
                        <div className="mx-2 ">
                            <span className="text_size">$299,43</span>
                        </div>
                    </div>
                </div>

                <div className="card relative ">
                    <div className=' absolute my-3'>
                        <div className="font_size tracking-tight text-blue-900 ml-4">FS -QUILTED MAXI<br /> CROSS BAG</div>
                    </div>
                    <img className=" shop_image" src="./Product_2.png" alt="Loding......" />
                    <div className="new_class flex justify-between gap-2 mx-4 my-2">
                        <span className='text-gray-300'><del>$534,33</del> </span>
                        <span className='text-red-400'>24% Off</span>
                        <div className="mx-2 ">
                            <span className="text_size price_sec_item">$299,43</span>
                        </div>
                    </div>
                </div>

                <div className="card  relative ">
                    <div className='absolute'>
                        <div className="font_size tracking-tight text-blue-900 ml-4">FS -QUILTED MAXI<br /> CROSS BAG</div>
                    </div>
                    <img className=" shop_image" src="./Product_3.png" alt="Loding......" />
                    <div className="flex justify-between gap-2 mx-4">
                        <div className='text_third_item'>
                            <span className='text-gray-300'><del>$534,33</del> </span>
                            <span className='text-red-400'>24% Off</span></div>
                        <div className="mx-2">
                            <span className="text_size">$299,43</span>
                        </div>
                    </div>
                </div>
            </div>

        </>




    )
}

export default Shop_component
