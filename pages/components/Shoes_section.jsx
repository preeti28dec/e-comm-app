import React from 'react'

function Shoes_section() {
    return (
        <>
        <div className='main_shoes_conatiner'>
            <div className='flex justify-between bg-blue-400'>
                <div className="text_content">
                    <div className='text-6xl text-white'>Adidas Men Running <br/>Sneakers</div>
                    <div className='text-white text-xl font-bold mt-8'>Performance and design. Taken right to the edge.</div>
                    <div className='text-white text-xl font-bold mt-3'>SHOP NOW</div>
                </div>
                <div className='shoes_image'>
                    <img src='./shoes_image.png' alt='Loding' />
                </div>

            </div>
        </div>
        </>

    )
}

export default Shoes_section
