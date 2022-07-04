import React from 'react'

function Shop_component() {
    return (
        <div className='flex card_section'>
            <div className="card hover:outline-2 ">
                <div className='my-2'>
                <h5 className="font-bold tracking-tight text-blue-900 ml-4">FS -QUILTED MAXI CROSS BAG</h5></div>
                <img className="rounded-t-lg shop_image" src="./Product_image.png" alt="Loding......" />
                <div className=" flex justify-between mx-4 my-4">
                    <div>
                        <span className='text-gray-300'>$534,33 </span>
                        <span className='text-red-400'>24% Off</span>
                    </div>
                    <div className="flex justify-between items-center ">
                        <span className="text-3xl font-bold text-blue-500 ">$299,43</span>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className='my-2 flex justify-between'>
                    <h5 className="font-bold tracking-tight text-blue-900 ml-4">FS - Nike Air Max 270 React... </h5>
                    <div className=" items-center">
                        <span className="text-3xl font-bold text-blue-500 mr-4 ">$299,43</span>
                    </div>
                </div>
                <img className="rounded-t-lg shop_image" src="./Product_image.png" alt="Loding......" />
                <div className="flex justify-center mx-4 my-4">
                    <div>
                        <span className='text-gray-300'>$534,33 </span> 
                        <span className='text-red-400'>24% Off</span>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className='my-2'><h5 className="font-bold tracking-tight text-blue-900 ml-4">FS - Nike Air Max 270 React...</h5>
                    <div className='ml-4'>
                        <span className='text-gray-300'>$534,33 </span>
                        <span className='text-red-400'>24% Off</span>
                    </div>
                </div>
                <img className="rounded-t-lg shop_image" src="./Product_image.png" alt="Loding......" />

                <div className="flex justify-between items-center ml-4">
                    <span className="text-3xl font-bold text-blue-500 ">$299,43</span>
                </div>

            </div>
        </div>

    )
}

export default Shop_component
